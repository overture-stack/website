import React from 'react';
import {
  BottomCallout,
  Button,
  Callout,
  GridFeature,
  Hero,
  Icon,
  IconCommon,
  LinkHelper as Link,
} from 'components';
import productsDict from 'constants/products';
import heroImg from './assets/products_hero_no_clouds.svg';
import cloud_1 from './assets/cloud_1.svg';
import cloud_2 from './assets/cloud_2.svg';
import './style.scss';

// Component for rendering a single "box" representing a feature (ie "Generate & Upload")
const ProductBox = ({
  header,
  containerClass = 'is-6 box-section',
  details,
  links,
  id,
  isCore = false,
  iconSize = 32,
}) => {
  return (
    <div id={id} className={`product-box column ${containerClass}`}>
      {isCore && <IconCommon.Core />}
      <h2 className="heading">{header}</h2>
      <div className="details">{details}</div>
      <div className="links">
        {links.map(l => {
          return (
            <span key={l.link} className="icon-link">
              <Link className="link" to={l.link}>
                <Icon className="icon" size={l.iconSize || iconSize} img={l.icon} />
                {l.text}
                <Icon size={12} img="chevronGrey" style={{ marginLeft: 4, marginTop: 4 }} />
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
      header: 'Generate & Upload',
      id: 'generate-upload',
      containerClass: 'generate-upload',
      isCore: true,
      details:
        'Products that allow your data submitters to generate genomic and clinical metadata and securely upload the corresponding files: ',
      links: [
        { icon: 'productScore', text: 'Score', link: productsDict.score.productsPath },
        { icon: 'productSong', text: 'Song', link: productsDict.song.productsPath },
      ],
      ChildComponent: ProductBox,
    },

    {
      header: 'Access & Download',
      id: 'access-download',
      containerClass: 'access-download',
      isCore: true,
      details:
        'Products that give your users the correct permissions to view and download controlled data: ',
      links: [
        { icon: 'productEgo', text: 'Ego', link: productsDict.ego.productsPath, iconSize: 24 },
        {
          icon: 'productMaestro',
          text: 'Maestro',
          link: 'maestro',
          iconSize: 40,
        },
        { icon: 'productArranger', text: 'Arranger', link: productsDict.arranger.productsPath },
      ],
      ChildComponent: ProductBox,
    },
  ],
  [
    {
      header: 'Analyze & Discover',
      id: 'analyze-discover',
      containerClass: 'analyze-discover',
      details:
        'Products that allow your users to access interactive visualizations and code-based analysis environments: ',
      links: [
        { icon: 'productJukebox', text: 'Jukebox', link: productsDict.jukebox.productsPath },
        { icon: 'productOnco', text: 'OncoJS', link: productsDict.oncojs.productsPath },
      ],
      ChildComponent: ProductBox,
    },
    {
      header: 'Collaborate & Share',
      id: 'collaborate-share',
      containerClass: 'collaborate-share',
      details:
        'Products that allow your users to set up a profile and share urls in order to raise awareness across the scientific community: ',
      links: [
        { icon: 'productPersona', text: 'Persona', link: productsDict.persona.productsPath },
        { icon: 'productRiff', text: 'Riff', link: productsDict.riff.productsPath },
      ],
      ChildComponent: ProductBox,
    },
  ],
  [
    {
      header: 'Track & Manage',
      id: 'track-manage',
      containerClass: 'track-manage is-6 is-offset-3',
      details:
        'Products that help you track and manage projects, users, billing and resource usage for an OpenStack cloud environment: ',
      links: [
        {
          icon: 'productBilling',
          text: 'Billing & Usage',
          extlink: productsDict.billing.githubUrl,
        },
        {
          icon: 'productEnrolment',
          text: 'Enrolment',
          extlink: productsDict.enrolment.githubUrl,
        },
      ],
      ChildComponent: ProductBox,
    },
  ],
];

/**
 * This is a separate class-component for the sake of
 * separating the animation logic for the illustration.
 */
class HeroImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cloud1: { x: 20, y: 40, dir: 'right' },
      cloud2: { x: 650, y: 200, dir: 'left' },
    };

    this.updateAnimationState = this.updateAnimationState.bind(this);
    this.canvas = null;
  }

  componentDidMount() {
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  componentDidUpdate() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');
    const cloud_1 = this.refs.cloud_1;
    const cloud_2 = this.refs.cloud_2;
    const c1 = this.state.cloud1;
    const c2 = this.state.cloud2;
    const width = canvas.width;
    const height = canvas.height;

    // animated clouds.
    ctx.clearRect(0, 0, width, height);
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(cloud_1, c1.x, c1.y);
    ctx.drawImage(cloud_2, c2.x, c2.y);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);
  }

  updateAnimationState() {
    const { cloud1, cloud2 } = this.state;
    this.setState({
      cloud1: this.animateCloud(cloud1),
      cloud2: this.animateCloud(cloud2),
    });
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  animateCloud(c) {
    let canvas = this.refs.canvas;
    let width = canvas.width;
    let height = canvas.height;
    let c1 = this.state.cloud1;
    let speed = 0.2;

    if (c.x == width && c.dir == 'right') {
      // less than 500
      return { x: c.x - speed, y: c.y, dir: 'left' };
    } else if (c.x == 0 && c.dir == 'left') {
      return { x: c.x + speed, y: c.y, dir: 'right' };
    } else if (c.dir == 'right') {
      return { x: c.x + speed, y: c.y, dir: 'right' };
    } else {
      return { x: c.x - speed, y: c.y, dir: 'left' };
    }
  }

  render() {
    return (
      <div>
        <canvas
          ref="canvas"
          width="1000"
          height="500"
          style={{ zIndex: 0, position: 'absolute' }}
        ></canvas>
        <div className="img_hero_products">
          {/* hidden clouds for canvas animations */}
          <img ref="cloud_1" src={cloud_1} style={{ display: 'none' }} />
          <img ref="cloud_2" src={cloud_2} style={{ display: 'none' }} />
          {/* the hero image: */}
          <img style={{ zIndex: 3 }} src={heroImg} />
        </div>
      </div>
    );
  }
}

export default function ProductsPage() {
  return (
    <main className="ProductsPage">
      {/* HERO */}
      <Hero
        title="Products"
        titleClass="hero-text is-4-desktop"
        subtitle="Build your own genomics platform that allows your users to collaborate and share their scientific discoveries."
        ImgComponent={HeroImg}
      ></Hero>

      <div className="spacer" />

      {/* Grid sections */}
      <div className="grid-feature-wrap">
        <GridFeature
          borderColor="grey"
          childComponent={ProductBox}
          data={featureGridData}
          iconSize={48}
          sectionBG={['white', 'white', 'white']}
        />
      </div>

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
