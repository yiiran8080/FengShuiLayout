import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import { DraggableItem } from "../DraggableItem";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

import { cn } from "@/lib/utils";
export default function DragBarMobile(props) {
    const { showTab, setShowTab, roomItems, furnitureItems, isOverCanvas, draggingItemSize } = props
    const [active, setActive] = useState('')
    useEffect(() => {
        setActive('room')
    }, [])
    return (

        <div
            style={{
                boxShadow: "0 -1px 5px 0px rgba(0, 0, 0, 0.2)",
            }}
            className={cn("fixed bottom-0 left-0 z-10 w-full pb-20  pl-4 bg-white md:hidden rounded-t-2xl transition-transform duration-300 ease-in-out", showTab ? 'translate-y-0' : 'translate-y-full')}

        >
            <Tabs value={active} className="w-full gap-4" setShowTab={setShowTab} onValueChange={(value) => setActive(value)}>
                <TabsList className="mx-auto bg-white gap-8">
                    <TabsTrigger
                        defaultValue
                        value="room"
                        className="rounded-[3px] text-[12px] font-bold data-[state=active]:shadow-none data-[state=active]:border-b-4 data-[state=active]:border-b-primary"
                    >
                        房间
                    </TabsTrigger>
                    <TabsTrigger
                        value="furniture"
                        className="rounded-[3px] text-[12px] font-bold data-[state=active]:shadow-none data-[state=active]:border-b-4 data-[state=active]:border-b-primary"
                    >
                        家具
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="room" >
                    <ScrollArea className="w-full pb-7">
                        <div className="grid grid-cols-6 gap-x-8 gap-y-4 min-w-110 ">
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
                                                className='bg-[#EFF7F4] rounded-lg'
                                                src={item.data.icon}
                                                alt={item.data.label}
                                                width={draggingItemSize}
                                                height={draggingItemSize}
                                            />
                                        </div>
                                        <span className="mt-1 text-[12px] text-gray-600">{item.data.label}</span>
                                    </div>
                                </DraggableItem>
                            ))}
                        </div>
                        <ScrollBar orientation="horizontal" forceMount>
                            <ScrollArea.Thumb />
                        </ScrollBar>
                    </ScrollArea>

                </TabsContent>
                <TabsContent value="furniture">
                    <ScrollArea className="w-full pb-7">
                        <div className="grid grid-rows-2 grid-cols-9 gap-x-8 gap-y-4  min-w-150 w-auto">
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
                                        <span className="mt-1 text-[12px] text-gray-600">{item.data.label}</span>
                                    </div>
                                </DraggableItem>
                            ))}
                        </div>
                        <ScrollBar orientation="horizontal" forceMount />
                    </ScrollArea>


                </TabsContent>
            </Tabs>

        </div>


    );
}
