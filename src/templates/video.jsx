import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/Layout';
import VideoFrame from '../components/VideoFrame';

const Video = ({data, pageContext}) => {
  const video = data.video
  const videoId = video.vimeoLink.url.slice(18)
  console.log(video)
  return (
    <Layout>
      <div>{video.title}</div>
      <div dangerouslySetInnerHTML={{__html: video.videoDetails}}></div>
      <VideoFrame title={video.title} url={videoId} />
      {video.videoStills.map((still) => {
        return (<GatsbyImage key={still.originalId} alt={`Still from ${video.title}`} className="thumbnail" image={getImage(still)}/>)
      })}
      
    </Layout>
    
  )
}

export default Video


export const query = graphql`
query VideoTitleQuery($videoId: String) {
  video: datoCmsVideo(originalId: {eq: $videoId}) {
    originalId
    title
    slug
    videoDetails
    videoStills {
      gatsbyImageData(placeholder: BLURRED)
    }
    vimeoLink {
      url
    }
  }
}`
  