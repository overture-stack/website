/**
 * NavBar component:
 * subcomponents: ProductsPopup and NavLink
 */
import React, { Component } from "react";
import Link from "gatsby-link";
import logo from "./overture_logo.svg";
import "./styles.scss";
import Icon from "../Icon/index";
import Button from "../Button";
import ProductsPopup from "./Popup";
import NavLink from "./NavLink";

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

  /* Several Open/Close menu methods for desktop and mobile: */

  openPopOver = () => {
    this.setState({ popOverOpen: true });
  };

  closePopOver = () => {
    this.setState({ popOverOpen: false });
  };

  closeMobileMenu = () => {
    this.setState({ mobileMenuOpen: false });
  };

  closeMenus = () => {
    this.closePopOver();
    this.closeMobileMenu();
  };

  togglePopOver = () => {
    this.setState({ popOverOpen: !this.state.popOverOpen });
  };

  toggleMobileMenu = () => {
    this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen });
  };

  /** Handle popover on mouseover + click.
   * NOTE: Attaches mouseover to entire document in order to
   * detect when the mouse is _outside_ the popOver / Product reference (to close it)
   *
   * NOTE: only shows on mouseover on desktop
   */
  handleMouseOver = () => {
    document.addEventListener("mouseover", e => {
      let popOverOpen = this.state.popOverOpen;
      let mouseInPopover = this.popoverRef.contains(e.target);
      let mouseInProductsTab = this.productsRef.contains(e.target);

      if (window.innerWidth > 1023) {
        if (!mouseInPopover && popOverOpen) {
          this.closePopOver();
        } else if (mouseInProductsTab && !popOverOpen) {
          this.openPopOver();
        }
      }
    });
  };

  componentDidMount() {
    this.handleMouseOver();
  }

  render() {
    let mobileMenuOpen = this.state.mobileMenuOpen ? "is-active" : "";
    let navbarMenuClass = `navbar-menu ${mobileMenuOpen}`;
    let productsLinkClass = this.state.popOverOpen
      ? "products-link products-link-open navbar-item"
      : "products-link navbar-item";
    let burgerClass = `button navbar-burger ${mobileMenuOpen}`;
    let productsArrow = this.state.popOverOpen ? "arrowDown" : "arrowRight";

    return (
      <nav
        className="NavHeader navbar is-fixed-top"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link
            to="/"
            onClick={() => this.closeMenus()}
            className="navbar-item mr4 self-stretch"
          >
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
            <div className="products-link-box">
              <div
                onClick={() => this.togglePopOver()}
                ref={r => (this.productsRef = r)}
                className={productsLinkClass}
              >
                Products
                <Icon
                  className="products-arrow pl1"
                  style={{ width: "32px" }}
                  img={productsArrow}
                />
              </div>

              <div ref={r => (this.popoverRef = r)}>
                <section className="spacer" />
                {this.state.popOverOpen && (
                  <ProductsPopup closeMenus={this.closeMenus} />
                )}
              </div>
            </div>

            <NavLink
              closeMenus={this.closeMenus}
              url="/our-vision"
              name="Our Vision"
            />
            <NavLink
              closeMenus={this.closeMenus}
              url="/services"
              name="Services"
            />
            <NavLink
              closeMenus={this.closeMenus}
              url="/contact"
              name="Contact"
            />
          </div>
          <div className="navbar-end">
            <div className="navbar-item nav-link navbar-buttons">
              <Button
                type="secondary"
                size="medium"
                icon="slack"
                externalLink="http://slack.overture.bio/"
              >
                Join us on Slack
              </Button>

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
