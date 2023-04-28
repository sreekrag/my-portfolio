import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub,FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
   <footer>
    <a href="#" className='footer__logo'>SREERAG</a>
    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Experience</a></li>
      <li><a href="#">Contact </a></li>
    </ul>
    <div className='footer__socials'>
        <a href="https://www.linkedin.com/in/ksreek/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/sreekrag" target='_blank'><FaGithub/></a>
        <a href="https://twitter.com" target='_blank'><FaTwitter/></a>
    </div>
    <div className='footer__copyright'>
      <small>&copy; Sreerag Kunhimangalam.All rights reserved.</small>
    </div>
   </footer>
  )
}

export default Footer