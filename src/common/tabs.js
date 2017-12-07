import React from 'react';

export default [
  {
    key: 'operate',
    tabText: 'Operate',
    description: `
      Clouds are costly to setup and operate. Our operations toolset streamlines operations by simplifying setup, letting users monitor their usage, and automating billing in a simple cost recovery model.  With operational management out of the way, you can focus on the important stuff!
    `,
    icon: require('components/home/images/operate.svg'),
    cards: [
      {
        title: 'Enrolment',
        description:
          'Easily apply to onboard new Collaboratory projects and users into any cloud infrastructure and manage your current projects.',
        logoUrl: require('assets/logos/ego.png'),
        learnMoreLink: '/enrolment',
      },
      {
        title: 'Usage',
        description:
          'Let your OpenStack users track and monitor their resource usage, including things like compute & storage, over time.',
        logoUrl: require('assets/logos/ego.png'),
        learnMoreLink: '/usage',
      },
      {
        title: 'Billing',
        description:
          'Connect OpenStack usage data directly to Freshbooks to help automate invoicing for OpenStack infrastructure costs.',
        logoUrl: require('assets/logos/ego.png'),
        learnMoreLink: '/billing',
      },
    ],
  },
  {
    key: 'transfer',
    tabText: <span>Transfer &amp; Store</span>,
    description: (
      <span>
        Transferring and storing petabytes of data is challenging! Our
        high-performance tools, optimized for genomic data processing, offer a
        secure and fast framework for transferring large data sets from public
        and private cloud providers like AWS, Azure, and OpenStack.
      </span>
    ),
    icon: require('components/home/images/transfer.svg'),
    cards: [
      {
        title: 'Ego',
        description:
          'Need a scalable, stateless Authorization service that works with multiple Identity Providers? Provide Single Sign-On in microservices by letting Ego manage authorization  through popular IdPs like Facebook, Google, and Github.',
        logoUrl: require('assets/logos/ego.png'),
        learnMoreLink: '/ego',
      },
      {
        title: 'SCORe',
        description:
          'SCORe provides fast and secure access to the Controlled Data in your Object Storage buckets using parallel multi-part uploads and downloads.',
        logoUrl: require('assets/logos/ego.png'),
        learnMoreLink: '/score',
      },
      {
        title: 'SONG',
        description:
          'Validate metadata completeness, track files across multiple clouds, and publish raw data submissions all in an easy to adopt command line or REST API.  ',
        logoUrl: require('assets/logos/ego.png'),
        learnMoreLink: '/song',
      },
    ],
  },
  {
    key: 'science',
    tabText: 'Do Science',
    description: (
      <span>
        You’re all set up operationally and you’ve gathered your data. It’s time
        to put on your lab coat, grab a keyboard, and do some science! Our
        workflow and analytics tools make working on large datasets easier than
        ever.
      </span>
    ),
    icon: require('components/home/images/science.svg'),
    cards: [
      {
        title: 'Jupyter',
        description:
          'Ready to crunch some data but don’t have space?  Spin up a shareable notebook on our servers, complete with live access to ICGC data, in seconds. ',
        logoUrl: require('assets/logos/ego.png'),
        learnMoreLink: '/jupyter',
      },
    ],
  },
  {
    key: 'share',
    tabText: 'Share',
    description: (
      <span>
        Sharing knowledge is the foundation of the scientific community, but the
        growing size of genomic data often makes sharing complicated. Whether
        it’s an entire data portal or a comprehensive library for
        visualizations, our tools are specifically developed to make sharing
        your data and analytics a breeze!
      </span>
    ),
    icon: require('components/home/images/share.svg'),
    cards: [
      {
        title: 'Persona',
        description:
          'Let your users build a personalized profile with highly configurable, schemaless profile metadata management. ',
        logoUrl: require('assets/logos/ego.png'),
        learnMoreLink: '/persona',
      },
      {
        title: 'OncoJS',
        description:
          'cLibrary of javascript visualizations for cancer analytics',
        logoUrl: require('assets/logos/ego.png'),
        learnMoreLink: '/oncojs',
      },
    ],
  },
];
