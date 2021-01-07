import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./events.module.css"

const EventsPage = () => {
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
        <h1 className={style.heading}>Events</h1>
        <div>
          <p>Bei uns gibt's jede Menge Events. Schauen Sie vorbei!</p>
        </div>
      </section>
    </Layout>
  )
}

export default EventsPage
