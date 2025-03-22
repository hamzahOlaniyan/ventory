'use client'

import React, { useState } from 'react'
import { FaCaretDown } from "react-icons/fa";

type Props = {
    items?: any,
    icon?: React.ReactNode,
    label?: string
    placeholder?: string
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
    error?: string;
    id?: string;
    value?: string

}

export const Select = ({ items, icon, label, placeholder, onChange, error, id,
    value
}: Props) => {
    return (
        <div className="w-full h-9 space-y-1 px-2 relative flex items-center rounded-md outline outline-1 -outline-offset-1 outline-hairline_dark has-[select:focus-within]:outline has-[select:focus-within]:-outline-offset-2 has-[select:focus-within]:outline-2 has-[select:focus-within]:outline-theme-900">
            {/* <label htmlFor={id} className='capitalize text-xs font-semibold'>{label}</label> */}
            {icon && <i className='text-hairline_dark p-0.5 rounded-sm'>{icon}</i>}
            <select id={id} value={value} onChange={onChange} className='w-full pl-1 relative bg-transparent appearance-none outline-0'>
                <option className='capitalize text-slate-500 relative -top-2' value={''} disabled hidden>{placeholder}</option>
                {items?.map((list: any) => (
                    <option value={list} key={list} className='text-sm'>
                        {list.charAt(0).toUpperCase() + list.slice(1)}
                    </option>
                ))}
            </select>
            <FaCaretDown className='text-hairline_dark' />
            {/* {error && <p className="text-red-300 text-[0.65rem] mt-0.5">{error}</p>} */}
        </div>
    )
}