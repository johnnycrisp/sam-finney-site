import React from "react"


const HeroVideo = ({ url, title }) => (
    <iframe className="resp_iframe"
    src={`https://player.vimeo.com/video/${url}?h=f5e830db58`}
      title={title}
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture;"
      allowfullscreen
      badge="0"
      autopause="0"
      player_id="0"
      app_id="58479"
      background="1"
    />
)
export default HeroVideo