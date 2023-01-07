import React, { useState } from 'react'
import '../styles/main.scss'
import DropdownNav from './DropdownNav'

const Nav = ({homepageText, title}) => {


  // const [isActive, setActive] = useState('Work')
  // const handleActiveChange = (val) => {
  //   return setActive(val);

  // }



  return (
    <header>
        <p className="nav__text">{homepageText}</p>
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


