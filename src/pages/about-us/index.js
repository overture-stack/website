import React, { Component } from "react";
import heroImg from "./assets/hero_img.svg";
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
  BottomCallout,
  Callout
} from "../../components";
import "./styles.scss";


const featureGridData = [
	[
		{
			header: "Genome informatics first.",
			details: "You can use our solutions for anything, but here at Overture we focus on <strong>Genome Informatics</strong>. With rapidly expanding datasets at the heart, we've built our bioinformatics bundle to track, transfer, and secure genomic data in distributed cloud environments.",
			icon: "dna"
		},
		{
			header: "Swappable.",
			details: "There is no such thing as perfection. Our tools are implemented to be interchangeable from the get-go. You can pick-and-choose from our software stack and simply use the components that best match your use case.",
			icon: "palette"
		},
	],
	[
		{
			header: "An open world.",
			details: "We are strong believers in open-source software, open science, and open communication. Don’t hesitate to follow our team activities on <a href='https://waffle.io/overture-stack/roadmap'> GitHub </a> by taking a look at upcoming or in-progress tickets, or even be the first to test out a feature detailed in a Pull Request.",
			icon: "lockCode"
		},
		{
			header: "Closing the loop.",
			details: "Our team has established a strong foundation in building software solutions for genomic projects, from data generation and submission all the way to data dissemination and analysis, leading to a deep understanding of the genomic data lifecycle. The Overture stack contains a wide array of components for cloud infrastructure, data shepherding, and analysis.",
			icon: "graphCycle"
		},
	],
]

class AboutUsPage extends Component {
  render() {
    return (
      <Layout>
        <main className="AboutUsPage">
          {/* HERO */}
          <Hero
            title="About Us"
            subtitle="Our vision is to help research, healthcare, and patient communities collaborate and advance genomic research by providing cutting-edge open source software solutions."
            fgImage="img_our_vision"
          >
            <div className="flex py2">
              <a className="hero-link" target="_blank" href="https://softeng.oicr.on.ca/team/">
                Meet the team
                <Icon size={16} img="arrowRightMagenta" />
              </a>
              <a className="hero-link pl3" target="_blank" href="https://softeng.oicr.on.ca/">
                Team blog
                <Icon size={16} img="arrowRightMagenta" />
              </a>
            </div>
          </Hero>

          {/* Grid sections */}
          <GridFeature data={featureGridData}/>

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

export default AboutUsPage;
