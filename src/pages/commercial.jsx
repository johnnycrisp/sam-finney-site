import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import { graphql } from "gatsby"
import Thumbnail from '../components/Thumbnail'


const Commercial = ({data}) => {
  
  const thumbnails = data.datoCmsCommercial.thumbnails;
  console.log('videos', thumbnails);
  return (
    <>
    <Layout>
    {thumbnails.map((thumbnail)=> {
    return (
        <Thumbnail key={thumbnail.originalId}
        title={thumbnail.title}
        subtitle={thumbnail.subtitle}
        timestamp={thumbnail.videoTimestamp}
        image={thumbnail.thumbnailImage}
        slug={thumbnail.slug}
         />
    )
  })}
    </Layout>
    </>
    
  )
}

export default Commercial

export const query = graphql`
query CommQuery {
  datoCmsCommercial {
    thumbnails {
      originalId
      videoTimestamp
      title
      subtitle
      slug
      thumbnailImage {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
}
`
  

