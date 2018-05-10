/**
 * Created  on 31/3/18
 */
import React, { Component } from "react";
import Link from "gatsby-link";
import logo from "./overture_logo.svg";
import Badge from "../Badge/index";
import "./styles.scss";
import Icon from "../Icon/index";

const ProductsPopup = ({ closePopOver }) => (
  <div className="ProductsPopup">
    {/* Use of `closePopOver` prop is to clear popover state
      * while maintaining smooth gatsby Links */}

    {/* Design spec listed the product menu to pop up on mouse enter (not click)
      * Using a Spacer between top nav and floating popup=:
      * just using a padding top leaves a gap that on mouse exit will close the popover
      * So this basically gives invisible space that the mouse can enter and NOT close the window.*/}

    <section className="spacer" />

    <div className="menu-items flex">
      <section className="core">
        <Badge color="pink">Core</Badge>
        <div className="flex pt2">
          <Link
            onClick={() => closePopOver()}
            className="core-left-link bold"
            to="/products/ego"
          >
            Ego
          </Link>
          <Link
            onClick={() => closePopOver()}
            className="core-left-link bold"
            to="/products/song"
          >
            Song
          </Link>
        </div>
        <div className="flex pt2">
          <Link
            onClick={() => closePopOver()}
            className="core-left-link bold"
            to="/products/score"
          >
            Score
          </Link>
          {/* INDEXER: unwritten
        <Link
          onClick={() => closePopOver()}
          className="core-left-link bold"
          to="/products/indexer"
        >
          Indexer
        </Link>
        */}
        </div>

        {/*

        <a className="bold text-magenta pt2" to="#">
          Download Core >
        </a>

          */}

      </section>

      {/* section: DISCOVERY */}

      <section className="menu-section">
        <Badge color="blue">Discovery</Badge>
        <a
          onClick={() => closePopOver()}
          target="_blank"
          className="bold pt2"
          href="https://github.com/overture-stack/arranger"
        >
          Arranger
          <Icon className="pl1" img="githubGrey" />
        </a>
        <a
          onClick={() => closePopOver()}
          href="https://github.com/oncojs"
          className="bold pt2"
          to="/oncojs"
        >
          OncoJS
          <Icon className="pl1" img="githubGrey" />
        </a>
      </section>

      {/* section: DISCOVERY */}

      <section className="menu-section">
        <Badge color="yellow">Analysis</Badge>
        <Link onClick={() => closePopOver()} className="bold pt2" to="/jupyter">
          Jukebox
        </Link>
        <a
          onClick={() => closePopOver()}
          className="bold pt2"
          href="https://github.com/jtracker-io"
        >
          JTracker
          <Icon className="pl1" img="githubGrey" />
        </a>
      </section>

      {/* section: DISCOVERY */}

      <section className="menu-section">
        <Badge color="green">Social</Badge>
        <a
          onClick={() => closePopOver()}
          href="https://github.com/overture-stack/persona"
          className="bold pt2"
          to="/persona"
        >
          Persona
          <Icon className="pl1" img="githubGrey" />
        </a>
        <a
          href="https://github.com/overture-stack/riff"
          onClick={() => closePopOver()}
          className="bold pt2"
          to="/riff"
        >
          Riff
          <Icon className="pl1" img="githubGrey" />
        </a>
      </section>

      {/* section: MANAGEMENT */}

      <section className="menu-section">
        <Badge color="red">Management</Badge>
        <a
          onClick={() => closePopOver()}
          href="https://github.com/CancerCollaboratory/billing"
          className="bold pt2"
          to="/billing"
        >
          Billing & Usage
          <Icon className="pl1" img="githubGrey" />
        </a>
        <a
          onClick={() => closePopOver()}
          className="bold pt2"
          href="https://github.com/overture-stack/enrolment"
        >
          Enrolment
          <Icon className="pl1" img="githubGrey" />
        </a>
      </section>
    </div>
  </div>
);

class NavBar extends Component {
  constructor() {
    super();

    // refs for detecting click locations and subsequently hiding/showing the popover.
    this.popoverRef = null;
    this.productsRef = null;
  }

  state = {
    navOpen: false
  };

  closePopOver = () => {
    this.setState({ navOpen: false });
  };

  // Hacky popover. Normally would handle in an on-click but we also need to:
  // a) handle clicking anywhere else outside popover to clear it.
  // b) if `products` is clicked when it's open; to close it as a toggle proper.
  // using a toggleNav() function conflicts with the window listeners that are mounted.
  componentDidMount() {
    document.addEventListener("mouseover", e => {
      // if clicking outside the popover
      if (!this.popoverRef.contains(e.target) && this.state.navOpen) {
        this.setState({ navOpen: false });
        // clicked in popover while open (but not on a link!)
      } else if (this.popoverRef.contains(e.target)) {
        return;
        // clicked on products nav link when popover open
      } else if (!this.productsRef.contains(e.target) && this.state.navOpen) {
        this.setState({ navOpen: false });
        // clicked on "Products" which should toggle it
      } else if (this.productsRef.contains(e.target) && !this.state.navOpen) {
        this.setState({ navOpen: true });
      }
    });
  }

  render() {
    return (
      <nav
        className="navbar is-fixed-top NavHeader"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link to="/" className="navbar-item pr4">
            <img src={logo} />
          </Link>

          <button className="button navbar-burger" data-target="navMenu">
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className="navbar-menu" id="navMenu">
          {/* popover */}
          <div ref={r => (this.popoverRef = r)}>
            {this.state.navOpen && (
              <ProductsPopup closePopOver={this.closePopOver} />
            )}
          </div>

          <div className="navbar-start">
            <a
              className="navbar-item nav-link mr3 pointer"
              ref={r => (this.productsRef = r)}
            >
              Products
            </a>

            {/*  
            <Link className="navbar-item nav-link mr3" to="/case-studies">
              Case Studies
            </Link>
            */}

            <Link className="navbar-item nav-link mr3" to="/services">
              Services
            </Link>

            <Link className="navbar-item nav-link mr3" to="/contact">
              Contact
            </Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a className="button is-primary is-large" target="_blank" href="https://github.com/overture-stack">
                    <Icon className="pr2" img="githubWhite" />
                    Get Started
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
