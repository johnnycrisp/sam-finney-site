import React from "react"


const VideoFrame = ({ url, title }) => (
  <div className="vimeo__embed">
    <iframe className="resp_iframe"
    src={`https://player.vimeo.com/video/${url}`}
      title={title}
      allow="accelerometer; autoplay; encrypted-media; gyroscope;"
      frameBorder="0"
      position="absolute"
      top="0"
      left="0"
      mozallowfullscreen="true"
      allowFullScreen
      width="100%"
      height="100%"
    />
</div>
)
export default VideoFrame