'use client'
import React, { useState } from 'react'

export const IconButton = ({ icon, onClick, active }: { icon: React.ReactNode, onClick: () => void, active?: boolean | null }) => {

    return (
        <button type='button' onClick={onClick} className={`h-9 w-9 rounded-lg cursor-pointer flex items-center justify-center overflow-hidden bg-whitesmoke ${active && 'border-2 border-theme'}`}><i className={`${active ? 'text-theme' : 'text-neutral-500 '}`}>{icon}</i></button>
    )
}
