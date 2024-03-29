import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import _ from "lodash"

import style from "./articles.module.css"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Pagination from "../components/pagination"

// Component to place a conditional wrapper around content.
const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children

const ArticleIndex = ({ data, pageContext, location }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location}>
      <SEO
        title="Artikel"
        description="Alle Artikel"
        image="/logo.png"
        pathname="/articles"
        // Boolean indicating whether this is an article:
        // article
      />
      <section className={style.articlelist}>
        <h2>Artikel</h2>
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
                  von {node.frontmatter.author}. Veröffentlicht am{" "}
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
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
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
