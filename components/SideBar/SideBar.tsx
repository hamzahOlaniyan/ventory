'use client'
import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { MenuIcons, MenuLinks } from './Menu'
import { Footer } from './Footer'



export const SideBar = ({ setAdjust, adjust }: { setAdjust?: (state: boolean) => void, adjust?: boolean }) => {
    const [expand, setExpand] = useState(false)

    return (
        <div className="fixed left-0 top-0 z-50">
            <div className="h-[100vh] flex relative">
                <aside className=" w-12 flex flex-col justify-between items-center overflow-hidden z-40 bg-light_blue">
                    <div className="flex flex-col justify-start items-start">
                        <div className="w-full h-14 border-b border-neutral-300 flex justify-center items-center">
                            <h1 className='text-2xl font-black text-sky-700'>V</h1>
                        </div>
                        <MenuIcons />
                    </div>
                    <Footer />
                </aside>
                <div className={`${expand ? 'translate-x-0' : '-translate-x-[95%]'} absolute w-[18rem] top-0 left-12 transition ease-in duration-300 h-full p-3 bg-white border-r border-neutral-300 `}>
                    <i onClick={() => { setExpand(!expand) }} className='w-7 h-7 z-[100] cursor-pointer flex justify-center items-center rounded-full absolute top-2 -right-4 bg-white ring-1 ring-neutral-200'>{expand ? <ChevronLeft className='w-3 h-3' /> : <ChevronRight className='w-3 h-3' />}</i>
                    <MenuLinks />
                </div>
            </div>
        </div>
    )
}
