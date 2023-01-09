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

  const videoId = heroVid.datoCmsHomepage.heroVimeoLink.url.slice(18)

  return (
    <div className="hero__wrapper">
        <div className="hero__image-wrapper">
        <iframe src="https://player.vimeo.com/video/699106617?h=e76fd53125&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;background=1&amp;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Short Reel 22"></iframe>
          {/* <HeroVideo url={videoId} title={'Sam'} />
           */}
          {/* <GatsbyImage className="hero-image" image={getImage(image)}/> */}
        </div>
        <h1>sam finney, cinematographer</h1>
    </div>
  )
}

export default Hero