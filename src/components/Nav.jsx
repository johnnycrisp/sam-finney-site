import { Link } from 'gatsby'
import React from 'react'

const Nav = () => {
  return (
    <header>
        <p>Sam Finney is a cinematographer based in London.</p>
        <div>
            <ul>
                <li>Contact</li>
                <li>Vimeo</li>
                <li>Instagram</li>
            </ul>
        </div>
        <div className="dropdown">
            <select name="genres" id="genre-select">
                <option value="commercial">Work</option>
                <option value="commercial">Commercial</option>
                <option value="narrative">Documentary</option>
                <option value="music">Music Video</option>
                <option value="other">Archive</option>
                <option value="other">About</option>
            </select>
        </div>
    </header>
  )
}

export default Nav