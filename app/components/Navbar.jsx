"use client"
import Link from 'next/link'
// import React from 'react'
import {usePathname} from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname();
  const linkclass = (path) =>
    pathname === path
      ? "text-white hover:text-gray-300 font-bold"
      : "text-white hover:text-gray-300"



  return (
    <div className="bg-blue-500 p-4 flex items-center justify-between sticky top-0 z-50">
      <h1 className="text-white text-xl font-bold">Navbar</h1>
      <ul className="flex space-x-4 mt-2">
        <li>    <Link href="/" className={linkclass('/')}>Home</Link></li>
        <li>    <Link href="/about" className={linkclass('/about')}>About</Link></li>
        <li>    <Link href="/contact" className={linkclass('/contact')}>Contact</Link></li>
       <li className="relative group">
  <Link
    href="/services"
    className={linkclass('/services') + " inline-flex items-center"}
  >
    Services
  </Link>

  {/* Dropdown menu */}
  <ul className="absolute left-0 mt-4 w-40 bg-gray-800 text-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
    <li className="px-4 py-2 hover:bg-gray-700">Amir 1</li>
    <li className="px-4 py-2 hover:bg-gray-700">Amir 2</li>
    <li className="px-4 py-2 hover:bg-gray-700">Amir 3</li>
  </ul>
</li>
      </ul>
    </div>
  )
}

export default Navbar