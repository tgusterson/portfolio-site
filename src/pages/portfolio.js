import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import Card from '../components/card/Card'

import Layout from '../components/layout/Layout'
import Head from '../components/head/Head'

const Portfolio = () => {
  const data = useStaticQuery(graphql`
  query {
    allContentfulProject (
      sort: {
        fields:updatedAt,
        order:DESC
      }
    ) {
      edges {
        node {
          title
          toolsUsed
          demoUrl
          repoUrl
          projectImage {
            title
            fluid (maxWidth: 500) {
              src
              srcSet
            }
          }
          description {
            json
          }
        }
      }
    }
  }
`)

  return (
    <Layout>
      <Head title="Projects" />
      <div className="project-container">
        <h2>My Projects</h2>
        <p className="blurb">I post the latest projects I build to this page, but more projects can be found on my <a href="http://github.com/tgusterson/" target="_blank" rel="noreferrer">GitHub profile</a>. I built this website using a static site generator for <a href="https://www.reactjs.org/" target="_blank" rel="noreferrer">React</a> called <a href="https://www.gatsbyjs.org/" target="_blank" rel="noreferrer">Gatsby</a>. I manage the site content via <a href="https://www.contentful.com/" target="_blank" rel="noreferrer">Contentful</a> (and pull it in using <a href="https://graphql.org/" target="_blank" rel="noreferrer">GraphQL</a>); you can find the source code <a href="https://github.com/tgusterson/portfolio-site" target="_blank" rel="noreferrer">here</a>.</p>
        {data.allContentfulProject.edges.map(project => {
          return (
            <Card
              key={project.node.title}
              title={project.node.title}
              demoUrl={project.node.demoUrl}
              repoUrl={project.node.repoUrl}
              picture={project.node.projectImage}
              description={project.node.description.json}
              tools={project.node.toolsUsed}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default Portfolio