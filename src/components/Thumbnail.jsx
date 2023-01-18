import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react'
import HeroVideo from './HeroVideo';

const Thumbnail = ({title, subtitle, timestamp, image, slug }) => {


  const heroVid = useStaticQuery(graphql`
  query HeroQuery {
    datoCmsHomepage {
      heroVideoId
    }
  }
`)

  const videoId = heroVid.datoCmsHomepage.heroVideoId

  return (
    <div className="thumbnail__wrapper">
        <p>{timestamp}</p>
        <Link to={`/${slug}`}><GatsbyImage alt={title} className="thumbnail" image={getImage(image)}/></Link>
        {/* <iframe class="thumbnail" src={`https://player.vimeo.com/video/${videoId}&background=1&autoplay=0&title=0&byline=0&portrait=0`} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> */}
        {/* <HeroVideo url={videoId} title="hero"/> */}
        <Link className="thumbnail__link" to={`/${slug}`}><h4>{title}</h4><p>{subtitle}</p></Link>
    </div>
  )
}

export default Thumbnail