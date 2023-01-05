import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react'

const Thumbnail = ({title, subtitle, timestamp, image, slug }) => {
  return (
    <div>
        <p>{timestamp}</p>
        <GatsbyImage alt={title} className="thumbnail" image={getImage(image)}/>
        <Link to={`/${slug}`}><h4>{title}</h4><p>{subtitle}</p></Link>
    </div>
  )
}

export default Thumbnail