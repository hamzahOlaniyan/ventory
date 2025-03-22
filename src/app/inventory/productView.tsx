'use client'
import React, { useState } from 'react'
import { FaListUl } from "react-icons/fa6";
import { BsFillGridFill } from "react-icons/bs";
import { useAppContext } from '@/src/context';
import { IconButton } from '@/src/components/ui/icon-button';

export const ProductView = () => {
    const { view, setView } = useAppContext()

    return (
        <div className='flex items-center justify-center bg-whitesmoke rounded-lg '>
            <IconButton icon={<FaListUl />} onClick={() => setView('list')} active={view === 'list'} />
            <IconButton icon={<BsFillGridFill />} onClick={() => setView('grid')} active={view === 'grid'} />
        </div>
    )
}