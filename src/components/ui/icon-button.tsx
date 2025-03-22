'use client'
import React, { useState } from 'react'

export const IconButton = ({ icon, onClick, active }: { icon: React.ReactNode, onClick: () => void, active?: boolean | null }) => {

    return (
        <button type='button' onClick={onClick} className={`h-9 w-9 rounded-lg cursor-pointer flex items-center justify-center overflow-hidden bg-whitesmoke ${active && 'border-[1.5px] border-theme-900 bg-theme-900/5'}`}><i className={`${active ? 'text-theme-900' : 'text-neutral-500 '}`}>{icon}</i></button>
    )
}
