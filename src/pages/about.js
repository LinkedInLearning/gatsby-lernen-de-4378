import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
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
      <section>
        <h1>Über diese Site</h1>
        <figure>
          <img
            src="/images/bubbles-callout.png"
            width="480"
            height="440"
            alt="Bubbles der Roboter"
          />
        </figure>
        <div><p>Ein erster Absatz in der neu erstellten Seite</p>
        <p>Diese Seite basiert auf index.js.</p></div>
      </section>
    </Layout>
  )
}


export default AboutPage