import React from "react"


const VideoFrame = ({ url, title }) => (

    <iframe
    src={`https://player.vimeo.com/video/${url}`}
      title={title}
      allow="accelerometer; autoplay; encrypted-media; gyroscope;"
      frameBorder="0"
      height="600"
      width="100%"
    />

)
export default VideoFrame