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
    title={title}
    >
    <Seo title="Archive" />
    <div className="archive__grid">
      {videos.map((video)=> {
    return (
        <Thumbnail key={video.originalId}
        title={video.title}
        subtitle={video.subtitle}
        timestamp={video.videoTimestamp}
        image={video.thumbnailImage}
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
        videoTimestamp
        title
        subtitle
        thumbnailImage {
          gatsbyImageData(placeholder: BLURRED)
        }
   }
 }
}`
