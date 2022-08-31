import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'
import {BsMessenger} from 'react-icons/bs'
import {BsTelegram} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href='https://www.linkedin.com/in/darpan-sarda-b02361238' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com/Coderr777' target='_blank'><FaGithub /></a>
        <a href='https://www.instagram.com/darpan_sarda/' target='_blank'><FaInstagram /></a>
        <a href='https://wa.me/9081249454' target='_blank'><FaWhatsapp /></a>
        <a href='https://m.me/darpan.sarda' target='_blank'><BsMessenger /></a>
        <a href='https://t.me/Darpan97' target='_blank'><BsTelegram /></a>
    </div>
  )
}

export default HeaderSocial