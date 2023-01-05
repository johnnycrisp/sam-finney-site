import { Link } from 'gatsby'
import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import '../styles/main.scss'

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
    <DropdownButton id="dropdown-button" title="Work +">
      <Dropdown.Item><Link to="/commercial" rel="noreferrer">Commercial</Link></Dropdown.Item>
      <Dropdown.Item><Link to="/music-video" rel="noreferrer">Music Video</Link></Dropdown.Item>
      <Dropdown.Item><Link to="/documentary" rel="noreferrer">Documentary</Link></Dropdown.Item>
      <Dropdown.Item><Link to="/archive" rel="noreferrer">Archive</Link></Dropdown.Item>
      <Dropdown.Item><Link to="/about" rel="noreferrer">About</Link></Dropdown.Item>
    </DropdownButton>
        {/* <nav className="dropdown">
            <ul>
                <li><Link to="/" rel="noreferrer">Work</Link></li>
                <li><Link to="/commercial" rel="noreferrer">Commercial</Link></li>
                <li><Link to="/documentary" rel="noreferrer">Documentary</Link></li>
                <li><Link to="/music-video" rel="noreferrer">Music Video</Link></li>
                <li><Link to="/archive" rel="noreferrer">Archive</Link></li>
                <li><Link to="/about" rel="noreferrer">About</Link></li>
            </ul>
        </nav> */}
    </header>
  )
}

export default Nav


