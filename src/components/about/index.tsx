import React, { FunctionComponent } from 'react'
import SectionSeparator from '../sectionSeparator'

import './about.css'

const About:FunctionComponent = () => {
  return (
    <section id="about" className='about'>
      <div className="cdc-labels">
        <label className="text-label">CREATE</label>
        <label>+</label>
        <label className="text-label">DESIGN</label>
        <label>+</label>
        <label className="text-label">CODE</label>
      </div>
    </section>
  )
}

export default About