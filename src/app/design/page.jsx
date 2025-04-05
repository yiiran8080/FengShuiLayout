'use client'
import { DndContext, DragOverlay, pointerWithin } from '@dnd-kit/core';
import { useState, useRef,useEffect } from 'react';
import { ITEM_TYPES, ROOM_TYPES, FURNITURE_TYPES } from '@/types/room';
import { DraggableItem } from '@/components/DraggableItem';
import { Canvas } from '@/components/Canvas';
import Navbar from '@/components/NavbarDesign';
import Image from 'next/image';

const ROOM_COLORS = {
  [ROOM_TYPES.LIVING_ROOM]: '#F0DF9C',   // 客厅
  [ROOM_TYPES.DINING_ROOM]: '#F5D4BC',   // 饭厅
  [ROOM_TYPES.STORAGE_ROOM]: '#ADC0BC',  // 储物室
  [ROOM_TYPES.STUDY_ROOM]: '#B0B8C9',    // 书房
  [ROOM_TYPES.BEDROOM]: '#F5B8B8',       // 睡房
  [ROOM_TYPES.BATHROOM]: '#C1D7E2',      // 浴室
  [ROOM_TYPES.KITCHEN]: '#EDE0C6',       // 厨房
  [ROOM_TYPES.BALCONY]: '#D0DCAA',       // 阳台
  [ROOM_TYPES.GARDEN]: '#AACDBC',        // 花园
  [ROOM_TYPES.GARAGE]: '#C7C7DD',        // 车库
  [ROOM_TYPES.CORRIDOR]: '#CDCDCD',      // 走廊
};
const defaultRoomSize = { width: 324, height: 324 }
// const defaultFurSize = { width: draggingItemSize, height: 32 }

const roomItems = [
  {
    id: 'living-room',
    type: ITEM_TYPES.ROOM,
    data: {
      cateType: ITEM_TYPES.ROOM,
      type: ROOM_TYPES.LIVING_ROOM,
      label: '客厅',
      icon: '/images/room-icon/room.png',
      size: defaultRoomSize
    }
  },
  {
    id: 'dining-room',
    type: ITEM_TYPES.ROOM,
    data: {
      cateType: ITEM_TYPES.ROOM,
      type: ROOM_TYPES.DINING_ROOM,
      label: '饭厅',
      icon: '/images/room-icon/room.png',
      size: defaultRoomSize
    }
  },
  {
    id: 'storage-room',
    type: ITEM_TYPES.ROOM,
    data: {
      cateType: ITEM_TYPES.ROOM,
      type: ROOM_TYPES.STORAGE_ROOM,
      label: '储物室',
      icon: '/images/room-icon/room.png',
      size: defaultRoomSize
    }
  },
  {
    id: 'study-room',
    type: ITEM_TYPES.ROOM,
    data: {
      cateType: ITEM_TYPES.ROOM,
      type: ROOM_TYPES.STUDY_ROOM,
      label: '书房',
      icon: '/images/room-icon/room.png',
      size: defaultRoomSize
    }
  },
  {
    id: 'bedroom',
    type: ITEM_TYPES.ROOM,
    data: {
      cateType: ITEM_TYPES.ROOM,
      type: ROOM_TYPES.BEDROOM,
      label: '睡房',
      icon: '/images/room-icon/room.png',
      size: defaultRoomSize
    }
  },
  {
    id: 'bathroom',
    type: ITEM_TYPES.ROOM,
    data: {
      cateType: ITEM_TYPES.ROOM,
      type: ROOM_TYPES.BATHROOM,
      label: '浴室',
      icon: '/images/room-icon/room.png',
      size: defaultRoomSize
    }
  },
  {
    id: 'kitchen',
    type: ITEM_TYPES.ROOM,
    data: {
      cateType: ITEM_TYPES.ROOM,
      type: ROOM_TYPES.KITCHEN,
      label: '厨房',
      icon: '/images/room-icon/room.png',
      size: defaultRoomSize
    }
  },
  {
    id: 'balcony',
    type: ITEM_TYPES.ROOM,
    data: {
      cateType: ITEM_TYPES.ROOM,
      type: ROOM_TYPES.BALCONY,
      label: '阳台',
      icon: '/images/room-icon/room.png',
      size: defaultRoomSize
    }
  },
  {
    id: 'garden',
    type: ITEM_TYPES.ROOM,
    data: {
      cateType: ITEM_TYPES.ROOM,
      type: ROOM_TYPES.GARDEN,
      label: '花园',
      icon: '/images/room-icon/room.png',
      size: defaultRoomSize
    }
  },
  {
    id: 'garage',
    type: ITEM_TYPES.ROOM,
    data: {
      cateType: ITEM_TYPES.ROOM,
      type: ROOM_TYPES.GARAGE,
      label: '车库',
      icon: '/images/room-icon/room.png',
      size: defaultRoomSize
    }
  },
  {
    id: 'corridor',
    type: ITEM_TYPES.ROOM,
    data: {
      cateType: ITEM_TYPES.ROOM,
      type: ROOM_TYPES.CORRIDOR,
      label: '走廊',
      icon: '/images/room-icon/room.png',
      size: defaultRoomSize
    }
  },

];

const furnitureItems = [
  { id: 'door-template', type: ITEM_TYPES.FURNITURE, data: { cateType: ITEM_TYPES.FURNITURE, type: FURNITURE_TYPES.DOOR, label: '门', icon: '/images/fur-icon/door.png', activeIcon: '/images/fur-icon/door-gr.png', size: { width: 40, height: 40 } } },
  { id: 'window-template', type: ITEM_TYPES.FURNITURE, data: { cateType: ITEM_TYPES.FURNITURE, type: FURNITURE_TYPES.WINDOW, label: '窗', icon: '/images/fur-icon/window.png', activeIcon: '/images/fur-icon/window-gr.png', size: { width: 8, height: 56 } } },
  { id: 'table-template', type: ITEM_TYPES.FURNITURE, data: { cateType: ITEM_TYPES.FURNITURE, type: FURNITURE_TYPES.TABLE, label: '枱', icon: '/images/fur-icon/table.png', activeIcon: '/images/fur-icon/table-gr.png', size: { width: 44, height: 120 } } },
  { id: 'chair-template', type: ITEM_TYPES.FURNITURE, data: { cateType: ITEM_TYPES.FURNITURE, type: FURNITURE_TYPES.CHAIR, label: '椅子', icon: '/images/fur-icon/chair.png', activeIcon: '/images/fur-icon/chair-gr.png', size: { width: 28, height: 35 } } },
  { id: 'sofa-template', type: ITEM_TYPES.FURNITURE, data: { cateType: ITEM_TYPES.FURNITURE, type: FURNITURE_TYPES.SOFA, label: '沙发', icon: '/images/fur-icon/sofa.png', activeIcon: '/images/fur-icon/sofa-gr.png', size: { width: 67, height: 123 } } },
  { id: 'bed-template', type: ITEM_TYPES.FURNITURE, data: { cateType: ITEM_TYPES.FURNITURE, type: FURNITURE_TYPES.BED, label: '床', icon: '/images/fur-icon/bed.png', activeIcon: '/images/fur-icon/bed-gr.png', size: { width: 89, height: 128 } } },
  { id: 'lamp-template', type: ITEM_TYPES.FURNITURE, data: { cateType: ITEM_TYPES.FURNITURE, type: FURNITURE_TYPES.LAMP, label: '儿童床', icon: '/images/fur-icon/lamp.png', activeIcon: '/images/fur-icon/lamp-gr.png', size: { width: 70, height: 128 } } },
  { id: 'tv-template', type: ITEM_TYPES.FURNITURE, data: { cateType: ITEM_TYPES.FURNITURE, type: FURNITURE_TYPES.TV, label: '电视', icon: '/images/fur-icon/tv.png', activeIcon: '/images/fur-icon/tv-gr.png', size: { width: 134, height: 32 } } },
  { id: 'bookshelf-template', type: ITEM_TYPES.FURNITURE, data: { cateType: ITEM_TYPES.FURNITURE, type: FURNITURE_TYPES.BOOKSHELF, label: '茶几', icon: '/images/fur-icon/bookshelf.png', activeIcon: '/images/fur-icon/bookshelf-gr.png', size: { width: 44, height: 44 } } },
  { id: 'wardrobe-template', type: ITEM_TYPES.FURNITURE, data: { cateType: ITEM_TYPES.FURNITURE, type: FURNITURE_TYPES.WARDROBE, label: '柜', icon: '/images/fur-icon/wardrobe.png', activeIcon: '/images/fur-icon/wardrobe-gr.png', size: { width: 40, height: 129 } } },
  { id: 'plant-template', type: ITEM_TYPES.FURNITURE, data: { cateType: ITEM_TYPES.FURNITURE, type: FURNITURE_TYPES.PLANT, label: '植物', icon: '/images/fur-icon/plant.png', activeIcon: '/images/fur-icon/plant-gr.png', size: { width: 36, height: 36 } } },
  { id: 'fridge-template', type: ITEM_TYPES.FURNITURE, data: { cateType: ITEM_TYPES.FURNITURE, type: FURNITURE_TYPES.FRIDGE, label: '冰箱', icon: '/images/fur-icon/fridge.png', activeIcon: '/images/fur-icon/fridge-gr.png', size: { width: 40, height: 43 } } },
  { id: 'stove-template', type: ITEM_TYPES.FURNITURE, data: { cateType: ITEM_TYPES.FURNITURE, type: FURNITURE_TYPES.STOVE, label: '炉具', icon: '/images/fur-icon/stove.png', activeIcon: '/images/fur-icon/stove-gr.png', size: { width: 62, height: 32 } } },
  { id: 'sink-template', type: ITEM_TYPES.FURNITURE, data: { cateType: ITEM_TYPES.FURNITURE, type: FURNITURE_TYPES.SINK, label: '锌盘', icon: '/images/fur-icon/sink.png', activeIcon: '/images/fur-icon/sink-gr.png', size: { width: 60, height: 40 } } },
  { id: 'washbasin-template', type: ITEM_TYPES.FURNITURE, data: { cateType: ITEM_TYPES.FURNITURE, type: FURNITURE_TYPES.WASHBASIN, label: '洗手盘', icon: '/images/fur-icon/washbasin.png', activeIcon: '/images/fur-icon/washbasin-gr.png', size: { width: 50, height: 50 } } },
  { id: 'toilet-template', type: ITEM_TYPES.FURNITURE, data: { cateType: ITEM_TYPES.FURNITURE, type: FURNITURE_TYPES.TOILET, label: '马桶', icon: '/images/fur-icon/toilet.png', activeIcon: '/images/fur-icon/toilet-gr.png', size: { width: 40, height: 60 } } },
  { id: 'shower-template', type: ITEM_TYPES.FURNITURE, data: { cateType: ITEM_TYPES.FURNITURE, type: FURNITURE_TYPES.SHOWER, label: '淋浴', icon: '/images/fur-icon/shower.png', activeIcon: '/images/fur-icon/shower-gr.png', size: { width: 80, height: 80 } } },
  { id: 'bathtub-template', type: ITEM_TYPES.FURNITURE, data: { cateType: ITEM_TYPES.FURNITURE, type: FURNITURE_TYPES.BATHTUB, label: '浸浴', icon: '/images/fur-icon/bathtub.png', activeIcon: '/images/fur-icon/bathtub-gr.png', size: { width: 120, height: 60 } } }
];

export default function DesignPage() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(null);
  const [isOverCanvas, setIsOverCanvas] = useState(false);
  const [canvasPosition, setCanvasPosition] = useState({ x: 0, y: 0 });
  const [sidebarWidth, setSidebarWidth] = useState(0);
  const canvasRef = useRef(null);
  const sidebarRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const draggingItemSize = isMobile ? 48 : 56;
// 添加useEffect监听窗口大小
useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.matchMedia('(max-width: 768px)').matches);
  };
  
  checkMobile();
  window.addEventListener('resize', checkMobile);
  
  return () => {
    window.removeEventListener('resize', checkMobile);
  };
}, []);
  // 添加useEffect监听侧边栏宽度
useEffect(() => {
  const updateWidth = () => {
    if (sidebarRef.current) {
      setSidebarWidth(sidebarRef.current.offsetWidth);
    }
  };

  updateWidth();
  window.addEventListener('resize', updateWidth);

  return () => {
    window.removeEventListener('resize', updateWidth);
  };
}, []);
  const handleDragStart = (event) => {
    const { active } = event;
    setActive(active);

    // console.log(event.active);
    setIsOverCanvas(false);
  

  };

  const handleDragOver = (event) => {
    const { over } = event;

    setIsOverCanvas(over?.id === 'canvas');
    if (over && over.id === 'canvas') {
      const localItems = canvasRef.current.getLocalItems();
      const label =`${active.data.current.label}${localItems.filter(item => item.data.type === active.data.current.type).length + 1}`;
      const newItem = {
        id: `${active.data.current.type}-${localItems.filter(item => item.data.type === active.data.current.type).length + 1}`,
        type: active.data.current.cateType,
        data: {
          ...active.data.current,
          label:active.data.current.cateType===ITEM_TYPES.ROOM?label:'',
        },
       
        // position: {
        //   x: currentX,
        //   y: currentY
        // },
        size: active.data.current.size,
        activeIcon: active.data.current.activeIcon
      };
      canvasRef.current.setIsRoomDragging(true);
      canvasRef.current.setRoomDragStart({x:sidebarWidth,y:draggingItemSize})
      canvasRef.current.setDraggedRoom(newItem)
    }else{
      canvasRef.current.setIsRoomDragging(false);
    }
  };

  // const handleDragEnd = (event) => {
  //   const { active, over } = event;
  //   //canvasRef.current.setIsRoomDragging(false);
  //   // const localItems = canvasRef.current.getLocalItems();
  //   // setItems([...localItems, canvasRef.current.draggedRoom]);
  //   return;
  //   if (over && over.id === 'canvas') {
  //     const localItems = canvasRef.current.getLocalItems();
  //     let label = '',parentRoom;
  //     // let currentX = event.delta.x -canvasPosition.x;
  //     // let currentY = event.delta.y -100+(event.active.rect.current.translated?.top || 0) - canvasPosition.y;
  //     // console.log(active)
  //     if(active.data.current.cateType === ITEM_TYPES.ROOM){
  //       label =  `${active.data.current.label}${localItems.filter(item => item.data.type === active.data.current.type).length + 1}`;
  //     }else{
  //       //家具label处理
  //       //当前所在的房间
      
  //       // parentRoom = localItems.find(item => {
  //       //   // console.log(currentX,item.position.x,item.size.width,currentY,item.position.y,item.size.height)
  //       //   return  item.type === ITEM_TYPES.ROOM && 
  //       //   currentX >= item.position.x && 
  //       //   currentX <= item.position.x + item.size.width &&
  //       //   currentY >= item.position.y && 
  //       //   currentY <= item.position.y + item.size.height
  //       // })
  //       //   console.log('parentRoom',parentRoom)

  //       //  return
  //         //找到在这个房间里所有的家具
  //       // const furnitureList = localItems.filter(item => item.type === ITEM_TYPES.FURNITURE && item.position.x >= parentRoom.position.x && item.position.x <= parentRoom.position.x + parentRoom.size.width && item.position.y >= parentRoom.position.y && item.position.y <= parentRoom.position.y + parentRoom.size.height);
  //       // label =  `${parentRoom ? parentRoom.data.label : '未分配'}-
  //       //    ${active.data.current.label}${furnitureList.filter(item => item.data.type === active.data.current.type).length + 1}`
  //     }
  //     const newItem = {
  //       id: `${active.data.current.type}-${items.length + 1}`,
  //       type: active.data.current.cateType,
  //       data: {
  //         ...active.data.current,
  //         label,
  //         parentRoom
  //       },
       
  //       // position: {
  //       //   x: currentX,
  //       //   y: currentY
  //       // },
  //       size: active.data.current.size,
  //       activeIcon: active.data.current.activeIcon
  //     };

  //     setItems([...localItems, newItem]);
  //   }

  //   setActive(null);
  //   setIsOverCanvas(false);
  // };


  return (
    <>
      <Navbar />
      <DndContext
        // onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
      >
        <div className="min-h-screen bg-gray-50">
          <div className="container p-0" style={{ maxWidth: '100%' }}>
            <div className="grid grid-cols-12">
              {/* Sidebar */}
              <div   ref={sidebarRef} className="col-span-2 bg-white p-4 shadow border-r-gray-100 border-r-2">
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">房间</h3>
                  <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 gap-2">
                    {roomItems.map((item) => (
                      <DraggableItem
                        key={item.id}
                        id={item.id}
                        type={item.type}
                        data={item.data}
                        isOverCanvas={isOverCanvas}
                      >
                        <div className="flex flex-col items-center">
                          <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <Image
                              className='p-3 bg-[#EFF7F4] rounded-lg'
                              src={item.data.icon}
                              alt={item.data.label}
                              width={draggingItemSize}
                              height={draggingItemSize}
                            />
                          </div>
                          <span className="mt-1 text-sm text-gray-600">{item.data.label}</span>
                        </div>
                      </DraggableItem>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4">家具</h3>
                  <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 gap-2">
                    {furnitureItems.map((item) => (
                      <DraggableItem
                        key={item.id}
                        id={item.id}
                        type={item.type}
                        data={item.data}
                        isOverCanvas={isOverCanvas}
                      >
                        <div className="flex flex-col items-center">
                          <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <Image
                              className='bg-[#EFF7F4] rounded-lg'
                              src={item.data.icon}
                              alt={item.data.label}
                              width={draggingItemSize}
                              height={draggingItemSize}
                            />
                          </div>
                          <span className="mt-1 text-sm text-gray-600">{item.data.label}</span>
                        </div>
                      </DraggableItem>
                    ))}
                  </div>
                </div>
              </div>

              {/* Canvas */}
              <div className="col-span-10">
                <Canvas ref={canvasRef} items={items} onPositionChange={setCanvasPosition} />
              </div>
            </div>
          </div>
        </div>
        <DragOverlay>
          {
            active?.id && isOverCanvas && (
              active.data.current.cateType === ITEM_TYPES.ROOM ? (
                // 房间在画布上的样式
                <div
                  className="flex flex-col items-center justify-center bg-white/80 rounded-lg"
                  style={{
                    width: defaultRoomSize.width,
                    height: defaultRoomSize.height,
                    border: '8px solid',
                    borderColor: ROOM_COLORS[roomItems.find(item => item.id === active.id)?.data.type],
                    borderRadius: '8px',
                  }}
                >
                  <div className="flex flex-col items-center">
                    <Image
                      className='bg-[#EFF7F4] rounded-lg'
                      src={active.data.current.icon}
                      alt="Room"
                      width={draggingItemSize}
                      height={draggingItemSize}
                    />

                    <span className="mt-1 text-sm text-gray-600">
                      {active.data.current.label + (canvasRef.current.getLocalItems().filter(item => item.data.type === active.data.current.type).length + 1)}
                    </span>
                  </div>
                </div>
              ) : (
                // 家具在画布上的样式
                <Image
                  // className='bg-[#EFF7F4] rounded-lg'
                  src={active.data.current.activeIcon}
                  alt="Furniture"
                  width={active.data.current.size.width}
                  height={active.data.current.size.height}
                />
              )

            )
          }

        </DragOverlay>
      </DndContext>
    </>
  );
}