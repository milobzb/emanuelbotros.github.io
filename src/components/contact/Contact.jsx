import React, { useRef, useState } from 'react';
import './contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import { RiMessengerLine } from 'react-icons/ri';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);  // declare a new state variable

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6219wtm', 'template_xzohvkf', form.current, '_KmOnjlN5lcY7jZeU')
      .then((result) => {
          console.log(result.text);
          setMessageSent(true);
      }, (error) => {
          console.log(error.text);
          setMessageSent(false);
      });

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Let's Talk Business</h5>
      <h2>Contact Information</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className='contact__option'>
          <HiOutlineMail className='contact__option-item'/>
          <h4>Email</h4>
          <h5>milobzb@gmail.com</h5>
          <a href="mailto:milobzb@gmail.com" target="_blank" rel="noreferrer">Email Me</a>
        </article>
        <article className='contact__option'>
          <RiMessengerLine className='contact__option-item'/>
          <h4>Message Me</h4>
          <h5>Emanuel Botros</h5>
          <a href="https://www.instagram.com/milo_manny/" target="_blank" rel="noreferrer">Message Me</a>
        </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Type Your Full Name' required onChange={() => setMessageSent(false)} />
          <input type="email" name='email' placeholder='Type Your Email Address' required onChange={() => setMessageSent(false)} />
          <textarea name="message" rows="7" placeholder='Type Your Message' required onChange={() => setMessageSent(false)}></textarea>
          <button type='submit' className='btn btn-primary'>Send A <strong>Fancy</strong> Message</button>
          <p>{messageSent ? "Your fancy message has been sent to Emanuel :D" : ""}</p>
        </form>
      </div>
    </section>
  )
}

export default Contact
