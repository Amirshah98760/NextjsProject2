import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-blue-500 p-4 flex items-center justify-between">
      <h1 className="text-white text-xl font-bold">Navbar</h1>
      <ul className="flex space-x-4 mt-2">
        <li>    <Link href="/" className="text-white hover:text-gray-300">Home</Link></li>
        <li>    <Link href="/about" className="text-white hover:text-gray-300">About</Link></li>
        <li>    <Link href="/contact" className="text-white hover:text-gray-300">Contact</Link></li>
       <li className="relative group">
  <Link
    href="/services"
    className="text-white hover:text-gray-300"
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