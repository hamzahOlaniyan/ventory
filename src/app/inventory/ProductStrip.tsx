'use client'

import React from 'react'
import pic from '../../../public/image/productImage.jpeg'
import Image from 'next/image'
import { BsThreeDots } from 'react-icons/bs'
import { GoDotFill } from "react-icons/go";
import { LuTestTube } from "react-icons/lu";
import { BsClipboardFill } from "react-icons/bs";
import { Badge } from '@/src/components/ui/badge'

export const ProductStrip = () => {

    return (
        <button className="w-full h-20 relative grid grid-cols-[2fr_1fr] items-center justify-between p-1 overflow-hidden bg-white rounded-lg ">
            <div className="h-full w-full flex gap-2">
                <div className="h-full w-16 relative rounded-md">
                    <Image src={pic} alt='product_image' fill={true} className="h-full object-cover object-center relative rounded-md" />
                </div>
                <div className="flex flex-col justify-center gap-2">
                    <h1 className='text-sm font-semibold capitalize text-left'>adidas adilette 22 2022 green magic lime green</h1>
                    <div className="w-full flex item-center gap-2">
                        <Badge info='6 variants' />
                        <div className="flex items-center justify-center gap-1 text-xs">
                            <div className="flex items-center gap-1">
                                <GoDotFill className='w-2 h-2 top-0.5 relative' />
                                <span>{'Man shoes'}</span>
                                <GoDotFill className='w-2 h-2 top-0.5 relative' />
                            </div>
                            <div className="flex items-center gap-1">
                                <div className='capitalize flex items-center gap-1'>
                                    <BsClipboardFill className='w-2 h-2' />
                                    <p>stock product shoes: </p>
                                    <p>10 in stock</p>
                                </div>
                            </div>
                            <span className='text-red-500 flex items-center'> <LuTestTube /> <p className='text-xs'>low</p></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-full flex items-center">
                <div className="flex gap-2 items-center justify-between text-left text-xxs">
                    <div className="h-full flex flex-col gap-2 justify-start">
                        <small className='uppercase text-[0.65rem] text-neutral-500 dark:text-slate-500'>retail price</small>
                        <p className='text-xs text-nowrap'>£180.00 - £220.00</p>
                    </div>
                    <div className="h-full flex flex-col gap-2 justify-start">
                        <small className='uppercase text-[0.65rem] text-neutral-500 dark:text-slate-500'>wholesale price</small>
                        <p className='text-xs text-nowrap'>£180.00 - £220.00</p>
                    </div>
                    <div className="h-7 w-7 rounded-md bg-transparent cursor-pointer flex items-center justify-center overflow-hidden ring-1 ring-light04">
                        <BsThreeDots />
                    </div>
                </div>
            </div>
        </button>
    )
}
