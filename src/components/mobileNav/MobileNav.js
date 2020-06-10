import React, { useState } from 'react'
import { Link } from 'gatsby'

import Hamburger from './Hamburger'

import navStyles from './nav.module.scss'

const MobileNav = () => {
  const [open, setOpen] = useState(false)
  const handleClick = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      setOpen(!open)
    }
  }
  return (
    <>
      <Hamburger open={open} handleClick={handleClick} />
      {open === true &&
        <ul className={navStyles.navList}>
          <li key="about"><Link to="/" onClick={handleClick} onKeyPress={handleClick}>About</Link></li>
          <li key="portfolio"><Link to="/portfolio" onClick={handleClick} onKeyPress={handleClick}>Projects</Link></li>
          <li key="contact"><Link to="/contact" onClick={handleClick} onKeyPress={handleClick}>Contact</Link></li>
        </ul>
      }
    </>
  )
}

export default MobileNav
