import React from 'react'

export const BlurBackdrop = ({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) => {
    return (
        <div onClick={onClick} className='w-[100vw] h-[100vh] fixed top-0 right-0 left-0 bg-black/10 z-[60] backdrop-blur-[2px] flex justify-center items-center'>{children}</div>

    )
}
