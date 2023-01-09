import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react'
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const about = ({data}) => {

  const about = data.about
  const image = about.aboutImage
  console.log('about', about)

  return (
    <Layout 
    title={about.pageTitle}
    >
    <Seo title="About" />
    <div className="about__wrapper">
      <div className="about__text" dangerouslySetInnerHTML={{__html: about.aboutText}}>
      </div>
      <GatsbyImage alt='image of sam finney, cinematographer' className="about__image" image={getImage(image)}/>
    </div>
    
      
    </Layout>
  )
}

export default about

export const query = graphql`
query AboutQuery {
  about: datoCmsAbout {
    originalId
    pageTitle
    aboutText
    aboutImage {
      gatsbyImageData(placeholder: BLURRED)
    }
  }
}
`