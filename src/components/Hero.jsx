import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import '../styles/main.scss'
import HeroVideo from './HeroVideo'

const Hero = ({image}) => {

  const heroVid = useStaticQuery(graphql`
  query HeroQuery {
    datoCmsHomepage {
      heroVideoId
    }
  }
`)

console.log('a', heroVid);

  const videoId = heroVid.datoCmsHomepage.heroVideoId

  return (
    <>
    <div className="mobile__hero">
      <GatsbyImage className="hero-image" image={getImage(image)} />
      <a href="#main">&darr;</a>
    </div>
    <div className="hero__wrapper">
        <div className="hero__image-wrapper">
        <iframe src={`https://player.vimeo.com/video/${videoId}&background=1&autoplay=1&title=0&byline=0&portrait=0`} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
           {/* <HeroVideo url={videoId} title="hero" /> */}
          {/* <GatsbyImage className="hero-image" image={getImage(image)}/> */}
        </div>
        <a href="#main">&darr;</a>
    </div>
    </>
  )
}

export default Hero