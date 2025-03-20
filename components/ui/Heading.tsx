import React from 'react'

export const Heading = ({ title }: { title: string }) => {
    return (
        <div className='text-xl font-semibold capitalize'>{title}</div>
    )
}
