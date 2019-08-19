import React, { Component } from "react";
import heroImg from "../about-us/assets/hero_img.svg";
import {
  H1,
  H2,
  H4,
  Button,
  Hero,
  GridFeature,
  MarketingSection,
  Layout,
  Icon,
  IconCommon,
  BottomCallout,
  Callout
} from "../../components";
import "./style.scss";


const ProductBox = ({ header, details, links, isCore = false, }) => {
  return (
    <div className="product-box">
      {isCore && (<IconCommon.Core/>)}
      <div className="heading">
        {header}
      </div>
      <div className="details">{details}</div>
      <div className="links">
        {links.map(l => {
          return (
            <span className="icon-link">
              <Icon className="icon" size={32} img={l.icon} ></Icon>
              <a className="link" href={l.link}>{l.text}</a>
            </span>
          )
        })}
      </div>
    </div>
  )
}

const featureGridData = [
  [
    {
      header: "Generate & Upload",
      isCore: true,
      details: "Products that allow your data submitters to generate genomic and clinical metadata and securely upload the corresponding files: ",
      links: [{ icon: "productScore", text: "Score", link: "/" }, { icon: "productSong", text: "Song", link: "/" }],
      ChildComponent: ProductBox,
    },
  ],
]



class ProductsPage extends Component {
  render() {
    return (
      <Layout>
        <main className="ProductsPage">
          {/* HERO */}
          <Hero
            title="Products"
            titleClass="hero-text"
            subtitle="Build your own genomics platform that allows your users to collaborate and share their scientific discoveries."
            fgImage="img_products"
            fgImageClass="img_hero_products"
          >
          </Hero>

          <div className="spacer" />

          {/* Grid sections */}
          <GridFeature iconSize={48} data={featureGridData} childComponent={ProductBox} />

          <BottomCallout>
            <Callout
              icon="githubYellow"
              description="Join us in building tools to catalog, share and visualize data, and take part in our important mission to democratize science!"
              className="center"
            >
              <Button
                type="primary"
                size="medium"
                externalLink="https://github.com/overture-stack"
                icon="githubWhite"
              >
                Get Started
              </Button>
            </Callout>
          </BottomCallout>
        </main>
      </Layout>
    );
  }
}

export default ProductsPage;
