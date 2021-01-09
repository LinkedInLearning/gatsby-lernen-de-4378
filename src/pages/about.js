import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RobotImage from "../components/robotimage"
import style from "./events.module.css"

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Infos über diese Site"
        description="Informationen über diese Site"
        image="/logo.png"
        pathname="/"
        // Boolscher Wert, ob article:
        // article
      />
      <section className={style.wrapper}>
        <Img fluid={data.headerImage.childImageSharp.fluid} alt="Roboter" />
        <h1 className={style.heading}>Über diese Site</h1>
        <RobotImage
          src={"/images/bubbles-callout.png"}
          alt={"Bubbles, der Roboter"}
        />
        <RobotImage src={"/images/dolly-callout.png"} alt={"Roboter Dolly"} />
        <RobotImage src={"/images/eileen-callout.png"} alt={"Roboter Eileen"} />
        <div>
          <p>Ein erster Absatz in der neu erstellten Seite</p>
          <p>Diese Seite basiert auf index.js.</p>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  {
    headerImage: file(
      relativePath: { eq: "robots-androids-and-cyborgs-oh-my-1184x360.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1184) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
