import React from 'react'
import './about.css'
import ME from '../../assets/renato2.png'
import { FaGlobeAmericas } from "react-icons/fa";
import { LuPalmtree } from 'react-icons/lu'
import { TbSchool } from 'react-icons/tb'

const About = () =>
{
  return (
    <section id='about'>
      <h5>Get To Know A Little More</h5>
      <h2>About Me</h2>

      <div className='container about__container'>

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Headshot of Emanuel" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            {/* here lies each individual card, you can add more by copying each article tag */}
            <article className='about__card'>
            <FaGlobeAmericas className='about__icon'/>
              <h5>Citizenship</h5>
              <small>US Citizen</small>
            </article>

            <article className='about__card'>
              <LuPalmtree className='about__icon' />
              <h5>Based In</h5>
              <small>Orlando, Florida</small>
            </article>

            <article className='about__card'>
              <TbSchool className='about__icon' />
              <h5>Graduation</h5>
              <small>UCF | Spring 2025</small>
            </article>

          </div>

          <p>
  <strong>
    An IT graduate with hands-on experience in troubleshooting, networking, and security, now pursuing a <i>Master's Degree in Cybersecurity</i> at the <strong>University of Central Florida</strong>.
    My skills include threat analysis, system troubleshooting, and secure network infrastructure. I thrive on solving real-world tech challenges while continuously learning. <br /><br />
    Inspired by global culture, my portfolio reflects my journey through outdoor destinations like Egypt’s Pyramids in Cairo, Japan’s Mount Fuji in Tokyo, and France's Eiffel Tower in Paris. I am also a proud Coptic Orthodox Christian, and my faith deeply shapes my values, work ethic, and sense of purpose throughout my day-to-day life.
  </strong>
</p>


          <div className="cta">
  <a href="#contact" className="btn btn-primary">Contact Me</a>
  <a href="https://github.com/milobzb" className="btn" target="_blank" rel="noreferrer">GitHub</a>
  <a href="https://tryhackme.com/p/Milobzb" className="btn btn-primary" target="_blank" rel="noreferrer">TryHackMe</a>
  <a href="https://www.credly.com/users/emanuel-botros/badges" className="btn" target="_blank" rel="noreferrer">Credly</a>
</div>

        </div>
      </div>
    </section>
  )
}

export default About