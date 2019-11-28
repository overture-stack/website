/**
 * NavBar component:
 * subcomponents: ProductsPopup and NavLink
 */
import React, { Component } from 'react'
import Link from 'gatsby-link'
import logo from './assets/overture_logo.svg'
import './styles.scss'
import { Icon } from '../'
import Button from '../Button'
import ProductsPopup from './Popup'
import NavLink from './NavLink'

class NavBar extends Component {
  constructor() {
    super()
    // ref for detecting click locations and subsequently hiding/showing the popover.
    this.productsRef = null
  }

  componentDidMount() {
    // document.addEventListener('mouseover', this.onMouseMove)
  }

  componentWillUnmount() {
    // document.removeEventListener('mouseover', this.onMouseMove)
  }


  /**
   * Not currently in use.
   * Used for opening "Product" popup on mouse over rather than click.
   */
  onMouseMove = e => {
    let productMenuOpen = this.props.productMenuOpen
    let popOverRef = this.props.popOverRef
    // Disregard if on mobile / using mobile menu.
    if (typeof window !== 'undefined' && window.innerWidth < 1168) return

    // Gate to make sure the popover ref has loaded
    if (popOverRef == null || this.productsRef == null) return

    // Then, if mouse is NOT in the popover and it's open: close it!
    if (!popOverRef.contains(e.target) && productMenuOpen) {
      this.props.closeMenus()

      // If the mouse is on the "Products" button and the menu isn't open: open it!
    } else if (this.productsRef.contains(e.target) && !productMenuOpen) {
      this.props.openMenu()
    }
  }

  render() {
    // Some className bindings for toggling menus and such.
    let productMenuOpen = this.props.productMenuOpen


    // Conditional Classes
    let mobileMenuOpen = this.props.mobileMenuOpen ? 'is-active' : ''
    let navbarMenuClass = `navbar-menu ${mobileMenuOpen}`
    let productsLinkClass = productMenuOpen
      ? 'products-link products-link-open navbar-item'
      : 'products-link navbar-item'
    let productsArrowClass = productMenuOpen
      ? 'products-arrow open' : 'products-arrow closed'
    let productsMenuClass = productMenuOpen ? 'open' : 'closed'
    let productsArrow = productMenuOpen ? 'arrowDown' : 'arrowRight'

    let burgerClass = `button navbar-burger ${mobileMenuOpen}`

    let windowExists = typeof(window) === "undefined"

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
              <div className="products-link-box">
                <div style={{flex: "1", display: "flex"}}>
                  <div
                    className={productsLinkClass}
                    style={{display: "flex", flex: 1}}
                    ref={r => (this.productsRef = r)}
                    onClick={() => this.props.toggleMenu()}
                  >
                    Products
                  </div>

                  <div className={"flex"} onClick={() => this.props.toggleMenu()}>
                    <Icon
                      className={`${productsArrowClass} pl1`}
                      style={{ width: "32px", height: "100%"  }}
                      img={productsArrow}
                    />
                  </div>
                </div>

                {/* MOBILE: Products Menu + Ref for hiding. */}
                <div ref={r => (this.popoverRef = r)}>

                  {(typeof window !== 'undefined' && mobileMenuOpen && window.innerWidth < 1216) && (
                  /* {(windowExists && mobileMenuOpen && window.innerWidth < 1216) && ( */
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
    )
  }
}

export default NavBar
