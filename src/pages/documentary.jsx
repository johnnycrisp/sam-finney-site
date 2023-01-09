import React from 'react'
import Layout from '../components/Layout'
import { graphql } from "gatsby"
import Thumbnail from '../components/Thumbnail'
import Seo from '../components/Seo'


const Documentary = ({data}) => {

  
  const thumbnails = data.datoCmsDocumentary.videoThumbnails
  const title = data.datoCmsDocumentary.pageTitle
  console.log('docdata', data);
  return (
    <>
    <Layout 
    title={title}
    >
    <Seo title="Documentary" />
    <div className="archive__grid">
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

export default Documentary

export const query = graphql`
query DocQuery {
  datoCmsDocumentary {
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
  }
}
`
  

