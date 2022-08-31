import React from 'react'
import './footer.css'
import {BsWhatsapp} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTelegram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Darpan Sarda</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.facebook.com/darpan.sarda'><BsFacebook /></a>
        <a href='https://www.instagram.com/darpan_sarda/'><BsInstagram /></a>
        <a href='https://t.me/Darpan97'><BsTelegram /></a>
        <a href='https://wa.me/9081249454'><BsWhatsapp /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Darpan Sarda</small>
      </div>
    </footer>
  )
}

export default Footer