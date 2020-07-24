import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import SimpleLayout from "../components/simple-layout";

export default function Home() {
  const { logoWithAppName, appImage, site } = useStaticQuery(graphql`
    query {
      logoWithAppName: file(relativePath: { eq: "logo-with-app-name.png" }) {
        childImageSharp {
          fixed(height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      },
      appImage: file(relativePath: {eq: "app-image.png"}) {
        childImageSharp {
          fluid(maxWidth: 980) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      site {
        siteMetadata {
          title
          subTitle
        }
      }
    }
  `)

  return (
    <SimpleLayout
      logoWithAppName={<Img fixed={logoWithAppName.childImageSharp.fixed}></Img>}
      title={<h1 className="text-white text-4xl font-bold">{site.siteMetadata.title}</h1>}
      subTitle={<h2 className="text-white text-xl">{site.siteMetadata.subTitle}</h2>}
      emailInput={<input className="px-4 py-3 rounded" placeholder="Input your email."></input>}
      submitButton={<button className="px-6 py-3 rounded bg-black text-white font-bold">Register</button>}
      appImage={<Img fluid={appImage.childImageSharp.fluid}></Img>}
    >
    </SimpleLayout>
  )
}
