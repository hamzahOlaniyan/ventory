import React from 'react'
import { Heading } from './Heading'

export const HeaderTab = ({ children, heading, context }: { heading: string, children: React.ReactNode, context: React.ReactNode }) => {
    return (
        <div className='fixed z-[90] left-0 top-0 right-0 h-20 w-full flex items-end pb-2 mb-2 bg-white px-24 border-b border-neutral-200'>
            <div className="w-full grid grid-cols-[0.7fr_2fr] gap-4 items-end">
                <Heading title={heading} context={context} />
                <div className="w-full flex justify-end items-end gap-2">
                    {children}
                </div>
            </div>
        </div>
    )
}
