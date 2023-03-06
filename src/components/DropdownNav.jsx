import { Link, useStaticQuery } from "gatsby";
import React, { useState } from "react";

function DropdownNav({ title }) {
  const [isOpen, setOpen] = useState(false);
  const [isActive, setActive] = useState("Work");

  const handleChange = () => {
    if (isOpen === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <nav>
      <button onClick={handleChange} className="nav__toggle">
        <span>{title ? title : "Work"}</span>
        <span>+</span>
      </button>
      <div className={isOpen ? "menu__open" : "nav__menu"}>
        <Link to="/">Home</Link>
        <Link onClick={() => setActive("Commercial")} to="/commercial">
          Commercial & Promo
        </Link>
        <Link to="/documentary">Narrative & Documentary</Link>
        <Link to="/archive">Archive</Link>
        <Link to="/about">About & Content</Link>
      </div>
    </nav>
  );
}

export default DropdownNav;
