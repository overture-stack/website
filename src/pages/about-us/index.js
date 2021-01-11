import React from 'react';
import {
  BottomCallout,
  Button,
  Callout,
  GridFeature,
  Hero,
  Icon,
  LinkHelper as Link,
} from 'components';
import productsDict from 'constants/products';
import { GITHUB_ISSUES_LINK, TEAM_LINK, TEAM_BLOG_LINK } from 'constants/external-links';
import heroImg from './assets/hero_img.svg';
import './styles.scss';

const featureGridData = [
  [
    {
      header: 'Genome informatics first.',
      details: (
        <div>
          You can use our solutions for anything, but here at Overture we focus on{' '}
          <strong>Genome Informatics</strong>. With rapidly expanding datasets at the heart, we've
          built our bioinformatics bundle to track, transfer, and secure genomic data in distributed
          cloud environments.
        </div>
      ),
      icon: 'dna',
    },
    {
      header: 'Swappable.',
      details:
        'There is no such thing as perfection. Our tools are implemented to be interchangeable from the get-go. You can pick-and-choose from our software stack and simply use the components that best match your use case.',
      icon: 'palette',
    },
  ],
  [
    {
      header: 'An open world.',
      details: (
        <div>
          We are strong believers in open-source software, open science, and open communication.
          Don’t hesitate to follow our team activities on{' '}
          <Link to={GITHUB_ISSUES_LINK}>GitHub</Link> by taking a look at upcoming or in-progress
          tickets, or even be the first to test out a feature detailed in a Pull Request.
        </div>
      ),
      icon: 'lockCode',
    },
    {
      header: 'Closing the loop.',
      details:
        'Our team has established a strong foundation in building software solutions for genomic projects, from data generation and submission all the way to data dissemination and analysis, leading to a deep understanding of the genomic data lifecycle. The Overture stack contains a wide array of components for cloud infrastructure, data shepherding, and analysis.',
      icon: 'graphCycle',
    },
  ],
];

export default function AboutUsPage() {
  return (
    <main className="AboutUsPage">
      {/* HERO */}
      <Hero
        title="About Us"
        subtitle="Our vision is to help research, healthcare, and patient communities collaborate and advance genomic research by providing cutting-edge open source software solutions."
        fgImage="img_our_vision"
        fgImageClass="about-img"
        ImgComponent={() => <img src={heroImg} className="about-img" />}
      >
        <div className="flex py2">
          <Link className="hero-link" to={TEAM_LINK}>
            Meet the team
            <Icon size={16} img="arrowRightMagenta" />
          </Link>
          <Link className="hero-link pl3" to={TEAM_BLOG_LINK}>
            Team blog
            <Icon size={16} img="arrowRightMagenta" />
          </Link>
        </div>
      </Hero>

      {/* Grid sections */}
      <GridFeature iconSize={48} data={featureGridData} />

      <BottomCallout>
        <Callout
          icon="githubYellow"
          description="Join us in building tools to catalog, share and visualize data, and take part in our important mission to democratize science!"
          className="center"
        >
          <Button
            icon="githubWhite"
            link={productsDict.overture.githubUrl}
            size="medium"
            type="primary"
          >
            Get Started
          </Button>
        </Callout>
      </BottomCallout>
    </main>
  );
}
