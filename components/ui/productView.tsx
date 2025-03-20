'use client'
import React, { useState } from 'react'
import { FaListUl } from "react-icons/fa6";
import { BsFillGridFill } from "react-icons/bs";
import { IconButton } from './icon-button';
// import { AppContextType } from '@/context';
// import { ProductViewType } from '../../context/index'

// type ProductViewProps = {
//     view: ProductViewType;
//     setView: React.Dispatch<React.SetStateAction<ProductViewType>>;
// };
export const ProductView = () => {

    return (
        <div className='flex items-center justify-center bg-whitesmoke rounded-lg '>
            <IconButton icon={<FaListUl />} onClick={() => { }} active />
            <IconButton icon={<BsFillGridFill />} onClick={() => { }} />
        </div>
    )
}