import React from 'react'
import { lato } from '@/constants/font_settings'
import { raleway } from '@/constants/font_settings'
import { NAV_BAR_LINKS } from '@/constants/NavBars'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (

    <div className={`bg-aiesec-blue`}>
      <hr></hr>
      <footer className="flex flex-col space-y-10 justify-center m-10">

        <nav className={`flex justify-center flex-wrap gap-6 text-white font-medium ${lato.className}`}>
            {NAV_BAR_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className=""
          >
            {link.label}
          </Link>
        ))}
        </nav>

        <div className="flex justify-center space-x-5">
            <a href="https://instagram.com/ig_iit" target="_blank" rel="noopener noreferrer">
                <Image 
                src='/social_media/instagram.png'
                height={25}
                width={25}
                alt='Instagram'
                />
            </a>
            <a href="https://wa.me/94767329685" target="_blank" rel="noopener noreferrer">
                <Image 
                src='/social_media/whatsapp.png'
                height={25}
                width={25}
                alt='Instagram'
                />
            </a>
            <a href="mailto:aiesec@iit.ac.lk" target="_blank" rel="noopener noreferrer">
                <Image 
                src='/social_media/email.png'
                height={25}
                width={25}
                alt='Instagram'
                />
            </a>
        </div>
        <div className={`flex justify-center`}>
          <Image
          src="/common/AIESEC_LOGO_WHITE.png"
          width={300}
          height={100}
          alt='AIESEC'/>
        </div>
        <p className={` ${raleway.className} text-center text-white font-medium pb-8`}>&copy; AIESEC in IIT Showcasing Team.</p>
      </footer>
    </div>
  )
}

export default Footer