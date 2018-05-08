/**
 * Created  on 31/3/18
 */
import React, { Component } from "react";
import Link from "gatsby-link";
import logo from "./overture_logo.svg";
import Badge from "../Badge/index";
import "./styles.scss";

const ProductsPopup = ({ closePopOver }) => (
  <div className="ProductsPopup">

    {/* core! 
      * Use of `closePopOver` is to clear popover state
      * while maintaining smooth gatsby Links */}

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
      <a className="bold text-magenta pt2" to="#">
        Download Core >
      </a>
    </section>

    {/* section: DISCOVERY */}

    <section className="menu-section">
      <Badge color="blue">Discovery</Badge>
      <Link onClick={() => closePopOver()} className="bold pt2" to="/arranger" >
        Arranger
      </Link>
      <Link onClick={() => closePopOver()} className="bold pt2" to="/oncojs" >
        OncoJS
      </Link>
    </section>


    {/* section: DISCOVERY */}

    <section className="menu-section">
      <Badge color="yellow">Analysis</Badge>
      <Link onClick={() => closePopOver()} className="bold pt2" to="/jupyter" >
        Jupyter
      </Link>
      <Link onClick={() => closePopOver()} className="bold pt2" to="/jtracker" >
        JTracker
      </Link>
    </section>


    {/* section: DISCOVERY */}

    <section className="menu-section">
      <Badge color="green">Social</Badge>
      <Link onClick={() => closePopOver()} className="bold pt2" to="/persona" >
        Persona
      </Link>
      <Link onClick={() => closePopOver()} className="bold pt2" to="/riff" >
        Riff
      </Link>
    </section>


    {/* section: MANAGEMENT */}

    <section className="menu-section">
      <Badge color="red">Management</Badge>
      <Link onClick={() => closePopOver()} className="bold pt2" to="/billing" >
        Billing & Usage
      </Link>
      <Link onClick={() => closePopOver()} className="bold pt2" to="/enrolment" >
        Enrolment
      </Link>
    </section>

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
  }

  // Hacky popover. Normally would handle in an on-click but we also need to:
  // a) handle clicking anywhere else outside popover to clear it.
  // b) if `products` is clicked when it's open; to close it as a toggle proper.
  // using a toggleNav() function conflicts with the window listeners that are mounted.
  componentDidMount() {
    document.addEventListener("click", e => {
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
      <nav className="navbar is-fixed-top" aria-label="main navigation">
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
            {this.state.navOpen && <ProductsPopup closePopOver={this.closePopOver}/>}
          </div>

          <div className="navbar-start">
            <a
              className="navbar-item mr3 pointer"
              ref={r => (this.productsRef = r)}
            >
              Products
            </a>

            <Link className="navbar-item mr3" to="/case-studies">
              Case Studies
            </Link>
            <Link className="navbar-item mr3" to="/services">
              Services
            </Link>

            <Link className="navbar-item mr3" to="/contact">
              Contact
            </Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <Link className="button is-primary is-outlined" to="#">
                    Get Started
                  </Link>
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
