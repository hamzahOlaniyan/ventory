'use client'
import React, { useState } from 'react'
import { MenuIcon, MoveRightIcon, MoveLeftIcon, ChevronLeft, ChevronRight } from 'lucide-react'
import { MenuIncons, MenuLinks } from './Menu'
import { Footer } from './Footer'



export const SideBar = ({ setAdjust, adjust }: { setAdjust?: (state: boolean) => void, adjust?: boolean }) => {
    const [expand, setExpand] = useState(false)

    return (
        <div className="w-full h-full ">
            <aside className="h-full w-full fixed left-0 top-0 z-50 flex">
                <div className="h-full flex flex-col justify-between items-start p-2 overflow-hidden z-40 bg-background">
                    <div className=" flex gap-4 flex-col justify-between items-start">
                        <div className="w-full h-8 rounded-md bg-sky-500"></div>
                        <MenuIncons />
                    </div>
                    <Footer />
                </div>
                <div className={`${expand ? '-translate-x-[100%]' : 'trasnslate-x-0'} w-[25%] relative top- pt-12 transition ease-in duration-300 h-full p-3 bg-white border-r border-neutral-300 `}>
                    <i onClick={() => { setExpand(!expand) }} className='w-8 h-8 cursor-pointer flex justify-center items-center rounded-full absolute top-2 -right-4 bg-background ring-1 ring-slate-200'>{expand ? <ChevronRight className='w-3 h-3' /> : <ChevronLeft className='w-3 h-3' />}</i>
                    <MenuLinks />
                </div>
            </aside>
        </div>
    )
}