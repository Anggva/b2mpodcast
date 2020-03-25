import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Beaches To Mountains Podcast"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `podcast`, `hiking`, `outdoors`]}
        />
        <img style={{ margin: 0 }} src="./b2m_logo.jpg" alt="Beaches to Mountains Podcast Logo" />
        <p>
        Beaches to Mountains is a podcast about hiking in Southeast US in general and Florida in particular. 
        </p>
        <p>
        We are three women from Jacksonville, FL, and hiking has been our passion for a long time. On the podcast, we share tales from the trails, tips, and useful info about hiking.
        </p>
      </Layout>
    )
  }
}

export default IndexPage
