import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import { graphql } from "gatsby"
import Thumbnail from '../components/Thumbnail'
import '../styles/main.scss'



const Index = ({data}) => {
  
  const thumbnails = data.datoCmsHomepage.thumbnails;
  console.log('Home videos', thumbnails);
  return (
    <>
    <Hero image={data.datoCmsHomepage.heroImage}/>
    <Layout homepageText={data.datoCmsHomepage.homepageText}>
      <div className="home__grid">
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
    </div>
    </Layout>
    </>
    
  )
}

export default Index

export const query = graphql`
query HomeQuery {
  datoCmsHomepage {
    homepageText
    heroImage {
      gatsbyImageData(placeholder: BLURRED)
    }
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
  

