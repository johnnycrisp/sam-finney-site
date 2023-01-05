import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import '../styles/main.scss'

const Hero = ({image}) => {
  return (
    <div className="hero__wrapper">
        <div clasName="hero__image-wrapper">
          <GatsbyImage className="hero-image" image={getImage(image)}/>
        </div>
        <h1>sam finney, cinematographer</h1>
    </div>
  )
}

export default Hero