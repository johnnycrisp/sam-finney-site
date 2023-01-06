import { Link } from 'gatsby'
import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import '../styles/main.scss'
import DropdownNav from './DropdownNav'

const Nav = ({homepageText}) => {
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
        <DropdownNav />
    </header>
  )
}

export default Nav


