import React from 'react'
import Layout from '../components/Layout'
import { graphql, useStaticQuery } from "gatsby"
import Thumbnail from '../components/Thumbnail'
import Seo from '../components/Seo'


const Documentary = ({data}) => {

  
  const thumbnails = data.datoCmsDocumentary.thumbnails;
  const title = data.datoCmsDocumentary.pageTitle
  console.log('docdata', data);
  return (
    <>
    <Layout 
    homepageText={data.datoCmsHomepage.homepageText}
    title={title}
    >
    <Seo title="Documentary" />
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

export default Documentary

export const query = graphql`
query DocQuery {
  datoCmsDocumentary {
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
  } datoCmsHomepage {
    homepageText
  }
}
`
  

