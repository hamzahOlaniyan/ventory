'use client'
import React from 'react'
import pic from '../../../public/image/productImage.jpeg'
import Image from 'next/image'
import { LuTestTube } from "react-icons/lu";
import { BsClipboardFill } from "react-icons/bs";
import { Badge } from '../../components/ui/badge'
const name = 'adidas adilette 22 2022 green magic lime green'

export const ProductCard = () => {
    return (
        <div className='w-full bg-white rounded-lg p-2'>
            <div className="relative h-36 w-full rounded-lg overflow-hidden " >
                <Image src={pic} alt='product image' fill={true} className="object-cover object-center h-full w-full bg-white" />
                <Badge info='6 variants' />
                <div className="w-full flex items-center justify-between absolute top-2 px-3 ">
                    <Badge info='6 variants' />
                </div>
            </div>
            <div className="my-3">
                <div className=" gap-1 text-sm capitalize px-1">
                    <h1 className='text-sm font-semibold capitalize text-nowrap dark:text-white'>
                        {name.substring(0, 30)}...
                    </h1>
                    <p className='text-xxs my-1 text-neutral-500'>Man shoes</p>
                    <div className="text-neutral-500 space-y-2">
                        <div className="flex items-center gap-1">
                            <BsClipboardFill className='w-2 h-2' />
                            <p className='text-xxs'>stock product shoes: <strong>10000 in stock</strong></p>
                            <div className='text-red-500 flex items-center text-xss'>
                                <LuTestTube />
                                <p className='text-xs'>low</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-[1px] w-full bg-neutral-300 my-3"></div>
                    <div className="flex items-center justify-between">
                        <div className="h-full flex flex-col gap-1">
                            <small className='uppercase text-[0.65rem] text-neutral-500 dark:text-slate-500'>retail price</small>
                            <p className='text-xs'>£180.00 - £220.00</p>
                        </div>
                        <div className="h-full flex flex-col gap-1">
                            <small className='uppercase text-[0.65rem] text-neutral-500 dark:text-slate-500'>wholesale price</small>
                            <p className='text-xs'>£180.00 - £220.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
