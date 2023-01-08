import React from 'react'
import Layout from '../components/Layout'
import { graphql } from "gatsby"
import Thumbnail from '../components/Thumbnail'
import Seo from '../components/Seo'


const Commercial = ({data}) => {
  
  const thumbnails = data.datoCmsCommercial.thumbnails;
  const title = data.datoCmsCommercial.pageTitle
  console.log('videos', thumbnails);
  return (
    <>
    <Layout 
    homepageText={data.datoCmsHomepage.homepageText}
    title={title}
    >
    <Seo title="Commercial" />
    <div className="archive__grid">
      {thumbnails.map((thumbnail)=> {
    return (
        <Thumbnail key={thumbnail.originalId}
        title={thumbnail.title}
        subtitle={thumbnail.subtitle}
        timestamp={thumbnail.videoTimestamp}
        image={thumbnail.thumbnailImage}
        slug={thumbnail.linkToVideo.slug}
         />
    )
  })}
    </div>
    </Layout>
    </>
    
  )
}

export default Commercial

export const query = graphql`
query CommQuery {
  datoCmsCommercial {
    pageTitle
    thumbnails {
      originalId
      videoTimestamp
      title
      subtitle
      linkToVideo {
        slug
      }
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
  

