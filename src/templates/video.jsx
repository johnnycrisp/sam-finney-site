import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

const VideoPage = ({data, pageContext}) => {
  const video = data.video;
  console.log(video)
  return (
    <>
      <div>{video.title}</div>
      {video.videoStills.map((still) => {
        return (<GatsbyImage alt={`Still from ${video.title}`} className="thumbnail" image={getImage(still)}/>)
      })}
      
    </>
    
  )
}

export default VideoPage


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
  