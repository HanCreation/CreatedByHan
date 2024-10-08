import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {Menu, X, FileText } from 'lucide-react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/video-editing', label: 'Edited by Han' },
    { path: '/computer-science', label: 'Coded by Han' },
    { path: '/about', label: 'About Me' },
  ]

  return (
    <header className="bg-[#1f1f1f] text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <img src="https://media.discordapp.net/attachments/1292737012411011092/1292854191307624530/Han_Creation_2021_Inverted_Transparent_.png?ex=67073a0b&is=6705e88b&hm=1f2d2b76860f68c2c3bc6e81b71f1de70f9888a1324bbeb7525c7a0fed57cfd4&=&format=webp&quality=lossless&width=1663&height=935" alt="Logo" className='w-28 h-full'/>
          {/* <span>Dean Hans</span> */}
        </Link>
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`hover:text-teal-300 transition-colors ${
                    isActive(item.path) ? 'text-teal-300' : ''
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          {/* <a
            href="/john-doe-cv.pdf"
            download
            className="ml-6 bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-full transition-colors flex items-center"
          >
            <FileText className="mr-2" size={18} />
            Download Resume
          </a> */}
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`block py-2 px-4 hover:bg-slate-700 transition-colors ${
                    isActive(item.path) ? 'bg-slate-700' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/john-doe-cv.pdf"
                download
                className="block py-2 px-4 hover:bg-slate-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Download Resume
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header