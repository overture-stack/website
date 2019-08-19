import React, { Component } from "react";
import heroImg from "../about-us/assets/hero_img.svg";
import { Link } from "gatsby";
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

const ProductBox = ({
  header,
  headerColor,
  containerClass = "is-6",
  bgColor = "#fff",
  details,
  links,
  isCore = false,
  iconSize = 32
}) => {
  return (
    <div className={`product-box column ${containerClass}`} style={{backgroundColor: bgColor}}>
      {isCore && <IconCommon.Core />}
      <div className="heading" style={{ color: headerColor }}>
        {header}
      </div>
      <div className="details">{details}</div>
      <div className="links">
        {links.map(l => {
          return (
            <span className="icon-link">
              <Link className="link" to={`/products/${l.link}`}>
                <Icon
                  className="icon"
                  size={l.iconSize ? l.iconSize : iconSize}
                  img={l.icon}
                ></Icon>
                {l.text}
              </Link>
            </span>
          );
        })}
      </div>
    </div>
  );
};

const featureGridData = [
  [
    {
      header: "Generate & Upload",
      headerColor: "#D087B4",
      bgColor: "#F2F3F5",
      isCore: true,
      details:
        "Products that allow your data submitters to generate genomic and clinical metadata and securely upload the corresponding files: ",
      links: [
        { icon: "productScore", text: "Score", link: "score" },
        { icon: "productSong", text: "Song", link: "song" }
      ],
      ChildComponent: ProductBox
    },

    {
      header: "Access & Download",
      headerColor: "#6AC3E8",
      bgColor: "#F2F3F5",
      isCore: true,
      details:
        "Products that give your users the correct permissions to view and download controlled data: ",
      links: [
        { icon: "productEgo", text: "Ego", link: "ego", iconSize: 24 },
        {
          icon: "productMaestro",
          text: "Maestro",
          link: "maestro",
          iconSize: 40
        },
        { icon: "productArranger", text: "Arranger", link: "arranger" }
      ],
      ChildComponent: ProductBox
    }
  ],
  [
    {
      header: "Analyze & Discover",
      headerColor: "#C86370",
      details:
        "Products that allow your users to access interactive visualizations and code-based analysis environments: ",
      links: [
        { icon: "productJukebox", text: "Jukebox", link: "jukebox" },
        { icon: "productOnco", text: "OncoJS", link: "oncojs" }
      ],
      ChildComponent: ProductBox
    },

    {
      header: "Collaborate & Share",
      headerColor: "#47D9BF",
      details:
        "Products that allow your users to set up a profile and share urls in order to  raise awareness across the scientific community: ",
      links: [
        { icon: "productPersona", text: "Persona", link: "persona" },
        { icon: "productRiff", text: "Riff", link: "riff" }
      ],
      ChildComponent: ProductBox
    }
  ],

  [
    {
      header: "Track & Manage",
      headerColor: "#ECC000",
      containerClass: "is-6 is-offset-3",
      details:
        "Products that help you track and manage projects, users, billing and resource usage for an OpenStack cloud environment: ",
      links: [
        { icon: "productBilling", text: "Billing & Usage", link: "" }, // TODO: need real links here.
        { icon: "productEnrolment", text: "Enrolment", link: "" }      // TODO: needs a real link here.
      ],
      ChildComponent: ProductBox
    }
  ]
];

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
          ></Hero>

          <div className="spacer" />

          {/* Grid sections */}
          <GridFeature
            iconSize={48}
            data={featureGridData}
            childComponent={ProductBox}
          />

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
