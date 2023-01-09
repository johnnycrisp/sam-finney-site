import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import { graphql } from "gatsby"
import Thumbnail from '../components/Thumbnail'
import '../styles/main.scss'
import Seo from '../components/Seo'



const Index = ({data}) => {
  
  const thumbnails = data.datoCmsHomepage.videoThumbnails
  const title = data.datoCmsHomepage.pageTitle
  console.log('Home videos', thumbnails);
  return (
    <>
    <Seo title="Home" />
    <Hero image={data.datoCmsHomepage.heroImage}/>
    <Layout 
    title={title}
    >
      <div className="home__grid">
        {thumbnails.map((thumbnail)=> {
          const vid = thumbnail.linkToVideo
        return (
            <Thumbnail key={vid.originalId}
            title={vid.title}
            subtitle={vid.subtitle}
            timestamp={vid.videoTimestamp}
            image={vid.thumbnailImage}
            slug={thumbnail.linkToVideo.slug}
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
    heroVimeoLink {
      url
    }
    pageTitle
    videoThumbnails {
      linkToVideo {
          slug
          originalId
          title
          subtitle
          videoTimestamp
          thumbnailImage {
            gatsbyImageData(placeholder: BLURRED)
          }
      }
    }
    heroImage {
      gatsbyImageData(placeholder: BLURRED)
    }
  }
}
`
  

