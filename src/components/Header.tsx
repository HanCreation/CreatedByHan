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
          <img src="https://media.discordapp.net/attachments/1292737012411011092/1292737147689762826/Han_Creation_2021_Inverted_transparent.png?ex=67097009&is=67081e89&hm=d0539032f4ec3ba6a70cc8fcca927530b05f5b3d42cbc36cfac5ae185d5af003&=&format=webp&quality=lossless&width=907&height=509" alt="Logo" className='w-28 h-full'/>
          {/* <span>Dean Hans</span> */}
        </Link>
        <nav className="hidden md:flex items-center">
          
          <a
            href="https://cdn.discordapp.com/attachments/1292737012411011092/1294155812507222057/CV_-_Dean_Hans.pdf?ex=6709fc05&is=6708aa85&hm=7f48610334e5e5ef4de2edd1a4fb9ce50c030600c3325010f693f767466474e6&"
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