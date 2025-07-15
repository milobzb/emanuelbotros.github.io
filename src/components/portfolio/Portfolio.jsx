import React from 'react'
import './portfolio.css'
import IMG2 from '../../assets/tlm.png'
import IMG3 from '../../assets/lift-log.png'
import IMG4 from '../../assets/nurse.png'
import IMG5 from '../../assets/vault.png'
import IMG6 from '../../assets/logo-color.png'

const Portfolio = () =>
{
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Project Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="Project Title" />
          </div>
          <h3>SecurePOS: <br />Self-Checkout Assistant</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/milobzb/SecurePOS_Self-Checkout_Assistant" className='btn' target='_blank' rel="noreferrer">Repository</a>
            
          </div>
          {/* change this to whatever url you want */}
          {/* picture must be 480 x 360 */}
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="The Lost Magic" />
          </div>
          <h3>GuardianTask: <br /> GUI App - Part 1</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/milobzb/GuardianTask-GUI-APP-Part-1" className='btn' target='_blank' rel="noreferrer">Repository</a>

          </div>
          {/* change this to whatever url you want */}
          {/* picuture must be 480 x 360 */}
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="Project Title" />
          </div>
          <h3>NexTier: <br /> Three-Tier Distributed Database App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/milobzb/Three-Tier-Distributed-Database-App" className='btn' target='_blank' rel="noreferrer">Repository</a>

          </div>
          {/* change this to whatever url you want */}
          {/* picuture must be 480 x 360 */}
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="Project Title" />
          </div>
          <h3>GuardianTask: <br /> GUI App - Part 2</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/milobzb/GuardianTask-GUI-APP-Part-2" className='btn' target='_blank' rel="noreferrer">Repository</a>
            
          </div>
          {/* change this to whatever url you want */}
          {/* picture must be 480 x 360 */}
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="Project Title" />
          </div>
          <h3>CipherCart:<br /> A GUI Multithreaded Cryptographic Hash Tool</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/milobzb/CipherCart-GUI-APP" className='btn' target='_blank' rel="noreferrer">Repository</a>
            
          </div>
          {/* change this to whatever url you want */}
          {/* picture must be 480 x 360 */}
        </article>
      </div>
    </section>
  )
}

export default Portfolio