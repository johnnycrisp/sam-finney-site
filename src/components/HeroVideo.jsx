import React from "react"


const HeroVideo = ({ url, title }) => (
  <div className="hero__embed">
    <iframe className="resp_iframe"
    src={`https://player.vimeo.com/video/${url}`}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; fullscreen; encrypted-media; gyroscope;"
      allowfullscreen="true"
      position="absolute"
      playsinline="true"
      autoplay="true"
      loop="true"
      controls="false"
      muted="true"
      background="true"
      top="0"
      left="0"
      width="100%"
      height="100%"
    />
</div>
)
export default HeroVideo