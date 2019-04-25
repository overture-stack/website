/**
 * NavBar component:
 * subcomponents: ProductsPopup and NavLink
 */
import React, { Component } from "react";
import Link from "gatsby-link";
import logo from "./assets/overture_logo.svg";
import "./styles.scss";
import Icon from "../Icon/index";
import Button from "../Button";
import ProductsPopup from "./Popup";
import NavLink from "./NavLink";

class NavBar extends Component {
  constructor() {
    super();
    this.popoverRef = null
    this.productsRef = null;
  }

  state = {
    productMenuOpen: false,
    mobileMenuOpen: false
  };

  /* Several Open/Close menu methods for desktop and mobile: */

  closeMenus = () => {
    this.setState({ productMenuOpen: false, mobileMenuOpen: false });
  };

  toggleProductMenu = () => {
    this.setState({ productMenuOpen: !this.state.productMenuOpen });
  };

  toggleMobileMenu = () => {
    this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen });
  };

  render() {

    // Some classNAme bindings for toggling menus and such.
    let mobileMenuOpen = this.state.mobileMenuOpen ? "is-active" : "";
    let navbarMenuClass = `navbar-menu ${mobileMenuOpen}`;
    let productsLinkClass = this.state.productMenuOpen
        ? "products-link products-link-open navbar-item"
        : "products-link navbar-item";

    let productsMenuClass = this.state.productMenuOpen ? "open" : "closed"

    // mobile menu class
    let burgerClass = `button navbar-burger ${mobileMenuOpen}`;
    let productsArrow = this.state.productMenuOpen ? "arrowDown" : "arrowRight";

    return (
      <nav
        className="NavHeader navbar is-fixed-top"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link
            to="/"
            onClick={() => this.closeMenus()}
            className="navbar-item navbar-brand-link"
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
                onClick={() => this.toggleProductMenu()}
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

              <ProductsPopup className={productsMenuClass} closeMenus={this.closeMenus} />
            </div>

            <NavLink
              closeMenus={this.closeMenus}
              url="/case-studies"
              name="Case Studies"
            />

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
                className="slack-button mr1"
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
