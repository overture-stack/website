/**
 * NavBar component:
 * subcomponents: ProductsPopup and NavLink
 */
import React, { Component } from "react";
import Link from "gatsby-link";
import logo from "./assets/overture_logo.svg";
import "./styles.scss";
import {Icon} from "../";
import Button from "../Button";
import ProductsPopup from "./Popup";
import NavLink from "./NavLink";

class NavBar extends Component {

  constructor() {
    super();

    // refs for detecting click locations and subsequently hiding/showing the popover.
    this.popoverRef = null;
    this.productsRef = null;
  }

  componentDidMount() {
    let productMenuOpen = this.props.productMenuOpen;
    document.addEventListener("mouseover", this.onMouseMove);
  }

  componentWillUnmount() {
    document.addEventListener("mouseover", this.onMouseMove)
  }

  onMouseMove = (e) => {
    let productMenuOpen = this.props.productMenuOpen

    // Gate to make sure the popover ref has loaded
    if (this.popoverRef == null) return

    // Then, if mouse is NOT in the popover and it's open: close it!
    if (!this.popoverRef.contains(e.target) && productMenuOpen) {
      this.props.closeMenus()

    // If the mouse is on the "Products" button and the menu isn't open: open it!
    } else if (this.productsRef.contains(e.target) && !productMenuOpen) {
      this.props.openMenu()
    }
  }



  render() {
    // Some className bindings for toggling menus and such.
    let productMenuOpen = this.props.productMenuOpen;
    let mobileMenuOpen = this.props.mobileMenuOpen ? "is-active" : "";
    let navbarMenuClass = `navbar-menu ${mobileMenuOpen}`;
    let productsLinkClass = productMenuOpen
      ? "products-link products-link-open navbar-item"
      : "products-link navbar-item";

    let productsMenuClass = "open" // productMenuOpen ? "open" : "closed";

    // mobile menu class
    let burgerClass = `button navbar-burger ${mobileMenuOpen}`;
    let productsArrow = productMenuOpen ? "arrowDown" : "arrowRight";

    return (
      <nav
        className="NavHeader navbar is-fixed-top"
        aria-label="main navigation"
      >
        <div className="nav-container">
          <div className="navbar-brand">
            <Link
              to="/"
              onClick={() => this.props.closeMenus()}
              className="navbar-item navbar-brand-link"
            >
              <img src={logo} />
            </Link>

            <button
              className={burgerClass}
              onClick={() => this.props.toggleMobileMenu()}
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
                <Link
                  onClick={() => this.props.closeMenus()}
                  to="/products"
                  className={productsLinkClass}
                  ref={r => (this.productsRef = r)}
                >
                  Products
                  <Icon
                    className="products-arrow pl1"
                    style={{ width: "32px" }}
                    img={productsArrow}
                  />
                </Link>

                {/* Products Popover Menu + Ref for hiding. */}
                <div ref={r => (this.popoverRef = r)}>
                  {productMenuOpen && (
                  <ProductsPopup
                    className={productsMenuClass}
                    closeMenus={this.props.closeMenus}
                  />
                  )}
                </div>
              </div>

              <NavLink
                closeMenus={this.props.closeMenus}
                url="/case-studies"
                name="Case Studies"
              />

              <NavLink
                closeMenus={this.props.closeMenus}
                url="/about-us"
                name="About Us"
              />
              <NavLink
                closeMenus={this.props.closeMenus}
                url="/services"
                name="Services"
              />
              <NavLink
                closeMenus={this.props.closeMenus}
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
        </div>
      </nav>
    );
  }
}

export default NavBar;
