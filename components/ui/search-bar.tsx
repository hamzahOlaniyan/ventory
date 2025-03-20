import React from 'react'
import { IoMdSearch } from 'react-icons/io'
import { RiQrScan2Line } from 'react-icons/ri'

export const SearchBar = () => {
    return (
        <div className="w-full h-9 z-50 flex items-center rounded-md bg-offwhite pl-3 outline outline-1 -outline-offset-1 outline-hairline_dark has-[input:focus-within]:outline has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-2 has-[input:focus-within]:outline-theme">
            <IoMdSearch className='text-lg text-hairline_dark' />
            <input className="bg-transparent block min-w-ful grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="search products..." />
            <div className="flex h-full gap-1 justify-center items-center border-l border-hairline_dark p-3">
                <RiQrScan2Line className='text-theme_green' />
                <span className='font-semibold capitalize text-xs'>scan</span>
            </div>
        </div>
    )
}