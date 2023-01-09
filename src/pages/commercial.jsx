import React from 'react'
import Layout from '../components/Layout'
import { graphql } from "gatsby"
import Thumbnail from '../components/Thumbnail'
import Seo from '../components/Seo'


const Commercial = ({data}) => {
  
  const thumbnails = data.datoCmsCommercial.videoThumbnails
  const title = data.datoCmsCommercial.pageTitle
  console.log('videos', thumbnails);
  return (
    <>
    <Layout 
    title={title}
    >
    <Seo title="Commercial" />
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

export default Commercial

export const query = graphql`
query CommQuery {
  datoCmsCommercial {
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
  

