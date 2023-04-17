import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
    <ul>
    <li className='text'><a href="https://docs.google.com/document/d/1qqLJoZNGcUpLM8-gDcDXZ-t3AetO8Y0I/edit?usp=sharing&ouid=110752567564949449732&rtpof=true&sd=true" target="_blank"><strong>RESUME</strong></a></li>
    <li className='text'><a href="https://github.com/hafizali05/hafiz-personal-website" target="_blank"><i className="fa fa-github"></i></a></li>
    <li className='text'><a href="https://twitter.com/hafizdidarali" target="_blank"><i className="fa fa-twitter"></i></a></li>
    <li className='text'><a href="https://www.instagram.com/hafizallylalani" target="_blank"><i className="fa fa-instagram"></i></a></li>
    <li className='text'><a href="https://www.linkedin.com/in/hafizali05/" target="_blank"><i className="fa fa-linkedin"></i></a></li>
    </ul>            
    </div>
  )
}

export default Header