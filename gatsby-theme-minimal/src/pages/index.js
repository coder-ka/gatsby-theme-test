import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import SimpleLayout from "../components/simple-layout";

export default function Home() {
  const { logo, site } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      },
      site {
        siteMetadata {
          navigations {
            title
            href
          }
        }
      }
    }
  `)

  return (
    <SimpleLayout>
      
    </SimpleLayout>
  )
}
