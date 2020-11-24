import React from "react"
import Hero from "../components/Hero"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Trips from "../components/Trips"
const IndexPage = () => (
  <Layout>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,700;1,600;1,700&display=swap" rel="stylesheet"></link>
    <SEO title="Home" />
    <Hero />
    <Trips/>
  </Layout>
)

export default IndexPage
