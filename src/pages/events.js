import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Event from "../components/event"
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
        pathname="/events"
        // Boolscher Wert, ob article:
        // article
      />
      <section className={style.wrapper}>
        <Img fluid={data.headerImage.childImageSharp.fluid} alt="Roboter" />
        <h1 className={style.heading}>Events</h1>
        <div>
          <p>Bei uns gibt's jede Menge Events. Schauen Sie vorbei!</p>
        </div>
      </section>
      <section className={style.events}>
        <div className={style.eventList}>
          <h2 className={style.eventHeading}>Kommende Events</h2>
          <ul className={style.events__list}>
            {data.futureEvents.nodes.map(event => (
              <Event key={event.id} event={event} />
            ))}
          </ul>
        </div>
        <div className={style.eventList}>
          <h2 className={style.eventHeading}>Abgeschlossene Events</h2>
          <ul className={style.events__list}>
            {data.pastEvents.nodes.map(event => (
              <Event key={event.id} event={event} />
            ))}
          </ul>
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
    futureEvents: allEvent(
      filter: { collection: { eq: "future" } }
      sort: { fields: startDate, order: ASC }
    ) {
      nodes {
        id
        name
        startDate
        endDate
        location
        url
      }
    }
    pastEvents: allEvent(
      filter: { collection: { eq: "past" } }
      sort: { fields: startDate, order: ASC }
    ) {
      nodes {
        id
        name
        startDate
        endDate
        location
        url
      }
    }
  }
`
