import React from "react"


const HeroVideo = ({ url, title }) => (
    <iframe className="resp_iframe"
    src={`https://player.vimeo.com/video/${url}?h=f5e830db58`}
      title={title}
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture;"
      allowfullscreen
      badge="0"
      // height="400"
      // width="800"
      autopause="0"
      play="1"
      player_id="0"
      app_id="58479"
      background="1"
    />
)
export default HeroVideo