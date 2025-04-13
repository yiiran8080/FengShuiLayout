'use client'
import {
  DndContext,
  DragOverlay,
  TouchSensor,    // 添加触摸传感器
  MouseSensor,
  useSensor,
  useSensors,
  pointerWithin,
  closestCorners
} from '@dnd-kit/core';
import { redirect } from "next/navigation";
import { useState, useRef, useEffect } from 'react';
import { ITEM_TYPES, ROOM_TYPES, FURNITURE_TYPES } from '@/types/room';
import { Canvas } from '@/components/Canvas';
import NavbarDesign from '@/components/NavbarDesign';
import NavbarDesignMobile from '@/components/NavbarDesignMobile';
import Image from 'next/image';
import useMobile from '../../hooks/useMobile';
import DragBarPC from '@/components/dragBarComp/DragBarPC';
import DragBarMobile from '@/components/dragBarComp/DragBarMobile';
import { get, post } from "@/lib/ajax";
import { useSession } from 'next-auth/react'
import UserInfoDialog from '@/components/UserInfoDialog';
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from 'react-toastify';
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
  const sensors = useSensors(
    useSensor(TouchSensor, {
      tolerance: 50,
    }),
    useSensor(MouseSensor, {
      // 鼠标传感器配置
      activationConstraint: {
        distance: 10,    // 激活所需的移动距离
      },
    }
    )
  );
  const [active, setActive] = useState(null);
  const [isOverCanvas, setIsOverCanvas] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(0);
  const [showTab, setShowTab] = useState(false);
  const [history, setHistory] = useState([[]]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [showUserInfoDialog, setShowUserInfoDialog] = useState(false);
  const [userInfo, setuserInfo] = useState({})
  const [loading, setLoading] = useState(false);
  const canvasRef = useRef(null);
  const sidebarRef = useRef(null);
  const isMobile = useMobile();
  const draggingItemSize = isMobile ? 48 : 56;

  const { data: session } = useSession();

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


  // 加载设计数据  TODO
  useEffect(() => {
    //toast.error("查询错误:")
    const loadDesign = async () => {
      //const userId = 'yunyanyr@gmail.com';
      const userId = session?.user?.userId;
      if (!userId) return;

      //console.log('session', session?.user?.userId)
      try {
        const { status: status0, message: message0, data: userInfo } = await get(`/api/users/${userId}`)
        const { status: status1, message: message1, data: designData } = await get(`/api/design/${userId}`);
        console.log('designData', status0, message0)
        if (status0 !== 0) {
          toast.error("查询用户错误:" + message0)
          return
        }
        if (status1 !== 0) {
          toast.error("查询布局错误:" + message1)
          return
        }
        // console.log('data', userInfo, localItems)
        setuserInfo(userInfo);
        setShowUserInfoDialog(true);
        const { localItems = [], canvasPosition = { x: 0, y: 0 }, compassRotation = 0 } = designData;
        let newItems = localItems.map(item => {
          return {
            ...item,
            type: item._type,
            data: {
              ...item.data,
              type: item.data._type
            }
          }
        })
        canvasRef.current?.setLocalItems(newItems);
        canvasRef.current?.setPosition(canvasPosition);
        canvasRef.current?.setCompassRotation(compassRotation);
      } catch (error) {
        toast.error("加载布局错误:" + error)
        console.error('Error loading design:', error);
      }
    };
    loadDesign();
  }, [session?.user?.userId]);


  const handleDragStart = (event) => {
    const { active } = event;
    setActive(active);
    setIsOverCanvas(false);
  };
  const initOverCanvas = (event, roomDragStart) => {
    const { over } = event;
    const isOverCanvasArea = over?.id === 'canvas';

    setIsOverCanvas(isOverCanvasArea);
    if (isOverCanvasArea) {
      const localItems = canvasRef.current.getLocalItems();
      const label = `${active.data.current.label}${localItems.filter(item => item.data.type === active.data.current.type).length + 1}`;
      const newItem = {
        id: `${active.data.current.type}-${localItems.filter(item => item.data.type === active.data.current.type).length + 1}`,
        type: active.data.current.cateType,
        data: {
          ...active.data.current,
          label: active.data.current.cateType === ITEM_TYPES.ROOM ? label : '',
        },
        size: active.data.current.size,
        activeIcon: active.data.current.activeIcon
      };

      canvasRef.current.setIsRoomDragging(true);
      canvasRef.current.setRoomDragStart(roomDragStart);
      canvasRef.current.setDraggedRoom(newItem)
    } else {
      canvasRef.current.setIsRoomDragging(false);
    }
  }
  const handleDragMove = (event) => {
    if (!isMobile) return;
    if (event.delta.y < -120) {
      initOverCanvas(event, { x: 0, y: 78 })
    }
  }
  const handleDragOver = (event) => {
    if (isMobile) return;
    initOverCanvas(event, { x: sidebarWidth, y: draggingItemSize })
  }
  const handleDragEnd = (event) => {
  };

  // 保存设计数据 TODO
  const onSaveProject = async () => {

    if (!session?.user?.userId) {
      redirect('/auth/login');
    }
    //const userId = 'yunyanyr@gmail.com'
    try {
      setLoading(true)
      const { status } = await post(`/api/design/${session.user.userId}`, {
        localItems: canvasRef.current.getLocalItems(),
        canvasPosition: canvasRef.current.position,
        compassRotation: canvasRef.current.compassRotation

      });
      if (status == 0) {
        toast.success("保存成功！");
      }

      // 可以添加成功提示
    } catch (error) {
      toast.error("保存失败：" + error);
      console.error('Error saving design:', error);
      // 可以添加错误提示
    } finally {
      setLoading(false)
    }
  };
  const onGenReport = async () => {
    await onSaveProject();
  }
  const onShowTab = () => {
    setShowTab(true)
  }
  // 处理撤销
  const handleUndo = () => {
    if (historyIndex > 0) {
      canvasRef.current?.setActiveRoom(null);
      setHistoryIndex((prev) => prev - 1);
      canvasRef.current?.setLocalItems(history[historyIndex - 1]);
    }
  };

  // 处理重做
  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      canvasRef.current?.setActiveRoom(null);
      setHistoryIndex((prev) => prev + 1);
      canvasRef.current?.setLocalItems(history[historyIndex + 1]);
    }
  };

  // 处理用户信息提交 TODO
  const handleUserInfoSubmit = async (userInfo) => {
    if (!session?.user?.userId) {
      redirect('/auth/login');
    }
    setLoading(true)
    setuserInfo(userInfo);

    const userId = 'yunyanyr@gmail.com'
    try {
      const { status } = await post(`/api/users/${session.user.userId}`, {
        gender: userInfo.gender,
        birthDateTime: userInfo.birthDateTime.toISOString()
      });
      if (status == 0) {
        toast.success("保存成功！");
        setShowUserInfoDialog(false);
      }


    } catch (error) {
      toast.error("保存失败：" + error);
      console.error('Error saving user info:', error);
    } finally {
      setLoading(false)
    }
  };

  return (
    <>
      <ClipLoader
        color={'#666'}
        loading={loading}
        cssOverride={{ position: 'fixed', left: '50%', top: '50%', zIndex: 60 }}
        size={30}
        aria-label="loading..."
        data-testid="loader"
      />

      <UserInfoDialog
        open={showUserInfoDialog}
        onUserOpen={setShowUserInfoDialog}
        onSubmit={handleUserInfoSubmit}
        userInfo={userInfo}
      />
      {
        isMobile ? (
          <NavbarDesignMobile
            onSaveProject={onSaveProject}
            history={history}
            historyIndex={historyIndex}
            handleUndo={handleUndo}
            handleRedo={handleRedo}
            onUserOpen={setShowUserInfoDialog}
          />
        ) : (
          <NavbarDesign onSaveProject={onSaveProject} onUserOpen={setShowUserInfoDialog} />
        )
      }
      <div className="pt-16">
        <DndContext
          sensors={sensors}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDragMove={handleDragMove}
        // collisionDetection={pointerWithin}
        >
          <div className="min-h-[calc(100vh-64px)] bg-gray-50">
            <div className="container p-0" style={{ maxWidth: '100%' }}>
              <div className="flex h-[calc(100vh-64px)]">
                {
                  isMobile ? (
                    <DragBarMobile showTab={showTab} setShowTab={setShowTab} roomItems={roomItems} furnitureItems={furnitureItems} isOverCanvas={isOverCanvas} draggingItemSize={draggingItemSize} />
                  ) : (
                    <DragBarPC sidebarRef={sidebarRef} roomItems={roomItems} furnitureItems={furnitureItems} isOverCanvas={isOverCanvas} draggingItemSize={draggingItemSize} />
                  )
                }
                {/* Canvas */}
                <div className="flex-1 overflow-auto" id="canvas-drop-area">
                  <Canvas ref={canvasRef}
                    history={history}
                    historyIndex={historyIndex}
                    setHistory={setHistory}
                    setHistoryIndex={setHistoryIndex}
                    handleUndo={handleUndo}
                    handleRedo={handleRedo}
                    onGenReport={onGenReport}
                    showTab={showTab}
                    onShowTab={onShowTab} />
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
                      transform: isMobile ? 'translateY(78px)' : 'translateY(0)',
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
      </div>

    </>
  );
}