import { Link, useStaticQuery } from 'gatsby';
import React, {useState} from 'react'

function DropdownNav({title}) {


 const [isOpen, setOpen] = useState(false)
 const [isActive, setActive] = useState('Work')

 const handleChange = () => {
    if(isOpen === false){
        setOpen(true);
    } else {
        setOpen(false);
    }
  }

  return (
    <nav>
        <button onClick={handleChange} className="nav__toggle">
            <span>{title ? title : 'Work'}</span><span>+</span>
        </button>
        <div className={isOpen ? "menu__open" : "nav__menu"}>
            <Link onClick={()=> setActive('Commercial')} to="/commercial">Commercial</Link>
            <Link to="/documentary">Documentary</Link>
            <Link to="/music-video">Music Video</Link>
            <Link to="/archive">Archive</Link>
            <Link to="/about">About</Link>
            <Link to="/">Home</Link>

        </div>
    </nav>
  );
}

export default DropdownNav;