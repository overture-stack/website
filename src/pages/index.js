import React from 'react';
import Helmet from 'react-helmet';
import Modal from 'react-modal';
import productsDict from 'constants/products';
import { CASE_STUDIES_PATH, SERVICES_PATH } from 'constants/pages';
import { Badge, Button, H2, H3, Hero, Icon, LinkHelper as Link } from 'components';
import { OVERTURE_YOUTUBE_LINK, TEAM_LINK } from 'constants/external-links';
import { productsAnchors } from 'constants/pages';
import heroImg from './assets/heroImg.svg';
import './home/styles.scss';

Modal.setAppElement('#___gatsby');
Modal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.85)';

const BundleCard = ({ header, icon, children }) => (
  <div className="BundleCard">
    <header className="card-header">
      <div className="text-white">{header}</div>
      <Icon alt={`${header} icon`} img={icon} />
    </header>

    <section className="card-body">{children}</section>
  </div>
);

const VideoModal = ({ isOpen, closeModal }) => {
  const customStyles = {
    content: {
      padding: 0,
      border: 'none',
      left: '10%',
      right: '10%',
      bottom: '10%',
      top: '10%',
      backgroundColor: 'rgb(20, 20, 20)',
      overflowY: 'hidden',
    },
  };

  return (
    <Modal style={customStyles} isOpen={isOpen}>
      <button className="__modal_close_btn" onClick={() => closeModal()} aria-label="Close Modal">
        &times;
      </button>
      {/* video content */}
      <iframe
        width="100%"
        height="100%"
        src={OVERTURE_YOUTUBE_LINK}
        style={{ position: 'relative', top: 0, bottom: 0, height: '100%' }}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Modal>
  );
};

class HomePage extends React.Component {
  state = {
    modalOpen: false,
  };

  openModal = () => {
    this.setState({ modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    return (
      <main className="HomePage">
        {/* HERO */}

        <Helmet>
          <title>Overture - Software for big data genomic science</title>
          <meta
            name="description"
            content="Overture is a collection of open-source, extendable solutions for big-data genomic science that you can use to support your research."
          />
          <meta
            name="keywords"
            content="Overture, data science software, bioinformatics software, open-source software, cancer research, genomic data, big data, data portals, Ontario Institute for Cancer Research, OICR"
          />
        </Helmet>

        <VideoModal closeModal={this.closeModal} isOpen={this.state.modalOpen} />

        <Hero
          title="Worry less, science more"
          subtitle="Overture is a collection of open-source, extendable solutions for big-data genomic science that you can use to support your research."
          ImgComponent={() => <img alt="" className="home-img" src={heroImg} />}
        >
          <span className="hero-buttons">
            <Button type="blue" className="my2 mr2" size="medium" onClick={() => this.openModal()}>
              <Icon alt="Play video" img="play" size={26} className="mr1" />
              The Overture story
            </Button>

            <Button className="my2 mr2" link={CASE_STUDIES_PATH} size="medium" type="blue">
              The products in action
            </Button>
          </span>
        </Hero>

        {/* Bundle Section */}

        <section className="container">
          <div className="bioinformatics-bundle column ">
            <H2 className="flex-auto pr2">Bioinformatics Core Products</H2>
            <div className="pt2" style={{ maxWidth: '900px' }}>
              Data is the essence of our field. Implement Overture’s core products to
              <span>
                <Link to={productsAnchors.generate}>
                  <Badge className="mx1" color="pink">
                    Generate & Upload{' '}
                  </Badge>
                </Link>
              </span>
              and <br />
              <span>
                <Link to={productsAnchors.access}>
                  <Badge className="mx1" color="blue">
                    Access & Download
                  </Badge>
                </Link>
              </span>
              genomic data across multiple cloud providers:
            </div>
          </div>

          <div className="columns column">
            <Link className="column" to={productsDict.ego.productsPath}>
              <BundleCard icon="lock" header="Ego">
                <div className="py2">
                  Authorization service for identity providers such as Google and Facebook.
                </div>
                <div className="link-magenta">
                  Learn More <Icon alt="right arrow" size={12} img="arrowRightMagenta" />
                </div>
              </BundleCard>
            </Link>

            <Link className="column" to={productsDict.score.productsPath}>
              <BundleCard icon="database" header="Score">
                <div className="py2">
                  Facilitates the transfer and storage of data seamlessly for cloud-based projects.
                </div>
                <div className="link-magenta">
                  Learn More <Icon alt="right arrow" size={12} img="arrowRightMagenta" />
                </div>
              </BundleCard>
            </Link>

            <Link className="column" to={productsDict.song.productsPath}>
              <BundleCard icon="shield" header="Song">
                <div className="py2">
                  Tracks genomic data scattered across multiple cloud storage systems.
                </div>
                <div className="link-magenta">
                  Learn More <Icon alt="right arrow" size={12} img="arrowRightMagenta" />
                </div>
              </BundleCard>
            </Link>

            <Link className="column" to={productsDict.arranger.productsPath}>
              <BundleCard icon="gridGlass" header="Arranger">
                <div className="py2">
                  Provide your administrators with the power to organize an intuitive search
                  interface.
                </div>
                <div className="link-magenta">
                  Learn More <Icon alt="right arrow" size={12} img="arrowRightMagenta" />
                </div>
              </BundleCard>
            </Link>
          </div>

          {/* BADGES */}
          <div className="flex column justify-center">
            <div className="explore-solutions-box">
              <div className="explore-solutions-header"> Also explore our products for:</div>
              <div className="badges">
                <div>
                  <Link to={productsAnchors.analyze}>
                    <Badge className="mr2" color="red">
                      Analyze & Discover
                    </Badge>
                  </Link>

                  <Link to={productsAnchors.collaborate}>
                    <Badge className="mr2" color="light-green">
                      Collaborate & Share
                    </Badge>
                  </Link>
                </div>

                <div>
                  <Link to={productsAnchors.track}>
                    <Badge className="mr2" color="yellow">
                      Track & Manage
                    </Badge>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Hero */}

        <section className="hero bottom-hero bg-grey">
          <div className="container">
            <div className="columns py3">
              <div className="column is-half">
                <H3 className="bottom-header">
                  We created Overture to share our data science components with the community.
                </H3>
              </div>

              <div className="column is-half pb4 mt2">
                <span className="pt3">Our team has extensive experience building</span>
                <span className="bold">
                  {' '}
                  large scale infrastructures, big data ETL and portals supporting genomic research.{' '}
                </span>
                <p className="pt2">
                  Built to be reusable and scalable, Overture’s components are well documented,
                  actively supported and welcome{' '}
                  <Link to={productsDict.overture.githubUrl}>
                    external feedback and contributions
                  </Link>
                  . If you need assistance, we also offer{' '}
                  <Link to={SERVICES_PATH}>consulting, support and collaborative services.</Link>
                </p>

                <div className="mt3">
                  <Link className="button is-primary is-medium" to={TEAM_LINK}>
                    Meet the team
                  </Link>

                  {/* Hiding for now:
                       <button className="button is-primary is-medium">Case studies</button>
                       * */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default HomePage;
