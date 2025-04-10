import { DraggableItem } from "../DraggableItem"
import { Canvas } from "../Canvas"
import Image from "next/image"

export default function DragBarPC(props) {
    const { sidebarRef, roomItems, furnitureItems, isOverCanvas, draggingItemSize } = props
    return <div ref={sidebarRef} className="md:block hidden overflow-auto w-1/6 bg-white p-4 shadow border-r-gray-100 border-r-2">
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





}
