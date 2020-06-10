import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Layout from '../components/layout/Layout'
import Head from '../components/head/Head'

import '../styles/index.scss'

const Home = () => {

  return (
    <Layout>
      <div className="contact-container">
        <Head title="Contact" />
        <h2>Contact Me</h2>
        <ul className="contact-icons">
          <a href="mailto:thomas.gusterson@gmail.com"><li><FontAwesomeIcon icon={faEnvelope} size="4x" />Email</li></a>
          <a href="https://github.com/tgusterson/" target="_blank" rel="noreferrer"><li><FontAwesomeIcon icon={faGithub} size="4x" />Github</li></a>
          <a href="https://www.linkedin.com/in/thomas-gusterson-41926316b/" target="_blank" rel="noreferrer"><li><FontAwesomeIcon icon={faLinkedin} size="4x" />LinkedIn</li></a>
          <a href="https://twitter.com/ThomGusterson" target="_blank" rel="noreferrer"><li><FontAwesomeIcon icon={faTwitter} size="4x" />Twitter</li></a>
        </ul>
      </div>
    </Layout>
  )
}

export default Home