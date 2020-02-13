import React from "react"
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => (
  <>
    <h1>Hello {data.site.siteMetadata.title}!</h1>
    <p>{data.site.siteMetadata.description} by {data.site.siteMetadata.author}</p>
  </>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
