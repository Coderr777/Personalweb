import React from 'react'
import './about.css'
import ME from '../../assets/cropp-removebg-preview.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image'/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Student</h5>
              <small>Diploma Passout</small>
            </article>
            
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>2+ completed</small>
            </article>
          </div>
          <p>
            Hello! My Name Is <b>Darpan Sarda</b>, and I'M a Developer Who wanted to learn new things. I'm a skilled Developer. I have some comprehensive Knowledge of REACTJS, JAVASCRIPT.. and professional in PHP, HTML, JAVA. Passionate for New projects, Also has ability to work in Group project, Willing to start a Dream career in the Computer and technology field. 
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About