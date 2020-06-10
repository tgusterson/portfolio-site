import React from 'react'
import layoutStyles from './layout.module.scss'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import MobileNav from '../mobileNav/MobileNav'

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <MobileNav />
      <div className={layoutStyles.content}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
