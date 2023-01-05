import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import { graphql } from "gatsby"
import Thumbnail from '../components/Thumbnail'


const Index = ({data}) => {
  
  const thumbnails = data.datoCmsHomepage.thumbnails;
  console.log('videos', thumbnails);
  return (
    <>
    <Hero />
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

export default Index

export const query = graphql`
query HomeQuery {
  datoCmsHomepage {
    homepageText
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
  

