import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RobotImage from "../components/robotimage"

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
