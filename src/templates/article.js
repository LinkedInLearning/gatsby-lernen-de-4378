import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import _ from "lodash"

import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./article.module.css"

export default ({ data }) => {
  const article = data.markdownRemark
  return (
    <Layout>
      <SEO
        title={article.frontmatter.title}
        description={article.excerpt}
        image="/logo.png"
        pathname={article.fields.slug}
        // Boolescher Wert, ob Artikel
        article
      />
      <article className={style.article}>
        {article.frontmatter.featimg && (
          <figure className={style.featimg}>
            <Img
              fluid={article.frontmatter.featimg.childImageSharp.fluid}
              alt={article.frontmatter.title}
            />
          </figure>
        )}

        <h1 className={style.article__title}>{article.frontmatter.title}</h1>

        <div className={style.article__meta}>
          von {article.frontmatter.author}. Veröffentlicht am{" "}
          {new Date(article.frontmatter.date).toLocaleDateString("de-DE", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}{" "}
        </div>
        <div className={style.article__tax}>
          Themen:{" "}
          {article.frontmatter.subject.map((subject, index) => [
            index > 0 && ", ",
            <Link key={index} to={`/subjects/${_.kebabCase(subject)}`}>
              {subject}
            </Link>,
          ])}
        </div>
        <div
          className={style.article__content}
          dangerouslySetInnerHTML={{ __html: article.html }}
        />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      fields {
        slug
      }
      frontmatter {
        title
        date
        subject
        author
        featimg {
          childImageSharp {
            fluid(maxWidth: 1360) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
