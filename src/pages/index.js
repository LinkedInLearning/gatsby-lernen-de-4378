import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Startseite"
        description="SEO-Description anpassen"
        image="/logo.png"
        pathname="/"
        // Boolescher Wert, ob article:
        // article
      />
      <section>
        <h1>Hier steht der Inhalt der Startseite.</h1>
        <div><p>Diese Datei, index.js, ist die Startseite der Site.</p>
        <p>Hier kann HTML stehen, aber man kann auch alle verfügbaren Gatsby- und React-Komponenten einsetzen.</p></div>
      </section>
    </Layout>
  )
}


export default IndexPage
