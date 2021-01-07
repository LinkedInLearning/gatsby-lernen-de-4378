import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import style from "./index.module.css"

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
        <div>
          <p>Diese Datei, index.js, ist die Startseite der Site.</p>
          <p>
            Hier kann HTML stehen, aber man kann auch alle verfügbaren Gatsby-
            und React-Komponenten einsetzen.
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
