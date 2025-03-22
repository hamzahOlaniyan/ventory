import React from 'react'

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='pt-24 pb-4 mx-24 h-full relative'>
            <div className=" h-full">
                {children}
            </div>
        </div>
    )
}
