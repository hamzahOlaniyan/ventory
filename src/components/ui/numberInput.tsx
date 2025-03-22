import React from 'react'

type Props = {
    items?: any,
    icon?: React.ReactNode,
    label?: string
    placeholder?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    error?: string;
    id?: string;
    value?: string

}

export const NumberInput = ({ icon, placeholder, onChange, error, id, value }: Props) => {
    return (
        <div className="w-full h-9 bg-offwhite relative flex items-center rounded-md outline outline-1 -outline-offset-1 outline-hairline_dark has-[input:focus-within]:outline has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-2 has-[input:focus-within]:outline-theme-900">
            {/* <label htmlFor={id} className='capitalize text-xs font-semibold'>{label}</label> */}
            <i className='text-hairline_dark h-full bg-neutral-50 p-0.5 rounded-sm border border-r border-neutral-400'>{ }</i>
            <input type='number' className="w-full h-9 z-50 bg-transparent flex items-center rounded-md px-2 outline-0" placeholder={placeholder} onChange={onChange} />
        </div>
    )
}
