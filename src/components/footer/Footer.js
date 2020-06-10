import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import footerStyles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <nav>
        <h5>Contact Me:</h5>
        <a href="mailto:thomas.gusterson@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a>
        <a href="https://github.com/tgusterson/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
        <a href="https://www.linkedin.com/in/thomas-gusterson-41926316b/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
        <a href="https://twitter.com/ThomGusterson" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
      </nav>
    </footer>
  )
}

export default Footer
