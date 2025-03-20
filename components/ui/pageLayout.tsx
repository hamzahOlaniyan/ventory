import React from 'react'

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='px-28 pt-20  h-full relative'>
            <div className=" h-full">
                {children}
            </div>
        </div>
    )
}
