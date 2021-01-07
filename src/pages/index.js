import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import style from "./index.module.css"

const NeuWrapper = styled.div`
  border-radius: 1rem;
  background: #ffffff;
  box-shadow: 1rem 1rem 3rem;
  padding: 1rem;
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Startseite"
        description="SEO-Description anpassen"
        image="/logo.png"
        pathname="/"
        // Boolscher Wert, ob article:
        // article
      />
      <section className={style.wrapper}>
        <h1 className={style.heading}>Hier steht der Inhalt der Startseite.</h1>
        <NeuWrapper>
          <p>Diese Datei, index.js, ist die Startseite der Site.</p>
          <p>
            Hier kann HTML stehen, aber man kann auch alle verfügbaren Gatsby-
            und React-Komponenten einsetzen.
          </p>
        </NeuWrapper>
      </section>
    </Layout>
  )
}

export default IndexPage
