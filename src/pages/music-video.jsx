import React from 'react'
import Layout from '../components/Layout'
import { graphql } from "gatsby"
import Thumbnail from '../components/Thumbnail'


const Music = ({data}) => {
  
  const thumbnails = data.datoCmsMusicVideo.thumbnails;
  const title = data.datoCmsMusicVideo.pageTitle
  console.log('videos', thumbnails);
  return (
    <>
    <Layout 
    homepageText={data.datoCmsHomepage.homepageText}
    title={title}
    >
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

export default Music

export const query = graphql`
query MusicQuery {
  datoCmsMusicVideo {
    pageTitle
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
  datoCmsHomepage {
    homepageText
  }
}
`
  

