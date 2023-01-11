import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import '../styles/main.scss'
import HeroVideo from './HeroVideo'

const Hero = ({image}) => {

  const heroVid = useStaticQuery(graphql`
  query HeroQuery {
    datoCmsHomepage {
      heroVimeoLink {
        url
      }
    }
  }
`)

  // const videoId = heroVid.datoCmsHomepage.heroVimeoLink.url.slice(18)

  return (
    <>
    <div className="mobile__hero">
      <GatsbyImage className="hero-image" image={getImage(image)} />
      <a href="#main">&darr;</a>
    </div>
    <div className="hero__wrapper">
        <div className="hero__image-wrapper">
        <iframe src="https://player.vimeo.com/video/737926902?h=f5e830db58&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;background=1&amp;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
           {/* <HeroVideo url={videoId} title="hero" /> */}
          {/* <GatsbyImage className="hero-image" image={getImage(image)}/> */}
        </div>
        <a href="#main">&darr;</a>
    </div>
    </>
  )
}

export default Hero