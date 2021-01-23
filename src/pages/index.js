import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

import style from "./index.module.css"

const NeuWrapper = styled.div`
  border-radius: 1rem;
  background: #ffffff;
  box-shadow: 1rem 1rem 3rem;
  padding: 1rem;
`
const PageHeader = styled.h1`
  text-align: center;
`
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Startseite"
        description="Eine Gatsby-Site, auf die man stolz sein kann"
        image="/logo.png"
        pathname="/"
        // Boolscher Wert, ob article:
        // article
      />
      <section className={style.wrapper}>
        <Img
          className={style.headerImage}
          fluid={data.headerImage.childImageSharp.fluid}
          alt="Robots"
        />
        <PageHeader className={style.heading}>
          Willkommen bei der Gatsby-Beispiel-Site
        </PageHeader>
        <NeuWrapper>
          <p>
            {" "}
            Dies ist die Site, die wir zusammen mit Gatsby erstellt haben.{" "}
          </p>
          <p>
            Obwohl sie nicht nach viel aussieht, enthält sie alle wichtigen
            Informationen, die Sie brauchen, um mit dem Aufbau Ihrer eigenen
            Websites mit Gatsby zu beginnen.
          </p>

          <p>
            Die Site kann mit reinem HTML wie diesem gefüllt und mit allen
            erweitert werden. Schauen Sie sich unbedingt die aktualisierten
            Vorlagen an, um zu sehen, wie die SEO-Komponente funktioniert. Sie
            können diese Site auch als Vorlage verwenden, um Ihre eigenen Sites
            mit Gatsby zu erstellen.
          </p>
        </NeuWrapper>
      </section>
    </Layout>
  )
}

export default IndexPage

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
