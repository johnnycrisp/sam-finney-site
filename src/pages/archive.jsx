import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Thumbnail from '../components/Thumbnail'

const archive = ({data}) => {

  const videos = data.videos.nodes;
  const title = 'Archive'
  console.log('vids', videos)

  return (
    <Layout 
    // homepageText={data.datoCmsHomepage.homepageText}
    title={title}
    >
    <Seo title="Archive" />
    <div className="archive__grid">
      {videos.map((video)=> {
    return (
        <Thumbnail key={video.originalId}
        title={video.thumbnail[0].title}
        subtitle={video.thumbnail[0].subtitle}
        timestamp={video.thumbnail[0].videoTimestamp}
        image={video.thumbnail[0].thumbnailImage}
        slug={video.slug}
         />
    )
  })}
    </div>
    </Layout>
  )
}

export default archive

export const query = graphql`
query ArchiveQuery {
  videos: allDatoCmsVideo {
   nodes {
     originalId
     thumbnail {
        videoTimestamp
        title
        subtitle
        thumbnailImage {
          gatsbyImageData(placeholder: BLURRED)
        }
     }
   }
 }
}`
