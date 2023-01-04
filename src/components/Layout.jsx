import React from 'react'
import '../styles/main.scss'
import Footer from './Footer'
import Nav from './Nav'

const Layout = ({children}) => {
  return (
    <>
        <Nav />
        <main>{children}</main>
        <Footer />
    </>
    
  )
}

export default Layout