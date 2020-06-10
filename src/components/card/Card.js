import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import cardStyles from './card.module.scss'

const Header = (props) => {

  return (
    <div className={`${cardStyles.cardContainer} card`}>
      <h3>{props.title}</h3>
      <div className={cardStyles.cardContent}>
        <div className={cardStyles.cardLeft}>
          {documentToReactComponents(props.description)}
          <h4>Tech used:</h4>
          <ul>
            {props.tools.map((tool) => {
              return (
                <li key={tool}>{tool}</li>
              )
            })}
          </ul>
        </div>
        <div className={cardStyles.cardRight}>
          <img src={props.picture.fluid.src} alt={props.picture.title} />
          <div>
            <a href={props.demoUrl} target="_blank" rel="noreferrer" className={cardStyles.demoBtn}>View Demo</a>
            <a href={props.repoUrl} target="_blank" rel="noreferrer" className={cardStyles.repoBtn}>View Code</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
