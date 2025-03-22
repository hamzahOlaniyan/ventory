import React from 'react'

export const Heading = ({ title, context }: { title: string, context?: React.ReactNode }) => {
    return (
        <div className='flex items-end justify-between'>
            <p className='text-xl font-bold capitalize'>{title}</p>
            <div className='relative'>{context}</div>
        </div>
    )
}
