import React from 'react'
import './services.css'
import {CgStark} from 'react-icons/cg'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Have To Offer</h5>
      <h2>Professional Experience</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Technical Support Specialist, <br /> at United Data Technologies</h3>
          </div>

          <ul className='service__list'>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Troubleshooting Software & Harware Issues</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Python Programming Language</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Active Directory</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Ticketing Systems (ConnectWise & Zendesk)</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>SQL Query Language</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Contract Role (based in FL)</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX Section */}
        <article className="service">
          <div className="service__head">
            <h3>Freelance IT Support & Cybersecurity Specialist <br /> </h3>
          </div>

          <ul className='service__list'>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Virtualization Tools (VMware & Hyper-V)</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Networking Protocols (DNS, DHCP, TCP/IP)</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>PowerShell & Bash Scripting</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>TryHackMe Cybersecurity Labs and Threat Simulations</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Troubleshooting small clients and personal networks</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Freelance Role (based in FL)</p>
            </li>
          </ul>
        </article>
        {/* END OF Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>IT Support Technician, <br /> at Geek Squad</h3>
          </div>

          <ul className='service__list'>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Assisted Users Securing Their Devices</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Java Programming Language</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Performed Device Setup, System Imaging</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Agile (Kanban) Methodologies</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Data Backups & Logs Setup</p>
            </li>
            <li>
              <CgStark className='service__list-icon'/>
              <p>Seasonal Role (based in FL)</p>
            </li>
          </ul>
        </article>
        {/* END OF Content Creation */}
      </div>
    </section>
  )
}

export default Services