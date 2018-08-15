/**
 * Created  on 31/3/18
 */
import React, { Component } from "react";
import Link from "gatsby-link";
import logo from "./overture_logo.svg";
import Badge from "../Badge/index";
import "./styles.scss";
import Icon from "../Icon/index";
import SlackButton from "../SlackButton";
import Button from "../Button";

const ProductsPopup = ({ closeMenus }) => {
  
  return (
  <div className="ProductsPopup">
    {/* Use of `closeMenus` prop is to clear popover state
      * while maintaining smooth gatsby Links */}

    {/* Design spec listed the product menu to pop up on mouse enter (not click)
      * Using a Spacer between top nav and floating popup=:
      * just using a padding top leaves a gap that on mouse exit will close the popover
      * So this basically gives invisible space that the mouse can enter and NOT close the window.*/}

    <section className="spacer" />

    <div className="menu-items flex">
      <section className="menu-section core">
        <Badge color="pink">Core</Badge>
        <div className="menu-section-links core-links">
          <Link
            onClick={() => closeMenus()}
            className="menu-section-link"
            to="/products/ego"
          >
            Ego
          </Link>
          <Link
            onClick={() => closeMenus()}
            className="menu-section-link"
            to="/products/song"
          >
            Song
          </Link>
          <Link
            onClick={() => closeMenus()}
            className="menu-section-link"
            to="/products/score"
          >
            Score
          </Link>
        </div>
      </section>

      <div className="arrow-up" />

      {/* section: DISCOVERY */}

      <section className="menu-section">
        <Badge color="blue">Discovery</Badge>
        <div className="menu-section-links">
          <a
            onClick={() => closeMenus()}
            target="_blank"
            className="menu-section-link"
            href="https://github.com/overture-stack/arranger"
          >
            Arranger
            <Icon className="pl1" img="githubGrey" />
          </a>
          <a
            onClick={() => closeMenus()}
            href="https://github.com/oncojs"
            className="menu-section-link"
            to="/oncojs"
          >
            OncoJS
            <Icon className="pl1" img="githubGrey" />
          </a>
        </div>
      </section>

      {/* section: DISCOVERY */}

      <section className="menu-section">
        <Badge color="yellow">Analysis</Badge>

        <div className="menu-section-links">
          <Link
            onClick={() => closeMenus()}
            className="menu-section-link"
            to="/products/jukebox"
          >
            Jukebox
          </Link>
          <a
            onClick={() => closeMenus()}
            className="menu-section-link"
            href="https://github.com/jtracker-io"
          >
            JTracker
            <Icon className="pl1" img="githubGrey" />
          </a>
        </div>
      </section>

      {/* section: DISCOVERY */}

      <section className="menu-section">
        <Badge color="green">Social</Badge>
        <div className="menu-section-links">
          <Link
            onClick={() => closeMenus()}
            className="menu-section-link"
            to="/products/persona"
          >
            Persona
            <Icon className="pl1" img="githubGrey" />
          </Link>
          <Link
            onClick={() => closeMenus()}
            className="menu-section-link"
            to="/products/riff"
          >
            Riff
          </Link>
        </div>
      </section>

      {/* section: MANAGEMENT */}

      <section className="menu-section" style={{ flexShrink: 0 }}>
        <Badge color="red">Management</Badge>
        <div className="menu-section-links">
          <a
            onClick={() => closeMenus()}
            href="https://github.com/CancerCollaboratory/billing"
            className="menu-section-link"
            to="/billing"
          >
            Billing & Usage
            <Icon className="pl1" img="githubGrey" />
          </a>
          <a
            onClick={() => closeMenus()}
            className="menu-section-link"
            href="https://github.com/overture-stack/enrolment"
          >
            Enrolment
            <Icon className="pl1" img="githubGrey" />
          </a>
        </div>
      </section>
    </div>
  </div>
)
}

const NavLinkHOC = ({ url, name, toggleMobileMenu }) => {
  return (
    <Link
      className="navbar-item nav-link"
      activeClassName="active-item"
      onClick={() => toggleMobileMenu()}
      to={url}
    >
      {name}
    </Link>
  );
};

class NavBar extends Component {
  constructor() {
    super();
    this.popoverRef = null;
    this.productsRef = null;
  }

  state = {
    popOverOpen: false,
    mobileMenuOpen: false
  };

  closePopOver = () => {
    this.setState({ popOverOpen: false });
  };
  
  togglePopOver = () => {
    this.setState({popOverOpen : !this.state.popOverOpen})
  }

  closeMobileMenu = () => {
    this.setState({ mobileMenuOpen: false });
  };
  
  closeAllMenus = () => {
    this.closePopOver();
    this.closeMobileMenu();
  }

  toggleMobileMenu = () => {
    this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen });
  };

  /** Handle popover on mouseover + click.
   * closes popover when mouse leaves / is outside popOver ref or product ref.
   * only shows on mouseover on desktop
   */
  componentDidMount() {
    document.addEventListener("mouseover", e => {
      if (window.innerWidth > 1023) {
        // if clicking outside the popover
        if (!this.popoverRef.contains(e.target) && this.state.popOverOpen) {
          this.setState({ popOverOpen: false });
          // clicked in popover while open (but not on a link!)
        } else if (this.popoverRef.contains(e.target)) {
          return;
          // clicked on products nav link when popover open
        } else if (
          !this.productsRef.contains(e.target) &&
            this.state.popOverOpen
        ) {
          this.setState({ popOverOpen: false });
          // clicked on "Products" which should toggle it
        } else if (
          this.productsRef.contains(e.target) &&
            !this.state.popOverOpen
        ) {
          this.setState({ popOverOpen: true });
        }

      }
    });
    
  }

  render() {
    let mobileMenuOpen = this.state.mobileMenuOpen ? "is-active" : "";
    let navbarMenuClass = `navbar-menu ${mobileMenuOpen}`;
    let burgerClass = `button navbar-burger ${mobileMenuOpen}`;

    return (
      <nav
        className="navbar is-fixed-top NavHeader"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link to="/" className="navbar-item mr4">
            <img src={logo} />
          </Link>

          <button
            className={burgerClass}
            onClick={() => this.toggleMobileMenu()}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={navbarMenuClass} id="navMenu">

          <div className="navbar-start items-center">
            {/* popover */}
            <div ref={r => (this.productsRef = r)}>
              <span onClick={() => this.togglePopOver()} className="navbar-item nav-link pointer">Products</span>

              <div ref={r => (this.popoverRef = r)}>
                {this.state.popOverOpen && (
                  <ProductsPopup closeMenus={this.closeAllMenus} />
                )}
              </div>
            </div>

            <NavLinkHOC
              toggleMobileMenu={this.toggleMobileMenu}
              url="/our-vision"
              name="Our Vision"
            />
            <NavLinkHOC
              toggleMobileMenu={this.toggleMobileMenu}
              url="/services"
              name="Services"
            />
            <NavLinkHOC
              toggleMobileMenu={this.toggleMobileMenu}
              url="/contact"
              name="Contact"
            />
          </div>
          <div className="navbar-end">
            <div className="navbar-item nav-link navbar-buttons">
              <SlackButton className="is-medium pr2" />
              <Button
                type="primary"
                size="medium"
                externalLink="https://github.com/overture-stack"
                icon="githubWhite"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
