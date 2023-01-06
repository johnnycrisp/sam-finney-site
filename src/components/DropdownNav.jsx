import { Link } from 'gatsby';
import React, {useState} from 'react'


function DropdownNav() {

 const [isOpen, setOpen] = useState(false)

 const handleChange = (e) => {
    if(isOpen === false){
        setOpen(true);
    } else {
        setOpen(false);
    }
  }

  return (
    <nav>
        <button onClick={handleChange} className="nav__toggle">
            <span>Work</span><span>+</span>
        </button>
        <div className={isOpen ? "menu__open" : "nav__menu"}>
            <Link to="/commercial">Commercial</Link>
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