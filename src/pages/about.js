import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./about.module.css"

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Infos über diese Site"
        description="Informationen über diese Site"
        image="/logo.png"
        pathname="/about"
        // Boolscher Wert, ob article:
        // article
      />
      <section className={style.wrapper}>
        <Img fluid={data.headerImage.childImageSharp.fluid} alt="Roboter" />
        <h1 className={style.heading}>Über diese Site</h1>

        <div>
          <figure className={style.image}>
            <Img
              fixed={data.robotImage.childImageSharp.fixed}
              alt="Eileen the Robot"
            />
          </figure>

          <p>
            Diese Site wurde mit Gatsby und Geduld erstellt. Gatsby zu lernen
            erfordert, sich die Zeit zu nehmen, um es vollständig zu verstehen,
            dabei sind die Prinzipien von React <em> und </em> von statischen
            Site-Generatoren wichtig.
          </p>

          <p>
            Diese Seite basierte ursprünglich auf der Indexseite, ist jetzt aber
            eigenständig. Auf Makroebene kombiniert Gatsby die besten Teile von
            Content-Management-Systemen (Vorlagen und Objektorientierung) mit
            den besten Teilen von React (Komponenten) sowie die besten Teile des
            alten Web (DWTs und statische Sites) zum Erstellen performanter
            zugänglicher und robuster Websites für heute und für die Zukunft.
          </p>
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
    robotImage: file(relativePath: { eq: "bubbles-disc.png" }) {
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
