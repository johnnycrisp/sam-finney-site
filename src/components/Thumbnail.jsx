import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react'

const Thumbnail = ({title, subtitle, timestamp, image, slug }) => {
  return (
    <div className="thumbnail__wrapper">
        <p>{timestamp}</p>
        <GatsbyImage alt={title} className="thumbnail" image={getImage(image)}/>
        <Link to={`/${slug}`}><h4><strong>{title}</strong></h4><p>{subtitle}</p></Link>
    </div>
  )
}

export default Thumbnail