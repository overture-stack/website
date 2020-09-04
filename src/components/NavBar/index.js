/**
 * NavBar component:
 * subcomponents: ProductsPopup and NavLink
 */
import React, { Component } from 'react';
import Link from 'gatsby-link';
import logo from './assets/overture_logo.svg';
import './styles.scss';
import Button from '../Button';
import ProductsPopup from './Popup';
import NavLink from './NavLink';
import MegaMenuLink from './MegaMenuLink';

class NavBar extends Component {
  render() {
    const { megaMenuType } = this.props;

    let mobileMenuOpen = this.props.mobileMenuOpen ? 'is-active' : '';
    let navbarMenuClass = `navbar-menu ${mobileMenuOpen}`;

    let burgerClass = `button navbar-burger ${mobileMenuOpen}`;

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
              <MegaMenuLink
                isActive={megaMenuType === 'products'}
                name="Products"
                toggleMegaMenu={this.props.toggleMegaMenu}
                type="products"
              >
                <div ref={(r) => (this.popoverRef = r)}>
                  {typeof window !== 'undefined' &&
                    mobileMenuOpen &&
                    window.innerWidth < 1216 && (
                      <ProductsPopup
                        className="open"
                        closeMenus={this.props.closeMenus}
                      />
                    )}
                </div>
              </MegaMenuLink>

              <MegaMenuLink
                isActive={megaMenuType === 'docs'}
                name="Documentation"
                toggleMegaMenu={this.props.toggleMegaMenu}
                type="docs"
              >
                <div ref={(r) => (this.popoverRef = r)}>
                  {typeof window !== 'undefined' &&
                    mobileMenuOpen &&
                    window.innerWidth < 1216 && (
                      <ProductsPopup
                        className="open"
                        closeMenus={this.props.closeMenus}
                      />
                    )}
                </div>
              </MegaMenuLink>

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
                  className="slack-button"
                  type="secondary"
                  size="navSlack"
                  icon="slack"
                  externalLink="http://slack.overture.bio/"
                >
                  Join us on Slack
                </Button>

                <Button
                  type="secondary"
                  size="navGithub"
                  externalLink="https://github.com/overture-stack"
                  icon="githubMagenta"
                >
                  Overture Github
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
