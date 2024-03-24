import React, { useState } from 'react'
import { close, logo, menu } from "../assets"
import { navLinks } from "../constants"

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
   <nav className="w-full flex justify-between py-6 items-center navbar">
<img
 className="w-[124px] h-[32px]"
 src={logo} 
 alt="logo" />
 <ul className="list-none sm:flex hidden justify-end items-center flex-1">
    {navLinks.map((nav, index) => (
      <li
      className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}
      key={nav.id}>
        <a href={`#${nav.id}`}>
          {nav.title}
        </a>
      </li>
    ))}
 </ul>
 <div className="sm:hidden flex flex-1 justify-end items-center">
      <img
      className="w-[28px] h-[28px] object-contain cursor-pointer"
       src={isMenuOpen ? close: menu} 
       alt="menu" 
       onClick={() => setIsMenuOpen((prev) => !prev)}
       />
       <div className={`${isMenuOpen ? 'flex' : 'hidden'} p-6 absolute bg-black-gradient top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
       <ul className="list-none flex flex-col justify-end items-center flex-1">
    {navLinks.map((nav, index) => (
      <li
      className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}
      key={nav.id}>
        <a href={`#${nav.id}`}>
          {nav.title}
        </a>
      </li>
    ))}
 </ul>
       </div>
 </div>
   </nav>
  )
}

export default NavBar