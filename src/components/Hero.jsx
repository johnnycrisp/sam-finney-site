import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useRef } from "react";
import "../styles/main.scss";
import HeroVideo from "./HeroVideo";
import gsap from "gsap";

import arrow from "../images/arrow_down.png";
import { useEffect } from "react";

const Hero = ({ image }) => {
  const heroVid = useStaticQuery(graphql`
    query HeroQuery {
      datoCmsHomepage {
        heroVideoId
      }
    }
  `);

  const arrowRef = useRef();
  const tl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 0.5 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.to(".arrow", { y: "5" });
      tl.to(".arrow", { y: "-20" });
      tl.to(".arrow", { y: "5" });
      tl.to(".arrow", { y: "-20" });
      tl.to(".arrow", { rotate: "360" });
    }, arrowRef);
    return () => ctx.revert();
  }, []);

  console.log("a", heroVid);

  const videoId = heroVid.datoCmsHomepage.heroVideoId;

  return (
    <>
      {/* <div className="mobile__hero">
      <GatsbyImage className="hero-image" image={getImage(image)} />
      <a href="#main">&darr;</a>
    </div> */}
      <div className="hero__wrapper">
        <div className="hero__image-wrapper">
          <iframe
            src={`https://player.vimeo.com/video/${videoId}&background=1&autoplay=1&title=0&byline=0&portrait=0`}
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
          {/* <HeroVideo url={videoId} title="hero" /> */}
          {/* <GatsbyImage className="hero-image" image={getImage(image)}/> */}
        </div>
        <a ref={arrowRef} href="#main">
          <img className="arrow" src={arrow} alt="arrow" />
        </a>
      </div>
    </>
  );
};

export default Hero;
