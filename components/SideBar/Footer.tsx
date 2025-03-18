import React from 'react'
import { Settings2Icon, FileQuestionIcon, AccessibilityIcon } from 'lucide-react'
import Link from 'next/link'

type FooterMenuType = {
    url: string,
    icon?: React.ReactNode
}[]

export const footerMenu: FooterMenuType = [
    { icon: <Settings2Icon />, url: '/' },
    { icon: <FileQuestionIcon />, url: '/' },
    { icon: <AccessibilityIcon />, url: '/' },
    { icon: <Settings2Icon />, url: '/' }
]

export const Footer = () => {
    return (
        <footer>
            <ul className='flex flex-col gap-4 justify-center items-center'>
                {footerMenu.map((footer, idx) => (
                    <Link key={idx} href={footer.url} className='capitalize'>{footer.icon}</Link>
                ))}
            </ul>
        </footer>
    )
}
