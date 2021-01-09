import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./events.module.css"
import { graphql } from "gatsby"

import Img from "gatsby-image"

const EventsPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Events"
        description="Kommen Sie zu unseren Events!"
        image="/logo.png"
        pathname="/"
        // Boolscher Wert, ob article:
        // article
      />
      <section className={style.wrapper}>
        <Img fluid={data.headerImage.childImageSharp.fluid} alt="Roboter" />
        <h1 className={style.heading}>Events</h1>
        <div>
          <Img fixed={data.bodyImage.childImageSharp.fixed} alt="Bubbles" />
          <p>Bei uns gibt's jede Menge Events. Schauen Sie vorbei!</p>
        </div>
      </section>
    </Layout>
  )
}

export default EventsPage

export const query = graphql`
  {
    headerImage: file(
      relativePath: { eq: "getting-creative-with-3-d-printers-1184x360.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1184) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bodyImage: file(relativePath: { eq: "bubbles-disc.png" }) {
      childImageSharp {
        fixed(width: 288, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
