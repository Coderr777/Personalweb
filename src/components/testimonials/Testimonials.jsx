import React from 'react'
import './testimonials.css'
import avtr1 from '../../assets/php.png'
import avtr2 from '../../assets/react.png'
import avtr3 from '../../assets/javascript.png'
import avtr4 from '../../assets/python.jpg'
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: avtr1,
    name:'PHP',
    review: 'PHP is a general-purpose scripting language geared toward web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994.'
  },
  {
    avatar: avtr2,
    name:'REACTJS',
    review: 'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies..'
  },
  {
    avatar: avtr3,
    name:'JAVASCRIPT',
    review: 'JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.'
  },
  {
    avatar: avtr4,
    name:'PYTHON',
    review: 'Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically-typed and garbage-collected.'
  }
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Some Known Programming</h5>
      <h2>Languages</h2>

      <Swiper
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
       className="container testimonials__container">
        {
          data.map(({avatar,name,review},index)=>
          {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="avatar" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">
                  {review}
                </small>
            </SwiperSlide>
          )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials