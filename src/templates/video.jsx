import { graphql, Link } from 'gatsby'
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
      <div>{video.title}</div>
      <VideoFrame title={video.title} url={videoId} />
      <div dangerouslySetInnerHTML={{__html: video.videoDetails}}></div>
      <div className="video__stills">
        {video.videoStills.map((still) => {
        return (
          <GatsbyImage  key={still.originalId} alt={`Still from ${video.title}`} className="thumbnail" image={getImage(still)}/>
         )
      })}
      </div>
      <Link className="back-link" to="/">&larr; Back</Link>
      
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
  