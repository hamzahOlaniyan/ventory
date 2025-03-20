import React from 'react'
import { Heading } from './Heading'

export const HeaderTab = ({ children, heading }: { heading: string, children: React.ReactNode }) => {
    return (
        <div className='fixed z-40 left-0 top-0 right-0 h-20 w-full flex items-end pb-2 mb-2 bg-white px-28 border-b border-neutral-200'>
            <div className="w-full grid grid-cols-[0.8fr_2fr] gap-4 items-end">
                <Heading title={heading} />
                <div className="w-full flex justify-end items-end gap-2">
                    {children}
                </div>
            </div>
        </div>
    )
}
