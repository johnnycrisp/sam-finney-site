import React from 'react'
import '../styles/main.scss'
import Footer from './Footer'
import Nav from './Nav'

const Layout = ({children, homepageText, title}) => {
  return (
    <div className="site__wrapper">
        <Nav 
        homepageText={homepageText}
        title={title}
         />
        <main>{children}</main>
        <Footer />
    </div>
    
  )
}

export default Layout