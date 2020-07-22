import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"
import TopBar from "../components/top-bar"
import HeaderContent from "../components/header-content"

import Img from "gatsby-image"
import Button from "../components/through"
import IconHidingInput from "../components/through"
import Heading from "../components/through"


export default function Home() {
  const { logo, hero, site } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "example-logo.png" }) {
        childImageSharp {
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      },
      hero: file(relativePath: { eq: "example-hero.jpg" }) {
        childImageSharp {
          fixed(width: 1024) {
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
    <Layout
      stickyBar={
        <TopBar
          brand={<Img fixed={logo.childImageSharp.fixed}></Img>}
          navigations={site.siteMetadata.navigations.map((nav, i) => <Button key={i} theme="muted" basic>{nav.title}</Button>)}
          search={<IconHidingInput icon="search"></IconHidingInput>}
          signIn={<Button theme="secondary" basic size="small"></Button>}
          signUp={<Button theme="secondary" basic size="small"></Button>}
        ></TopBar>
      }
      header={
        <Header
          background={<Img fixed={hero.childImageSharp.fixed}></Img>}>
          <HeaderContent
            title={<Heading size="huge"></Heading>}
            subtitle={<Heading size="large"></Heading>}
            signUp={<Button theme="primary" basic></Button>}
            demo={<Button theme="primary" basic></Button>}>
          </HeaderContent>
        </Header>
      }>
      {Array(100).fill(0).map((x, i) => <br key={i}></br>)}
    </Layout>
  )
}
