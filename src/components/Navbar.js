'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-purple-950 border-b border-gray-800 sticky top-0 z-50">
      <Link href="/" className="text-2xl font-bold margin-left hover:text-white transition duration-300 flex justify-center items-center h-20">
       abdilahi99official
      </Link>
      <div className="space-x-4 text-gray-300">
      <Link href="#home" className="hover:text-white font-bold">Home</Link>
        <Link href="#about" className="hover:text-white font-bold">About</Link>
        <Link href="#projects" className="hover:text-white font-bold">Projects</Link>
        <Link href="#contact" className="hover:text-white font-bold">Contact</Link>
      </div>
    </nav>
  )
}
