import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {AiFillProject} from 'react-icons/ai'
import {AiFillMessage} from 'react-icons/ai'
import { useState } from 'react'
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
  <nav>
    <a onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} href='#'><FaHome /></a>
    <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
    <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
    <a href='#portfolio' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><AiFillProject /></a>
    <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiFillMessage /></a>
    {/* <a href='#'><FaHome /></a> */}
    {/* <a href='#'><FaHome /></a> */}
  </nav>
  )
}

export default Nav