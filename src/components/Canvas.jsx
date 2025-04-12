"use client";
import { useDroppable } from "@dnd-kit/core";
import _ from "lodash";
import {
  useState,
  useCallback,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import {
  ITEM_TYPES,
  ROOM_TYPES,
  FURNITURE_TYPES_LABEL,
  FURNITURE_TYPES,
} from "@/types/room";
import { Trash2, Save, Minus, Plus, RotateCcwSquare } from "lucide-react";
import Image from "next/image";
import Undo from "./canvasComp/Undo";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

import useMobile from "@/app/hooks/useMobile";
const ROOM_COLORS = {
  [ROOM_TYPES.LIVING_ROOM]: "#F0DF9C", // 客厅
  [ROOM_TYPES.DINING_ROOM]: "#F5D4BC", // 饭厅
  [ROOM_TYPES.STORAGE_ROOM]: "#ADC0BC", // 储物室
  [ROOM_TYPES.STUDY_ROOM]: "#B0B8C9", // 书房
  [ROOM_TYPES.BEDROOM]: "#F5B8B8", // 睡房
  [ROOM_TYPES.BATHROOM]: "#C1D7E2", // 浴室
  [ROOM_TYPES.KITCHEN]: "#EDE0C6", // 厨房
  [ROOM_TYPES.BALCONY]: "#D0DCAA", // 阳台
  [ROOM_TYPES.GARDEN]: "#AACDBC", // 花园
  [ROOM_TYPES.GARAGE]: "#C7C7DD", // 车库
  [ROOM_TYPES.CORRIDOR]: "#CDCDCD", // 走廊
};

const CANVAS_PADDING = 500; // 画布边缘预留空间
const MAX_SCALE = 200;
const MIN_SCALE = 50;
export const Canvas = forwardRef(
  (
    {
      items,
      onShowTab,
      showTab,
      history,
      historyIndex,
      setHistory,
      setHistoryIndex,
      handleUndo,
      handleRedo,
      onGenReport
    },
    ref
  ) => {
    const t = useTranslations("design");
    const isMobile = useMobile();
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [activeRoom, setActiveRoom] = useState(null);
    const [canvasSize, setCanvasSize] = useState({ width: 5000, height: 5000 });
    const [isRoomDragging, setIsRoomDragging] = useState(false);
    const [roomDragStart, setRoomDragStart] = useState({ x: 0, y: 0 });
    const [draggedRoom, setDraggedRoom] = useState(null);
    const [localItems, setLocalItems] = useState([]);
    const [isResizing, setIsResizing] = useState(false);
    const [resizeStart, setResizeStart] = useState({ x: 0, y: 0 });
    const [resizeCorner, setResizeCorner] = useState(null);
    const [scale, setScale] = useState(100);
    const [touchStore, setTouchStore] = useState({
      originScale: 100,
      isMoving: false,
      pageX: 0,
      pageY: 0,
      pageX2: 0,
      pageY2: 0,
    });
    const [compassRotation, setCompassRotation] = useState(0); //指南针旋转角度

    useImperativeHandle(
      ref,
      () => ({
        getLocalItems: () => localItems,
        setLocalItems,
        setActiveRoom,
        setIsRoomDragging,
        setDraggedRoom,
        setRoomDragStart,
        setPosition,
        setCompassRotation,
        position,
        compassRotation,
      }),
      [localItems]
    );

    const containerRef = useRef(null);
    const { setNodeRef } = useDroppable({
      id: "canvas",
      data: {
        accepts: [ITEM_TYPES.ROOM, ITEM_TYPES.FURNITURE],
      },
    });

    // 计算画布需要的大小
    // useEffect(() => {
    //   if (items.length === 0) return;

    //   let maxX = -Infinity;
    //   let maxY = -Infinity;
    //   let minX = Infinity;
    //   let minY = Infinity;

    //   items.forEach(item => {
    //     const itemRight = item.position.x + item.size?.width;
    //     const itemBottom = item.position.y + item.size?.height;

    //     maxX = Math.max(maxX, itemRight);
    //     maxY = Math.max(maxY, itemBottom);
    //     minX = Math.min(minX, item.position.x);
    //     minY = Math.min(minY, item.position.y);
    //   });

    //   // 确保最小尺寸为5000x5000
    //   const newWidth = Math.max(5000, maxX - minX + CANVAS_PADDING * 2);
    //   const newHeight = Math.max(5000, maxY - minY + CANVAS_PADDING * 2);

    //   if (newWidth !== canvasSize.width || newHeight !== canvasSize.height) {
    //     setCanvasSize({ width: newWidth, height: newHeight });
    //   }
    // }, [items, canvasSize.width, canvasSize.height]);

    // 处理画布拖动开始
    const handleCanvasMouseDown = useCallback(
      (e) => {
        if (e.target.closest('[data-room-element="true"]')) {
          return;
        }

        //console.log('handleCanvasMouseDown', e)
        if (e.button !== 0 && !e.touches) return; //非左键

        if (e.touches?.length == 2) {
          let store = { ...touchStore };
          store.isMoving = true;
          // 第一个触摸点的坐标
          store.pageX = e.touches[0].pageX;
          store.pageY = e.touches[0].pageY;
          store.pageX2 = e.touches[1].pageX;
          store.pageY2 = e.touches[2].pageY;
          setTouchStore(store);
          return;
        }
        setActiveRoom(null);
        setIsDragging(true);
        if (e.touches?.length == 1) {
          setDragStart({
            x: e.touches[0].clientX - position.x,
            y: e.touches[0].clientY - position.y,
          });
        } else {
          setDragStart({
            x: e.clientX - position.x,
            y: e.clientY - position.y,
          });
        }
      },
      [position, touchStore]
    );
    const furnitureInroom = (furniture, parentRoom) => {
      if (!furniture.position || !parentRoom.position) return false;
      return (
        furniture.position.x >= parentRoom.position.x &&
        furniture.position.x <= parentRoom.position.x + parentRoom.size.width &&
        furniture.position.x + furniture.size.width <=
        parentRoom.position.x + parentRoom.size.width &&
        furniture.position.y + 20 >= parentRoom.position.y &&
        furniture.position.y <=
        parentRoom.position.y + parentRoom.size.height &&
        furniture.position.y - 20 + furniture.size.height <=
        parentRoom.position.y + parentRoom.size.height
      );
    };
    // 处理房间拖动开始
    const handleRoomMouseDown = useCallback(
      (e, room) => {
        e.stopPropagation();
        setIsRoomDragging(true);
        setDraggedRoom(room);
        // 计算鼠标点击位置相对于房间左上角的偏移
        if (e.touches?.length == 1) {
          setRoomDragStart({
            x: e.touches[0].clientX - room.position.x,
            y: e.touches[0].clientY - room.position.y,
          });
          // console.log("handleRoomMouseDown", room.position.x);
        } else {
          setRoomDragStart({
            x: e.clientX - room.position.x,
            y: e.clientY - room.position.y,
          });
        }
        if (room.type === ITEM_TYPES.ROOM) {
          //给每个家具设置一个偏移量
          const furnitureList = localItems.map((item) => {
            if (
              item.type === ITEM_TYPES.FURNITURE &&
              furnitureInroom(item, room)
            ) {
              return {
                ...item,
                parentId: room.id,
                offset: {
                  x: item.position.x - room.position.x,
                  y: item.position.y - room.position.y,
                },
              };
            } else {
              return {
                ...item,
                parentId: null,
              };
            }
          });
          // console.log('ddd',furnitureList);
          let updatedItems = localItems.map((item) => {
            let target = furnitureList.find(
              (furniture) => furniture.id === item.id
            );
            return target || item;
          });
          // console.log('updatedItems',updatedItems);
          setLocalItems(updatedItems);
        }
      },
      [localItems]
    );

    // 处理调整大小开始
    const handleResizeStart = useCallback((e, room, corner) => {
      e.stopPropagation();
      setIsResizing(true);
      setResizeCorner(corner);
      if (e.touches?.length == 1) {
        // console.log('handleResizeStart', e)
        setResizeStart({
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        });
      } else {
        setResizeStart({
          x: e.clientX,
          y: e.clientY,
        });
      }
    }, []);
    const getDistance = function (start, stop) {
      return Math.hypot(stop.x - start.x, stop.y - start.y);
    };
    // 处理鼠标移动事件
    const handleMouseMove = useCallback(
      (e) => {
        //移动端双指缩放
        let store = { ...touchStore };
        if (e.touches?.length == 2) {
          if (!store.isMoving) return;
          // 双指缩放比例计算
          const zoom =
            getDistance(
              {
                x: e.touches[0].pageX,
                y: e.touches[0].pageY,
              },
              {
                x: e.touches[1].pageX,
                y: e.touches[1].pageY,
              }
            ) /
            getDistance(
              {
                x: store.pageX,
                y: store.pageY,
              },
              {
                x: store.pageX2,
                y: store.pageY2,
              }
            );
          let newScale = scale * zoom;
          // 最大缩放比例限制
          if (newScale > MAX_SCALE) {
            newScale = MAX_SCALE;
          }
          if (newScale < MIN_SCALE) {
            newScale = MIN_SCALE;
          }
          setScale(newScale);
          return;
        }

        store.isMoving = false;
        setTouchStore(store);
        // console.log('handleMouseMove', e)
        if (isResizing && activeRoom && resizeCorner) {
          let deltaX, deltaY;
          if (e.touches?.length == 1) {
            deltaX = e.touches[0].clientX - resizeStart.x;
            deltaY = e.touches[0].clientY - resizeStart.y;
          } else {
            deltaX = e.clientX - resizeStart.x;
            deltaY = e.clientY - resizeStart.y;
          }
          let ratio = activeRoom.size.width / activeRoom.size.height;
          const updatedItems = localItems.map((item) => {
            if (item.id === activeRoom.id) {
              const newSize = { ...item.size };
              const newPosition = { ...item.position };

              switch (resizeCorner) {
                case "top-left":
                  newSize.width = item.size.width - deltaX;
                  if (activeRoom.type === ITEM_TYPES.ROOM) {
                    //房间自由调整
                    newSize.height = item.size.height - deltaY;
                  } else {
                    //家具限制宽高比例
                    newSize.height = newSize.width / ratio;
                  }

                  newPosition.x = item.position.x + deltaX;
                  newPosition.y = item.position.y + deltaY;
                  break;
                case "top-right":
                  newSize.width = item.size.width + deltaX;
                  if (activeRoom.type === ITEM_TYPES.ROOM) {
                    //房间自由调整
                    newSize.height = item.size.height - deltaY;
                  } else {
                    //家具限制宽高比例
                    newSize.height = newSize.width / ratio;
                  }

                  newPosition.y = item.position.y + deltaY;
                  break;
                case "bottom-left":
                  newSize.width = item.size.width - deltaX;
                  if (activeRoom.type === ITEM_TYPES.ROOM) {
                    //房间自由调整
                    newSize.height = item.size.height + deltaY;
                  } else {
                    //家具限制宽高比例
                    newSize.height = newSize.width / ratio;
                  }

                  newPosition.x = item.position.x + deltaX;
                  break;
                case "bottom-right":
                  newSize.width = item.size.width + deltaX;
                  if (activeRoom.type === ITEM_TYPES.ROOM) {
                    //房间自由调整
                    newSize.height = item.size.height + deltaY;
                  } else {
                    //家具限制宽高比例
                    newSize.height = newSize.width / ratio;
                  }

                  break;
              }

              let condition;
              if (item.type === ITEM_TYPES.ROOM) {
                condition = newSize.width >= 100 && newSize.height >= 100;
              } else if (item.data.type === FURNITURE_TYPES.WINDOW) {
                condition = newSize.width >= 8 && newSize.height >= 8;
              } else condition = newSize.width >= 32 && newSize.height >= 32;

              // 房间最小尺寸100，家具最小尺寸
              if (condition) {
                return {
                  ...item,
                  size: newSize,
                  position: newPosition,
                };
              }
              return item;
            }
            return item;
          });
          setLocalItems(updatedItems);
          if (e.touches?.length == 1) {
            setResizeStart({
              x: e.touches[0].clientX,
              y: e.touches[0].clientY,
            });
          } else {
            setResizeStart({
              x: e.clientX,
              y: e.clientY,
            });
          }
        } else if (isRoomDragging && draggedRoom) {
          let newX, newY;
          if (e.touches?.length == 1) {
            newX = e.touches[0].clientX - roomDragStart.x;
            newY = e.touches[0].clientY - roomDragStart.y;
            // console.log("newX", newX, newY);
          } else {
            newX = e.clientX - roomDragStart.x;
            newY = e.clientY - roomDragStart.y;
          }
          let updatedItems = [];
          // console.log('localItems',localItems);
          if (draggedRoom.type === ITEM_TYPES.ROOM) {
            //其中家具一起移动
            const furnitureIdList = localItems
              .filter((item) => {
                //  console.log(item,  furnitureInroom(item, draggedRoom));
                return (
                  item.type === ITEM_TYPES.FURNITURE &&
                  item.parentId === draggedRoom.id
                );
                // furnitureInroom(item, draggedRoom)
              })
              .map((item) => item.id);

            updatedItems = localItems.map((item) => {
              if (item.id === draggedRoom.id) {
                return {
                  ...item,
                  position: {
                    x: newX,
                    y: newY,
                  },
                };
              } else if (furnitureIdList.includes(item.id)) {
                // console.log(item.offset);
                return {
                  ...item,
                  position: {
                    x: newX + item.offset?.x || 0,
                    y: newY + item.offset?.y || 0,
                  },
                };
              }
              return item;
            });
          } else {
            updatedItems = localItems.map((item) => {
              if (item.id === draggedRoom.id) {
                return {
                  ...item,
                  position: {
                    x: newX,
                    y: newY,
                  },
                };
              }
              return item;
            });
          }

          setLocalItems(updatedItems);
        } else if (isDragging) {
          let newX, newY;
          if (e.touches?.length == 1) {
            newX = e.touches[0].clientX - dragStart.x;
            newY = e.touches[0].clientY - dragStart.y;
          } else {
            newX = e.clientX - dragStart.x;
            newY = e.clientY - dragStart.y;
          }
          setPosition({
            x: newX,
            y: newY,
          });
        }
      },
      [
        isDragging,
        dragStart,
        isRoomDragging,
        draggedRoom,
        roomDragStart,
        localItems,
        isResizing,
        activeRoom,
        resizeCorner,
        resizeStart,
        touchStore,
        scale,
      ]
    );

    // 处理鼠标松开事件
    const handleMouseUp = useCallback(
      (e) => {
        if (e.touches?.length < 2) {
          setTouchStore((touchStore) => ({ ...touchStore, isMoving: false }));
        }
        // console.log('handleMouseUp', e)
        // 如果是房间拖动或调整大小结束，记录历史
        if (isRoomDragging || isResizing) {
          let newX, newY;
          if (e.changedTouches?.length == 1) {
            newX = e.changedTouches[0].clientX - roomDragStart.x - position.x;
            newY = e.changedTouches[0].clientY - roomDragStart.y - position.y;
          } else {
            newX = e.clientX - roomDragStart.x - position.x;
            newY = e.clientY - roomDragStart.y - position.y;
          }
          let newItems;
          if (
            draggedRoom &&
            !localItems.some((item) => item.id === draggedRoom.id)
          ) {
            //新添加的房间/家具,设置坐标
            const newRoom = {
              ...draggedRoom,
              position: {
                x: newX,
                y: newY,
              },
            };
            newItems = [...localItems, newRoom];

            setLocalItems(newItems);
            onHandleActiveRoom(newRoom, newItems);
          } else {
            newItems = [...localItems];
          }

          const newHistory = history.slice(0, historyIndex + 1);
          newHistory.push(newItems);
          setHistory(newHistory);
          setHistoryIndex(newHistory.length - 1);
        }

        setIsDragging(false);
        setIsRoomDragging(false);
        setDraggedRoom(null);
        setIsResizing(false);
        setResizeCorner(null);
      },
      [
        isRoomDragging,
        isResizing,
        localItems,
        history,
        historyIndex,
        roomDragStart,
        draggedRoom,
        position,
        touchStore,
      ]
    );

    const onHandleActiveRoom = (room, _localItems) => {
      if (room.type === ITEM_TYPES.FURNITURE) {
        //每次选中家具，都对当前家具的房间重新排序
        const currentItems = _localItems || localItems;
        let parentRoom = currentItems.find((item) => {
          //console.log(room.position.x, item.position.x,item.size.width,room.position.y,item.position.y,item.size.height)
          return item.type === ITEM_TYPES.ROOM && furnitureInroom(room, item);
        });
        //
        if (!parentRoom) {
          console.log("选中家具，当前未匹配到房间");
          let newLocalItems = _.cloneDeep(currentItems);
          let target = newLocalItems.filter((item) => item.id === room.id)[0];
          if (target) {
            target.data.label = `未分配-${FURNITURE_TYPES_LABEL[target.data.type]
              }`;
            target.data.parentRoom = null;
            room.data.label = `未分配-${FURNITURE_TYPES_LABEL[target.data.type]
              }`;
            room.data.parentRoom = null;
            setLocalItems(newLocalItems);
          }
        } else {
          //按x坐标升序排序
          const furnitureList = currentItems
            .filter(
              (item) =>
                item.type === ITEM_TYPES.FURNITURE &&
                item.data.type === room.data.type &&
                furnitureInroom(item, parentRoom)
            )
            .sort((a, b) => a.position.x - b.position.x)
            .map((item, index) => {
              let label = `${parentRoom.data.label}-${FURNITURE_TYPES_LABEL[room.data.type]
                }${index + 1}`;
              if (item.id === room.id) {
                room.data.label = label;
                room.data.parentRoom = parentRoom;
              }
              return {
                ...item,
                data: {
                  ...item.data,
                  label,
                  parentRoom,
                },
              };
            });
          // console.log('furnitureList',furnitureList)
          let newLocalItems = currentItems.map((item) => {
            let target = furnitureList.find(
              (furniture) => furniture.id === item.id
            );
            return target || item;
          });
          setLocalItems(newLocalItems);
        }
      }
      setTimeout(() => {
        // console.log('room',room)
        setActiveRoom(room);
      });
    };
    // 添加和移除事件监听器
    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      container.addEventListener("mousedown", handleCanvasMouseDown);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);

      container.addEventListener("touchstart", handleCanvasMouseDown);
      window.addEventListener("touchmove", handleMouseMove);
      window.addEventListener("touchend", handleMouseUp);

      return () => {
        container.removeEventListener("mousedown", handleCanvasMouseDown);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);

        container.removeEventListener("touchstart", handleCanvasMouseDown);
        window.removeEventListener("touchmove", handleMouseMove);
        window.removeEventListener("touchend", handleMouseUp);
      };
    }, [handleCanvasMouseDown, handleMouseMove, handleMouseUp]);
    // 检查是否满足基本要求（至少一个房间、一个门和一个窗）
    const hasRequiredItems = () => {
      const hasRoom = items.some(
        (item) =>
          item.type === ITEM_TYPES.ROOM &&
          item.data.type !== "door" &&
          item.data.type !== "window"
      );
      const hasDoor = items.some(
        (item) => item.type === ITEM_TYPES.ROOM && item.data.type === "door"
      );
      const hasWindow = items.some(
        (item) => item.type === ITEM_TYPES.ROOM && item.data.type === "window"
      );
      return hasRoom && hasDoor && hasWindow;
    };

    // 处理缩放
    const handleZoom = (type) => {
      if (type === "in" && scale < MAX_SCALE) {
        setScale((prev) => Math.min(MAX_SCALE, prev + 10));
      } else if (type === "out" && scale > MIN_SCALE) {
        setScale((prev) => Math.max(MIN_SCALE, prev - 10));
      } else if (type === "reset") {
        setScale(100);
      }
    };

    const handleRotate = useCallback(() => {
      if (!activeRoom) return;

      const updatedItems = localItems.map((item) => {
        if (item.id === activeRoom.id) {
          // 计算新的旋转角度（每次增加90度，对360取模）
          const newRotation = ((item.rotation || 0) - 90) % 360;

          // 如果是90度或270度旋转，需要交换宽高
          // const isOddRotation = Math.abs(newRotation) % 180 === 90;
          // const newWidth = isOddRotation ? item.size.height : item.size.width;
          // const newHeight = isOddRotation ? item.size.width : item.size.height;
          // //          // 计算旋转后的新位置，保持中心点不变
          // const centerX = item.position.x + item.size.width / 2;
          // const centerY = item.position.y + item.size.height / 2;
          // //  console.log(newWidth,newHeight)
          // //  // 计算新的左上角位置
          // const newX = centerX - newWidth / 2;
          // const newY = centerY - newHeight / 2;
          //  console.log(item.position.x,newX,item.position.y ,newY)
          return {
            ...item,
            rotation: newRotation,
            // position: {
            //   x: newX,
            //   y: newY
            // },
            //  size: {
            //    width: newWidth,
            //    height: newHeight
            // }
          };
        }
        return item;
      });

      setLocalItems(updatedItems);
    }, [activeRoom, localItems]);
    const onCompassClick = () => {
      console.log("compass");
      // 增加45度，并保持在0-360范围内
      let newRotation = compassRotation + 45;
      if (newRotation >= 360) {
        newRotation -= 360;
      }
      setCompassRotation(newRotation);
    };
    const Sizehandler = (room) => {
      return (
        <>
          <div
            className="absolute w-3 h-3 bg-white border border-red-500 cursor-nw-resize rounded-full"
            style={{ top: -6, left: -6 }}
            onMouseDown={(e) => handleResizeStart(e, room, "top-left")}
            onTouchStart={(e) => handleResizeStart(e, room, "top-left")}
          />
          <div
            className="absolute w-3 h-3 bg-white border border-red-500 cursor-ne-resize rounded-full"
            style={{ top: -6, right: -6 }}
            onMouseDown={(e) => handleResizeStart(e, room, "top-right")}
            onTouchStart={(e) => handleResizeStart(e, room, "top-right")}
          />
          <div
            className="absolute w-3 h-3 bg-white border border-red-500 cursor-sw-resize rounded-full"
            style={{ bottom: -6, left: -6 }}
            onMouseDown={(e) => handleResizeStart(e, room, "bottom-left")}
            onTouchStart={(e) => handleResizeStart(e, room, "bottom-left")}
          />
          <div
            className="absolute w-3 h-3 bg-white border border-red-500 cursor-se-resize rounded-full"
            style={{ bottom: -6, right: -6 }}
            onMouseDown={(e) => handleResizeStart(e, room, "bottom-right")}
            onTouchStart={(e) => handleResizeStart(e, room, "bottom-right")}
          />
        </>
      );
    };

    // console.log('localItems',localItems)
    return (
      <div className="relative w-full min-h-[calc(100vh-64px)] overflow-hidden bg-background">
        {/* 右上角控制面板 */}
        <div className="fixed top-20 right-6 flex items-center gap-4 z-9">
          {!isMobile && (
            <>
              {/* 撤销/重做 */}
              <Undo
                history={history}
                historyIndex={historyIndex}
                handleUndo={handleUndo}
                handleRedo={handleRedo}
                className={" bg-white rounded-full shadow-lg  px-3 py-2"}
              />
              {/* 缩放控制 */}
              <div className="flex items-center gap-2 bg-white rounded-full shadow-lg px-3 py-2">
                <button
                  className="p-1 rounded hover:bg-gray-100 text-gray-600"
                  onClick={() => handleZoom("out")}
                  disabled={scale <= 50}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-sm font-medium text-gray-600 min-w-[48px] text-center">
                  {scale}%
                </span>
                <button
                  className="p-1 rounded hover:bg-gray-100 text-gray-600"
                  onClick={() => handleZoom("in")}
                  disabled={scale >= 200}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </>
          )}

          {/* 指南针 */}
          <div
            style={{
              transform: `rotate(${compassRotation}deg)`,
              transition: "transform 0.3s ease-out",
            }}
            onClick={onCompassClick}
            className="flex flex-col items-center"
          >
            <div className="text-sm text-gray-600">N</div>

            <Image
              src="/images/compass.png"
              alt="方向"
              width={40}
              height={40}
              className="cursor-pointer"
            />
            {/* 显示当前角度 */}
          </div>
        </div>

        <div
          ref={(node) => {
            containerRef.current = node;
            setNodeRef(node);
          }}
          className="absolute cursor-move"
          style={{
            width: `${canvasSize.width}px`,
            height: `${canvasSize.height}px`,
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale / 100
              })`,
            transformOrigin: "center",
            backgroundImage:
              "radial-gradient(circle, #ddd 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        >
          <div className="relative">
            {localItems.map((item) => {
              if (item.type === ITEM_TYPES.ROOM) {
                return (
                  <div
                    key={item.id}
                    data-room-element="true"
                    className={`absolute ${activeRoom?.id === item.id ? "ring-2 ring-red-500" : ""
                      } cursor-move z-100`}
                    style={{
                      left: item.position.x,
                      top: item.position.y,
                      width: item.size.width,
                      height: item.size.height,
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onHandleActiveRoom(item);
                    }}
                    onMouseDown={(e) => handleRoomMouseDown(e, item)}
                    onTouchStart={(e) => handleRoomMouseDown(e, item)}
                  >
                    {activeRoom && activeRoom.id === item.id && (
                      <div
                        style={{
                          left: "50%",
                          top: "-64px",
                          transform: "translateX(-50%)",
                        }}
                        className="min-w-fit whitespace-nowrap  absolute h-[40px] rounded-4xl bg-white shadow-lg  items-center px-3 gap-2 md:flex hidden"
                      >
                        <span className="text-sm text-gray-600">已选中：</span>
                        <div className="flex flex-grow items-center gap-1">
                          {/* 颜色方块 */}
                          <div
                            style={{
                              width: "12px",
                              height: "12px",
                              backgroundColor:
                                ROOM_COLORS[activeRoom.data.type],
                              borderRadius: "2px",
                            }}
                          />
                          {/* 房间名称 */}
                          <span className="text-sm text-gray-600 font-bold">
                            {activeRoom.data.label}
                          </span>
                        </div>

                        {/* 删除按钮 */}
                        <button
                          className="flex-shrink-0 text-red-500"
                          onClick={(e) => {
                            e.stopPropagation();
                            const newItems = localItems.filter(
                              (item) => item.id !== activeRoom.id
                            );
                            setLocalItems(newItems);
                            setActiveRoom(null);
                          }}
                        >
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </button>
                      </div>
                    )}

                    <div
                      className="w-full h-full"
                      style={{
                        border:
                          item.type === ITEM_TYPES.ROOM ? "8px solid" : "none",
                        borderColor:
                          item.type === ITEM_TYPES.ROOM
                            ? ROOM_COLORS[item.data.type]
                            : "transparent",
                        borderRadius:
                          item.type === ITEM_TYPES.ROOM ? "8px" : "0",
                        backgroundColor:
                          item.type === ITEM_TYPES.ROOM
                            ? ROOM_COLORS[item.data.type] + "80"
                            : "transparent",
                      }}
                    >
                      <div
                        className="absolute top-2 left-2 text-[14px] text-[#888888]"
                        style={{
                          zIndex: 1,
                        }}
                      >
                        {item.data.label}
                      </div>
                    </div>
                    {activeRoom?.id === item.id && Sizehandler(item)}
                  </div>
                );
              } else if (item.type === ITEM_TYPES.FURNITURE) {
                // console.log('item', item)
                return (
                  <div
                    key={item.id}
                    data-room-element="true"
                    className={`absolute cursor-move z-200`}
                    style={{
                      left: item.position.x,
                      top: item.position.y,
                      width: item.size.width,
                      height: item.size.height,
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onHandleActiveRoom(item);
                    }}
                    onMouseDown={(e) => {
                      e.stopPropagation();
                      handleRoomMouseDown(e, item);
                    }}
                    onTouchStart={(e) => {
                      e.stopPropagation();
                      handleRoomMouseDown(e, item);
                    }}
                  >
                    {activeRoom && activeRoom.id === item.id && (
                      <div
                        style={{
                          left: "50%",
                          top: "-64px",
                          transform: "translateX(-50%)",
                        }}
                        className="min-w-fit whitespace-nowrap absolute h-[40px] rounded-4xl bg-white shadow-lg  items-center px-3 gap-2 md:flex hidden"
                      >
                        <span className="text-sm text-gray-600">已选中：</span>
                        <div className="flex flex-grow items-center gap-1">
                          {/* 颜色方块 */}
                          {activeRoom.data.parentRoom && (
                            <div
                              style={{
                                width: "12px",
                                height: "12px",
                                backgroundColor:
                                  ROOM_COLORS[
                                  activeRoom.data.parentRoom.data.type
                                  ],
                                borderRadius: "2px",
                              }}
                            />
                          )}

                          {/* 家具名称 */}
                          <span className="text-sm text-gray-600 font-bold">
                            {activeRoom.data.label}
                          </span>
                        </div>
                        {/* 旋转按钮 */}
                        <button
                          className="flex-shrink-0"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRotate();
                          }}
                        >
                          <RotateCcwSquare className="w-4 h-4" />
                        </button>
                        {/* 删除按钮 */}
                        <button
                          className="flex-shrink-0 text-red-500 hover:text-red-600 transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            const newItems = localItems.filter(
                              (item) => item.id !== activeRoom.id
                            );
                            setLocalItems(newItems);
                            setActiveRoom(null);
                          }}
                        >
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </button>
                      </div>
                    )}
                    {activeRoom?.id === item.id && Sizehandler(item)}
                    <Image
                      className={
                        activeRoom?.id === item.id ? "ring-2 ring-red-500" : ""
                      }
                      style={{
                        transform: item.rotation
                          ? `rotate(${item.rotation}deg)`
                          : "none",
                        transformOrigin: "center",
                      }}
                      //  objectFit= 'contain'
                      src={item.activeIcon}
                      alt="Furniture"
                      width={item.size.width}
                      height={item.size.height}
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>

        {/* 选中房间的图层面板，仅在移动端显示 */}
        {activeRoom && (
          <div
            className={cn(
              "min-w-fit whitespace-nowrap fixed left-1/2 -translate-x-1/2 h-10 rounded-4xl bg-white shadow-lg flex items-center px-3 gap-2 md:hidden",
              showTab ? "bottom-85" : "bottom-22.5 "
            )}
          >
            <span className="text-sm text-gray-600">已选中：</span>
            <div className="flex flex-grow items-center gap-1">
              {/* 颜色方块 */}
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  backgroundColor:
                    ROOM_COLORS[
                    activeRoom.data.parentRoom
                      ? activeRoom.data.parentRoom.data.type
                      : activeRoom.data.type
                    ],
                  borderRadius: "2px",
                }}
              />
              {/* 房间名称 */}
              <span className="text-sm text-gray-600 font-bold">
                {activeRoom.data.label}
              </span>
            </div>
            {/* 旋转按钮 */}
            {activeRoom.type === ITEM_TYPES.FURNITURE && (
              <button
                className="flex-shrink-0"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRotate();
                }}
              >
                {" "}
                <RotateCcwSquare className="w-4 h-4" />
              </button>
            )}

            {/* 删除按钮 */}
            <button
              className="flex-shrink-0 text-red-500 hover:text-red-600 transition-colors"
              onClick={(e) => {
                const newItems = localItems.filter(
                  (item) => item.id !== activeRoom.id
                );
                setLocalItems(newItems);
                setActiveRoom(null);
              }}
            >
              <Trash2 className="w-4 h-4 text-red-500" />
            </button>
          </div>
        )}
        {/* 移动端的操作按钮 控制显示drag tab */}
        <div className="fixed z-50 bottom-6 left-0 px-2 gap-4 w-full bg-transparent flex items-center justify-between  md:hidden">
          {!showTab && (
            <button
              onClick={onShowTab}
              className="border-primary border-1 font-bold w-4/5 py-3 bg-white text-foreground rounded-[100px] text-sm"
            >
              {t("showTab")}
            </button>
          )}

          <button
            onClick={onGenReport}
            className={cn(
              "inline-flex font-bold py-3 bg-button-gradient text-white rounded-[100px] text-sm items-center justify-center gap-0",
              showTab ? "w-full " : "w-4/5"
            )}
          >
            {t("cta")}
            <Image
              src="/images/hero/star.png"
              alt="arrow"
              width={15}
              height={16}
            />
          </button>
        </div>
      </div>
    );
  }
);
