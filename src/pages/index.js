import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faReact, faJs, faHtml5, faCss3, faSass, faNodeJs, faGit } from '@fortawesome/free-brands-svg-icons'

import Layout from '../components/layout/Layout'
import Head from '../components/head/Head'

import '../styles/index.scss'

const Home = () => {
  const data = useStaticQuery(graphql`
  query {
    contentfulAboutPage {
      childContentfulAboutPageAboutMeRichTextNode {
        json
      }
    }
  }
`)
  return (
    <Layout>
      <Head title="About" />
      <div className="about-container">
        <h2>About Me</h2>
        {documentToReactComponents(data.contentfulAboutPage.childContentfulAboutPageAboutMeRichTextNode.json)}
        <Link className="ctaBtn" to="/portfolio">View My Work</Link>
        <h3>Skills</h3>
        <div className="skills-list">
          <ul>
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><li><FontAwesomeIcon icon={faReact} size="4x" />React</li></a>
            <a href="https://www.ecma-international.org/publications/standards/Ecma-262.htm" target="_blank" rel="noreferrer"><li><FontAwesomeIcon icon={faJs} size="4x" />JavaScript</li></a>
            <a href="/https://html.com/" target="_blank" rel="noreferrer"><li><FontAwesomeIcon icon={faHtml5} size="4x" />HTML</li></a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer"><li><FontAwesomeIcon icon={faCss3} size="4x" />CSS</li></a>
            <a href="https://sass-lang.com/" target="_blank" rel="noreferrer"><li><FontAwesomeIcon icon={faSass} size="4x" />Sass</li></a>
            <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><li><FontAwesomeIcon icon={faDatabase} size="4x" />MongoDB</li></a>
            <a href="https://nodejs.org" target="_blank" rel="noreferrer"><li><FontAwesomeIcon icon={faNodeJs} size="4x" />NodeJs</li></a>
            <a href="https://git-scm.com/" target="_blank" rel="noreferrer"><li><FontAwesomeIcon icon={faGit} size="4x" />git</li></a>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default Home