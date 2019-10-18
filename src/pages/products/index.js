import React, { Component } from 'react'
import heroImg from './assets/products_hero_no_clouds.svg'
import cloud_1 from './assets/cloud_1.svg'
import cloud_2 from './assets/cloud_2.svg'
import { Link } from 'gatsby'
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
  Callout,
} from '../../components'
import './style.scss'

// Component for rendering a single "box" representing a feature (ie "Generate & Upload")
const ProductBox = ({
  header,
  headerColor,
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
      <div className="heading" style={{ color: headerColor }}>
        {header}
      </div>
      <div className="details">{details}</div>
      <div className="links">
        {links.map(l => {
          // If external links, render with <a> tag.
          if (typeof l.extlink !== 'undefined') {
            return (
              <span key={l.extlink} className="icon-link">
                <a target="_blank" className="link" href={l.extlink}>
                  <Icon
                    className="icon"
                    size={l.iconSize ? l.iconSize : iconSize}
                    img={l.icon}
                  ></Icon>
                  {l.text}
                </a>
              </span>
            )
          } else {
            return (
              <span key={l.link} className="icon-link">
                <Link className="link" to={`/products/${l.link}`}>
                  <Icon
                    className="icon"
                    size={l.iconSize ? l.iconSize : iconSize}
                    img={l.icon}
                  ></Icon>
                  {l.text}
                </Link>
              </span>
            )
          }
        })}
      </div>
    </div>
  )
}

const featureGridData = [
  [
    {
      header: 'Generate & Upload',
      id: 'generate-upload',
      containerClass: 'generate-upload',
      headerColor: '#D087B4',
      bgColor: '#F2F3F5',
      isCore: true,
      details:
        'Products that allow your data submitters to generate genomic and clinical metadata and securely upload the corresponding files: ',
      links: [
        { icon: 'productScore', text: 'Score', link: 'score' },
        { icon: 'productSong', text: 'Song', link: 'song' },
      ],
      ChildComponent: ProductBox,
    },

    {
      header: 'Access & Download',
      headerColor: '#6AC3E8',
      id: 'access-download',
      containerClass: 'access-download',
      bgColor: '#F2F3F5',
      isCore: true,
      details:
        'Products that give your users the correct permissions to view and download controlled data: ',
      links: [
        { icon: 'productEgo', text: 'Ego', link: 'ego', iconSize: 24 },
        {
          icon: 'productMaestro',
          text: 'Maestro',
          link: 'maestro',
          iconSize: 40,
        },
        { icon: 'productArranger', text: 'Arranger', link: 'arranger' },
      ],
      ChildComponent: ProductBox,
    },
  ],
  [
    {
      header: 'Analyze & Discover',
      headerColor: '#C86370',
      id: 'analyze-discover',
      containerClass: 'analyze-discover',
      details:
        'Products that allow your users to access interactive visualizations and code-based analysis environments: ',
      links: [
        { icon: 'productJukebox', text: 'Jukebox', link: 'jukebox' },
        { icon: 'productOnco', text: 'OncoJS', link: 'oncojs' },
      ],
      ChildComponent: ProductBox,
    },

    {
      header: 'Collaborate & Share',
      headerColor: '#47D9BF',
      id: 'collaborate-share',
      containerClass: 'collaborate-share',
      details:
        'Products that allow your users to set up a profile and share urls in order to raise awareness across the scientific community: ',
      links: [
        { icon: 'productPersona', text: 'Persona', link: 'persona' },
        { icon: 'productRiff', text: 'Riff', link: 'riff' },
      ],
      ChildComponent: ProductBox,
    },
  ],

  [
    {
      header: 'Track & Manage',
      headerColor: '#ECC000',
      id: 'track-manage',
      containerClass: 'track-manage is-6 is-offset-3',
      details:
        'Products that help you track and manage projects, users, billing and resource usage for an OpenStack cloud environment: ',
      links: [
        {
          icon: 'productBilling',
          text: 'Billing & Usage',
          extlink: 'https://github.com/overture-stack/billing',
        },
        {
          icon: 'productEnrolment',
          text: 'Enrolment',
          extlink: 'https://github.com/overture-stack/enrolment',
        },
      ],
      ChildComponent: ProductBox,
    },
  ],
]

/**
 * This is a separate class-component for the sake of
 * separating the animation logic for the illustration.
 */
class HeroImg extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cloud1: { x: 20, y: 40, dir: 'right' },
      cloud2: { x: 650, y: 200, dir: 'left' },
    }

    this.updateAnimationState = this.updateAnimationState.bind(this)
    this.canvas = null
  }

  componentDidMount() {
    this.rAF = requestAnimationFrame(this.updateAnimationState)
  }

  componentDidUpdate() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext('2d')
    const cloud_1 = this.refs.cloud_1
    const cloud_2 = this.refs.cloud_2
    const c1 = this.state.cloud1
    const c2 = this.state.cloud2
    const width = canvas.width
    const height = canvas.height

    // animated clouds.
    ctx.clearRect(0, 0, width, height)
    ctx.imageSmoothingEnabled = false
    ctx.drawImage(cloud_1, c1.x, c1.y)
    ctx.drawImage(cloud_2, c2.x, c2.y)
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rAF)
  }

  updateAnimationState() {
    const { cloud1, cloud2 } = this.state
    this.setState({
      cloud1: this.animateCloud(cloud1),
      cloud2: this.animateCloud(cloud2),
    })
    this.rAF = requestAnimationFrame(this.updateAnimationState)
  }

  animateCloud(c) {
    let canvas = this.refs.canvas
    let width = canvas.width
    let height = canvas.height
    let c1 = this.state.cloud1
    let speed = 0.2

    if (c.x == width && c.dir == 'right') {
      // less than 500
      return { x: c.x - speed, y: c.y, dir: 'left' }
    } else if (c.x == 0 && c.dir == 'left') {
      return { x: c.x + speed, y: c.y, dir: 'right' }
    } else if (c.dir == 'right') {
      return { x: c.x + speed, y: c.y, dir: 'right' }
    } else {
      return { x: c.x - speed, y: c.y, dir: 'left' }
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
    )
  }
}

class ProductsPage extends Component {
  render() {
    return (
      <Layout>
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
              iconSize={48}
              data={featureGridData}
              childComponent={ProductBox}
              borderColor="grey"
              sectionBG={['#F2F3F5', 'white', 'white']}
            />
          </div>

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
    )
  }
}

export default ProductsPage
