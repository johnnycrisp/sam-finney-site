import { graphql, useStaticQuery } from 'gatsby'
import React, { useState } from 'react'
import '../styles/main.scss'
import DropdownNav from './DropdownNav'

const Nav = ({title}) => {

  const header = useStaticQuery(graphql`
    query HeaderQuery {
      datoCmsHomepage {
        homepageText
      }
    }
  `)


  const homeText = header.datoCmsHomepage.homepageText



  return (
    <header>
        <p className="nav__text">{homeText}</p>
        <div className="nav__socials">
            <ul>
                <li>Contact</li>
                <li>Vimeo</li>
                <li>Instagram</li>
            </ul>
        </div>
        <DropdownNav 

        title={title}

        // handleActiveChange={handleActiveChange}
        // isActive={isActive}

         />
    </header>
  )
}

export default Nav


