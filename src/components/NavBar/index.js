/**
 * NavBar component:
 * subcomponents: MegaMenu and NavLink
 */
import React, { Component } from 'react';
import NavLink from './NavLink';
import { Button, LinkHelper as Link } from 'components';
import {
  ABOUT_US_PATH,
  CASE_STUDIES_PATH,
  GETTING_STARTED_PATH,
  HOME_PATH,
  PRODUCTS_PATH,
  SERVICES_PATH,
} from 'constants/pages';
import logo from './assets/overture_logo.svg';
import './styles.scss';
import {
  DOCUMENTATION_LINK,
  OVERTURE_GITHUB_LINK,
} from '../../../constants/external-links';

class NavBar extends Component {
  render() {
    const { closeMenus, megaMenuType, mobileMenuOpen, toggleMobileMenu } =
      this.props;

    let mobileMenuClass = mobileMenuOpen ? 'is-active' : '';
    let navbarMenuClass = `navbar-menu ${mobileMenuClass}`;
    let burgerClass = `button navbar-burger ${mobileMenuClass}`;
    const mobileMegaCheck =
      typeof window !== 'undefined' &&
      mobileMenuOpen &&
      window.innerWidth < 1216;

    return (
      <nav
        className={`NavHeader ${mobileMenuClass} navbar is-fixed-top `}
        aria-label="main navigation"
      >
        <div className={`nav-container ${mobileMenuClass}`}>
          <div className="navbar-brand">
            <Link
              to={HOME_PATH}
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
              <NavLink
                closeMenus={closeMenus}
                url={PRODUCTS_PATH}
                name="Products"
              />
              <NavLink
                closeMenus={closeMenus}
                url={DOCUMENTATION_LINK}
                name="Documentation"
              />
              <NavLink
                closeMenus={closeMenus}
                url={CASE_STUDIES_PATH}
                name="Case Studies"
              />
              {/* <NavLink closeMenus={closeMenus} url={COMMUNITY_PATH} name="Community" /> */}
              <NavLink
                closeMenus={closeMenus}
                url={SERVICES_PATH}
                name="Services"
              />
              <NavLink
                closeMenus={closeMenus}
                url={ABOUT_US_PATH}
                name="About Us"
              />
            </div>
            {/* grey section with three cubes */}
            <div className="navbar-end ">
              <div className="navbar-item nav-link navbar-buttons">
                <Button
                  link={OVERTURE_GITHUB_LINK}
                  iconAlt="slack logo"
                  className="github-button"
                  icon="githubMagenta"
                  size="large"
                  type="secondary"
                >
                  Check us out on GitHub
                </Button>

                <Button
                  link={GETTING_STARTED_PATH}
                  size="medium"
                  type="primary"
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
