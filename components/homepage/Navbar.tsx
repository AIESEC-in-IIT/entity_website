'use client'

import { NAV_BAR_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'


const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev)
  }

  return (
    <nav className="border-2 border-black-500 flexBetween padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/aiesec_in_iit_colored_logo.png" alt="logo" width={100} height={50} className="pl-4"/>
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden h-full gap-12 lg:flex pr-5 ">
        {NAV_BAR_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-black hover:text-aiesec-blue"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <Image
        src="/menu.png"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleSidebar}
      />

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar} className="text-black text-xl">✕</button>
        </div>
        <ul className="flex flex-col gap-6 p-6">
          {NAV_BAR_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              onClick={toggleSidebar}
              className="text-lg text-black transition-all hover:font-black hover:text-aiesec-blue"
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>

      {/* Background Overlay */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
        />
      )}
    </nav>
  )
}

export default Navbar