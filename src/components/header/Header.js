import React from 'react'
import { Link } from 'gatsby'

import headerStyles from './header.module.scss'

const Header = () => {
  return (
    <>
      <header className={headerStyles.header}>
        <Link to="/">
          <h1>
            Thom Gusterson
          </h1>
        </Link>
        <nav>
          <ul>
            <li><Link to="/">About</Link></li>
            <li><Link to="/portfolio">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header