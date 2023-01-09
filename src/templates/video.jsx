import { graphql, Link, navigate } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import VideoFrame from '../components/VideoFrame';

const Video = ({data, pageContext}) => {
  const video = data.video
  const videoId = video.vimeoLink.url.slice(18)
  console.log(video)

  return (
    <Layout>
      <Seo title={video.title} />
      <div className="video__page-wrapper">
        <h2 className="mobile__video-title">{video.title}</h2>
        <div className="details__wrapper">
          <div className="desktop__video-details" dangerouslySetInnerHTML={{__html: video.videoDetails}}></div>
        </div>
        
        <div className="video__page-content">
          <VideoFrame className="video__page-video" title={video.title} url={videoId} />
          <div className="mobile__video-details" dangerouslySetInnerHTML={{__html: video.videoDetails}}></div>
        <div className="video__stills">
            {video.videoStills.map((still) => {
            return (
              <GatsbyImage  key={still.originalId} alt={`Still from ${video.title}`} className="thumbnail" image={getImage(still)}/>
            )
          })}
          <div onClick={()=> navigate(-1)} className="back-link">&larr; Back</div>
        </div>
        </div>
        
        
      </div>
      
      
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
  