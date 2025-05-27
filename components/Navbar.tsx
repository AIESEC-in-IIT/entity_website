import { NAV_BAR_LINKS } from '@/constants'
import { link } from 'fs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="border-2 border-red-500 flexBetween padding-container relative z-30 py-5">
        <Link href="/">
            <Image src="/global_volunteer_horizontal_color.png" alt="logo" width={200} height={100} />
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
            {NAV_BAR_LINKS.map((link) => (
                <Link href={link.href} key={link.key} 
                className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-black">
                    {link.label}
                </Link>
            ))}
        </ul>

    </nav>
  )
}

export default Navbar