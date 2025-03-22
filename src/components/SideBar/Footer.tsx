import React, { ElementType } from 'react'
import { Settings2Icon, FileQuestionIcon, AccessibilityIcon } from 'lucide-react'
import Link from 'next/link'

type FooterMenuType = {
    url: string,
    icon?: ElementType
}[]

export const footerMenu: FooterMenuType = [
    { icon: Settings2Icon, url: '/' },
    { icon: FileQuestionIcon, url: '/' },
    { icon: AccessibilityIcon, url: '/' },
    { icon: Settings2Icon, url: '/' }
]

export const Footer = () => {
    return (
        <footer>
            <ul className='flex flex-col justify-center items-center'>
                {footerMenu.map(({ icon: Icon, url }, idx: number) => (
                    <li key={idx} className={`w-10 h-10 flex justify-center items-center`}>
                        <Link href={url} >{Icon && <Icon className="w-4 h-4 text-neutral-500 hover:text-neutral-900" />}</Link>
                    </li>
                ))}
            </ul>
        </footer>
    )
}
