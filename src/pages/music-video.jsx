import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Thumbnail from "../components/Thumbnail";
import Seo from "../components/Seo";

const Music = ({ data }) => {
  const thumbnails = data.datoCmsMusicVideo.videoThumbnails;
  const title = data.datoCmsMusicVideo.pageTitle;
  console.log("videos", thumbnails);
  return (
    <>
      <Layout title={title}>
        <Seo title="Music Video" />
        <div className="archive__grid">
          {thumbnails.map((thumbnail) => {
            const vid = thumbnail.linkToVideo;
            return (
              <Thumbnail
                key={vid.originalId}
                title={vid.title}
                subtitle={vid.subtitle}
                timestamp={vid.videoTimestamp}
                image={vid.thumbnailImage}
                slug={thumbnail.linkToVideo.slug}
              />
            );
          })}
        </div>
      </Layout>
    </>
  );
};

export default Music;

export const query = graphql`
  query MusicQuery {
    datoCmsMusicVideo {
      pageTitle
      videoThumbnails {
        linkToVideo {
          slug
          originalId
          title
          subtitle
          videoTimestamp
          thumbnailImage {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
