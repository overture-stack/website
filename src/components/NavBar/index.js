/**
 * NavBar component:
 * subcomponents: MegaMenu and NavLink
 */
import React, { Component } from 'react';
import Link from 'gatsby-link';
import logo from './assets/overture_logo.svg';
import './styles.scss';
import Button from '../Button';
import MegaMenu from './MegaMenu';
import NavLink from './NavLink';
import MegaMenuLink from './MegaMenuLink';
import { SHOW_DOCS } from '../../constants';

class NavBar extends Component {
  render() {
    const {
      closeMenus,
      megaMenuType,
      mobileMenuOpen,
      toggleMegaMenu,
      toggleMobileMenu,
    } = this.props;

    let mobileMenuClass = mobileMenuOpen ? 'is-active' : '';
    let navbarMenuClass = `navbar-menu ${mobileMenuClass}`;
    let burgerClass = `button navbar-burger ${mobileMenuClass}`;
    const mobileMegaCheck =
      typeof window !== 'undefined' &&
      mobileMenuOpen &&
      window.innerWidth < 1216;

    return (
      <nav
        className="NavHeader navbar is-fixed-top"
        aria-label="main navigation"
      >
        <div className="nav-container">
          <div className="navbar-brand">
            <Link
              to="/"
              onClick={() => closeMenus()}
              className="navbar-item navbar-brand-link"
            >
              <img src={logo} alt="Overture.bio homepage" />
            </Link>

            <button className={burgerClass} onClick={() => toggleMobileMenu()}>
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
                toggleMegaMenu={toggleMegaMenu}
                type="products"
              >
                <div ref={(r) => (this.popoverRef = r)}>
                  {mobileMegaCheck && (
                    <MegaMenu className="open" megaMenuType="products" />
                  )}
                </div>
              </MegaMenuLink>

              {SHOW_DOCS && (
                <MegaMenuLink
                  isActive={megaMenuType === 'docs'}
                  name="Documentation"
                  toggleMegaMenu={toggleMegaMenu}
                  type="docs"
                >
                  <div ref={(r) => (this.popoverRef = r)}>
                    {mobileMegaCheck && (
                      <MegaMenu className="open" megaMenuType="docs" />
                    )}
                  </div>
                </MegaMenuLink>
              )}

              <NavLink
                closeMenus={closeMenus}
                url="/case-studies"
                name="Case Studies"
              />

              <NavLink
                closeMenus={closeMenus}
                url="/about-us"
                name="About Us"
              />
              <NavLink
                closeMenus={closeMenus}
                url="/services"
                name="Services"
              />
              <NavLink closeMenus={closeMenus} url="/contact" name="Contact" />
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
