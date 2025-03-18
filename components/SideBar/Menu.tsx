'use client'
import React from 'react'
import { ClipboardCheckIcon, DatabaseBackupIcon, SailboatIcon, Wallet2Icon, TableCellsMergeIcon, GalleryHorizontalEndIcon, MenuIcon, Settings2Icon, FileQuestionIcon, AccessibilityIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type PageLinksType = {
    page: string
    url: string,
    icon?: React.ReactNode
}[]

export const pages: PageLinksType = [
    { page: 'dashboard', url: '/dashboard', icon: <ClipboardCheckIcon className='text-xs text-neutral-500 hover:text-neutral-900' /> },
    { page: 'inventory', url: '/inventory', icon: <DatabaseBackupIcon className='text-xs text-neutral-500 hover:text-neutral-900' /> },
    { page: 'sales', url: '/sales', icon: <SailboatIcon className='text-xs text-neutral-500 hover:text-neutral-900' /> },
    { page: 'order', url: '/order', icon: <Wallet2Icon className='text-xs text-neutral-500 hover:text-neutral-900' /> },
    { page: 'report', url: '/report', icon: <TableCellsMergeIcon className='text-xs text-neutral-500 hover:text-neutral-900' /> },
    { page: 'document', url: '/document', icon: <GalleryHorizontalEndIcon className='text-xs text-neutral-500 hover:text-neutral-900' /> },
]
export const MenuIncons = () => {

    const pathname = usePathname()
    return (
        <ul className='w-full h-full flex flex-col gap-4 justify-center items-start'>
            {pages.map((links) => (
                <li key={links.page} className={`${pathname.includes(links.page) ? 'text-yellow-400' : 'bg-grey-600'}`}>
                    <Link href={links.url}>{links.icon}</Link>
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
