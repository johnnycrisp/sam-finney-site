import { graphql, Link, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import "../styles/main.scss";
import DropdownNav from "./DropdownNav";

const Nav = ({ title }) => {
  const header = useStaticQuery(graphql`
    query HeaderQuery {
      datoCmsHomepage {
        homepageText
      }
    }
  `);

  const homeText = header.datoCmsHomepage.homepageText;

  return (
    <header>
      <p className="nav__text">
        <Link className="home_link" to="/">
          Sam Finney
        </Link>{" "}
        {homeText}
      </p>
      <div className="nav__socials">
        <ul>
          <li>
            <a
              href="mailto:hello@sam-finney.com"
              target="_blank"
              rel="noreferrer"
            >
              Email
            </a>
          </li>
          <li>
            <a
              href="https://vimeo.com/samfinney"
              target="_blank"
              rel="noreferrer"
            >
              Vimeo
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/srafinney/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
      <DropdownNav
        title={title}

        // handleActiveChange={handleActiveChange}
        // isActive={isActive}
      />
    </header>
  );
};

export default Nav;
