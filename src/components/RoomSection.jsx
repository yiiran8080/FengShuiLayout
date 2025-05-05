'use client';
import { useEffect, useState } from 'react';
import RoomCanvas from './RoomCanvas';
import { useSession } from 'next-auth/react'
import { get } from "@/lib/ajax";
// 根据角度确定方位
const directions = [
    { name: 'north', range: [337.5, 22.5], baseAngle: 0 },
    { name: 'northEast', range: [22.5, 67.5], baseAngle: 45 },
    { name: 'east', range: [67.5, 112.5], baseAngle: 90 },
    { name: 'southEast', range: [112.5, 157.5], baseAngle: 135 },
    { name: 'south', range: [157.5, 202.5], baseAngle: 180 },
    { name: 'southWest', range: [202.5, 247.5], baseAngle: 225 },
    { name: 'west', range: [247.5, 292.5], baseAngle: 270 },
    { name: 'northWest', range: [292.5, 337.5], baseAngle: 315 }
];
export default function ({ jiajuDataString }) {
    const { data: session } = useSession();
    const [newDesignData, setNewDesignData] = useState({});
    //console.log(designData);
    useEffect(() => {
        const userId = session?.user?.userId;
        if (!userId) return;
        const loadData = async () => {
            const { data: designData } = await get(`/api/design/${userId}`);
            if (designData) {
                let roomList = handleDesignData(designData);
                let furnitureList = designData.localItems.filter(item => item._type === 'furniture');
                setNewDesignData({
                    ...designData,
                    localItems: [...roomList, ...furnitureList]
                })
                console.log('new designData', roomList);
            }
        }

        loadData()
    }, [session?.user?.userId])

    /**
     * 把房间分配九宫方位
     */
    const handleDesignData = (designData) => {

        let roomList = designData.localItems.filter(item => item._type === 'room');

        // 找到中宫房间（最中心的房间）
        const findCenterRoom = (rooms) => {
            let centerX = 0, centerY = 0;
            let minX = rooms[0].position.x + rooms[0].size.width / 2, minY = rooms[0].position.y + rooms[0].size.height / 2, maxX = rooms[0].position.x + rooms[0].size.width / 2, maxY = rooms[0].position.y + rooms[0].size.height / 2;
            rooms.forEach(room => {
                if (room.position.x + room.size.width / 2 < minX) {
                    minX = room.position.x + room.size.width / 2;
                }
                if (room.position.y + room.size.height / 2 < minY) {
                    minY = room.position.y + room.size.height / 2;
                }
                if (room.position.x + room.size.width / 2 > maxX) {
                    maxX = room.position.x + room.size.width / 2;
                }
                if (room.position.y + room.size.height / 2 > maxY) {
                    maxY = room.position.y + room.size.height / 2;
                }


            });
            // centerX /= rooms.length;
            // centerY /= rooms.length;
            centerX = (minX + maxX) / 2;
            centerY = (minY + maxY) / 2;
            //console.log('centerX', centerX, 'centerY', centerY);
            const centerRoom = rooms.find(item => item.position.x <= centerX &&
                item.position.x + item.size.width >= centerX &&
                item.position.y <= centerY &&
                item.position.y + item.size.height >= centerY
            )
            return {
                centerRoom,
                centerX,
                centerY
            }
        };

        // 计算房间相对于中宫的方位
        const calculateDirection = (room, centerRoom, centerX, centerY, newDirections) => {
            // 如果房间就是中宫
            if (room === centerRoom) {
                return 'center';
            }
            const roomCenterX = room.position.x + room.size.width / 2;
            const roomCenterY = room.position.y + room.size.height / 2;


            const dx = roomCenterX - centerX;
            const dy = roomCenterY - centerY;

            // 计算角度（以正北为0度，顺时针为正）
            let angle = Math.atan2(dx, -dy) * (180 / Math.PI);
            if (angle < 0) angle += 360;


            console.log('newDirections', angle, room, roomCenterX, roomCenterY, centerX, centerY);

            // 根据角度找到对应方位
            for (const dir of newDirections) {
                if (dir.range[0] !== 337.5) {
                    if (angle >= dir.range[0] && angle < dir.range[1]) {
                        return dir.name;
                    }
                } else {
                    if (angle >= dir.range[0] || angle < dir.range[1]) {
                        return dir.name;
                    }
                }

            }
        };

        // 主处理逻辑
        const { centerRoom, centerX, centerY } = findCenterRoom(roomList);
        const rotation = designData.compassRotation || 0;
        //console.log('designData', designData);

        const newDirections = ((rotation) => {

            // 将角度根据指南针角度重新计算基准
            let northIndex = directions.findIndex(item => item.baseAngle === rotation % 360);
            console.log('northIndex', northIndex);
            let newDirections = directions.slice(northIndex).concat(directions.slice(0, northIndex));

            return newDirections.map((item, index) => {
                return {
                    ...item,
                    name: directions[index].name
                }
            })
        })(rotation)
        //console.log('newDirections', newDirections);
        return roomList.map(room => {
            const direction = calculateDirection(room, centerRoom, centerX, centerY, newDirections);

            //const finalDirection = adjustDirection(initialDirection, rotation);
            return {
                ...room,
                direction
            };
        });
    }

    return <div>
        <RoomCanvas jiajuDataString={jiajuDataString} designJsonData={JSON.stringify(newDesignData)} />
    </div>
}