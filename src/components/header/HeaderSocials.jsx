import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub,FaTwitter} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/ksreek/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/sreekrag" target='_blank'><FaGithub/></a>
        <a href="https://twitter.com" target='_blank'><FaTwitter/></a>
    </div>
  )
}

export default HeaderSocials