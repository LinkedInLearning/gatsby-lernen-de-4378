import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import _ from "lodash"

import style from "./articles.module.css"
import Layout from "../components/layout"
import Pagination from "../components/pagination"
import SEO from "../components/seo"

// Component to place a conditional wrapper around content.
const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children

const ArticleIndex = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges
  const { subject } = pageContext
  console.log(pageContext)

  let pageHeader = `Articles`
  if (subject) {
    pageHeader = `Thema ${subject}:`
  }

  return (
    <Layout>
      <SEO
        title={`Alle Artikel über "${subject}"`}
        description="Alle Artikel zu diesem Thema."
        image="/logo.png"
        pathname={`/subjects/${subject}`}
        // Boolescher Wert, ob ARtikel:
        // article
      />
      <section className={style.articlelist}>
        <h2>{pageHeader}</h2>
        <ul>
          {posts.map(({ node }, index) => (
            <li key={index} className={style.listitem}>
              {node.frontmatter.featimg && (
                <figure className={style.featimg}>
                  <Link to={node.fields.slug}>
                    <Img
                      fixed={node.frontmatter.featimg.childImageSharp.fixed}
                      alt={node.frontmatter.title}
                    />
                  </Link>
                </figure>
              )}
              <ConditionalWrapper
                // If featured image, wrap content in <div>.
                condition={node.frontmatter.featimg}
                wrapper={children => (
                  <div className={style.article__wrap}>{children}</div>
                )}
              >
                <Link to={node.fields.slug}>
                  <h1 className={style.article__title}>
                    {node.frontmatter.title}
                  </h1>
                </Link>

                <div className={style.article__meta}>
                  by {node.frontmatter.author}. Published{" "}
                  {new Date(node.frontmatter.date).toLocaleDateString("de-DE", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}{" "}
                </div>
                <div className={style.article__tax}>
                  Themen:{" "}
                  {node.frontmatter.subject.map((subject, index) => [
                    index > 0 && ", ",
                    <Link key={index} to={`/subjects/${_.kebabCase(subject)}`}>
                      {subject}
                    </Link>,
                  ])}
                </div>
                <div
                  className={style.article__content}
                  dangerouslySetInnerHTML={{ __html: node.excerpt }}
                />
              </ConditionalWrapper>
            </li>
          ))}
        </ul>
      </section>
      <Pagination pageContext={pageContext} />
    </Layout>
  )
}

export default ArticleIndex

export const query = graphql`
  query($subject: String!, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { subject: { in: [$subject] } } }
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          excerpt
          id
          frontmatter {
            title
            date
            subject
            author
            featimg {
              childImageSharp {
                fixed(width: 400, height: 400, cropFocus: ATTENTION) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
