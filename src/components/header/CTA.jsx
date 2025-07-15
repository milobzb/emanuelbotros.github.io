import React from 'react'
import RESUME from '../../assets/Emanuel_Botros_Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={RESUME} download className='btn'>Download Resume (PDF)</a>
        <a href="https://www.linkedin.com/in/milobzb/" className=' btn btn-primary' target="_blank" rel="noreferrer">LinkedIn</a>
    </div>
  )
}

export default CTA