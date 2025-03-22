'use client'
import React, { ElementType } from 'react'
import { ClipboardCheckIcon, DatabaseBackupIcon, SailboatIcon, Wallet2Icon, TableCellsMergeIcon, GalleryHorizontalEndIcon, MenuIcon, Settings2Icon, FileQuestionIcon, AccessibilityIcon } from 'lucide-react'
import { FcDocument, FcBarChart, FcViewDetails, FcSalesPerformance, FcOrgUnit, FcDataSheet } from "react-icons/fc";
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type PageLinksType = {
    page: string
    url: string,
    icon?: ElementType
}[]

export const pages: PageLinksType = [
    { page: 'dashboard', url: '/dashboard', icon: FcOrgUnit },
    { page: 'inventory', url: '/inventory', icon: FcViewDetails },
    { page: 'sales', url: '/sales', icon: FcSalesPerformance },
    { page: 'order', url: '/order', icon: FcDataSheet },
    { page: 'report', url: '/report', icon: FcBarChart },
    { page: 'document', url: '/document', icon: FcDocument },
]
export const MenuIcons = () => {

    const pathname = usePathname()
    return (
        <ul className='w-full h-full flex flex-col'>
            {pages.map(({ page, url, icon: Icon }) => (
                <li key={page} className={`${pathname.includes(url) && 'bg-light_blue2'} hover:bg-light_blue2 w-11 h-11 flex justify-center items-center cursor-pointer duration-300`}>
                    <Link href={page}>{Icon && <Icon className="w-4 h-4 text-neutral-600" />}</Link>
                </li>
            ))}
        </ul>
    )
}

export const MenuLinks = () => {
    return (
        <ul className='w-full flex flex-col gap-4 justify-center items-start'>
            {pages.map((links) => (
                <li key={links.page} className='flex gap-1'>
                    <Link href={links.url} className='capitalize'>{links.page}</Link>
                </li>
            ))}
        </ul>
    )
}
