import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/1648987131926.jpg'
import IMG2 from '../../assets/portfolioreact.jpg.png'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Dubai Tourism',
    github: 'https://github.com/Coderr777/dubai/tree/main/dubai/html.waituk.com/entrada',
  },
  {
    id: 1,
    image: IMG2,
    title: 'Personal Portfolio using React',
    github: 'https://github.com',
  }
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>PortFolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) =>
          {
            return (
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn'>Github</a>
            </div>
        </article>
            )
           } )
        }
      </div>

    </section>
  )
}

export default Portfolio