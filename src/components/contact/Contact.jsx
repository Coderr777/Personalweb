import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {FaFacebookMessenger} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0f2k9ej', 'template_s2jq8r9', form.current, 'YWW1jU3Bn4UrIqxDl')
      
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>darpansarda7@gmail.com</h5>
            <a href='mailto:darpansarda7@gmail.com'>Send a mail</a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Messanger</h4>
            <h5>Darpan Sarda</h5>
            <a href='https://m.me/darpan.sarda' target='_blank'>Send a mesage</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91 9081249454</h5>
            <a href='https://wa.me/9081249454' target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='your full name' required></input>
          <input type="email" name='email' placeholder='your Email id' required></input>
          <input type="text" name='subject' placeholder='Subject' required></input>
          <textarea name='message' rows="7" placeholder='your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact