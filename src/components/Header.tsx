import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {Menu, X, FileText } from 'lucide-react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  const navItems = [
    // { path: '/', label: 'Home' },
    // { path: '/video-editing', label: 'Edited by Han' },
    // { path: '/computer-science', label: 'Coded by Han' },
    // { path: '/about', label: 'About Me' },
  ]

  return (
    <header className="bg-[#1f1f1f] text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <img src="src/assets/Han Creation 2021 Inverted Transparent .png" alt="Logo" className='w-28 h-full'/>
          {/* <span>Dean Hans</span> */}
        </Link>
        <nav className="hidden md:flex items-center">
          
          <a
            href="public/CV - Dean Hans-1.pdf"
            download
            className="ml-6 bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-full transition-colors flex items-center"
          >
            <FileText className="mr-2" size={18} />
            Download CV
          </a>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
    </header>
  )
}

export default Header