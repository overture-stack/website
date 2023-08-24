/**
 * NavBar component:
 * subcomponents: MegaMenu and NavLink
 */
import React, { Component } from 'react';
import './styles.scss';
import MegaMenu from './MegaMenu';
import MegaMenuLink from './MegaMenuLink';
import NavLink from './NavLink';
import { Button, LinkHelper as Link } from 'components';
import {
  ABOUT_US_PATH,
  CASE_STUDIES_PATH,
  COMMUNITY_PATH,
  DOCUMENTATION_PATH,
  HOME_PATH,
  PRODUCTS_PATH,
  SERVICES_PATH,
} from 'constants/pages';
import { SLACK_LINK } from 'constants/external-links';
import logo from './assets/overture_logo.svg';
import cubeChartreuse from '../../pages/home/assets/cube_chartreuse.svg';
import cubeTealBlue from '../../pages/home/assets/cube_teal_blue.svg';
import cubeBrightTeal from '../../pages/home/assets/cube_bright_teal.svg';
import './styles.scss';

class NavBar extends Component {
  render() {
    const { closeMenus, megaMenuType, mobileMenuOpen, path, toggleMegaMenu, toggleMobileMenu } =
      this.props;

    let mobileMenuClass = mobileMenuOpen ? 'is-active' : '';
    let navbarMenuClass = `navbar-menu ${mobileMenuClass}`;
    let burgerClass = `button navbar-burger ${mobileMenuClass}`;
    const mobileMegaCheck =
      typeof window !== 'undefined' && mobileMenuOpen && window.innerWidth < 1216;

    return (
      <nav className="NavHeader navbar is-fixed-top" aria-label="main navigation">
        <div className="nav-container">
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
              <NavLink closeMenus={closeMenus} url={PRODUCTS_PATH} name="Products" />
              <MegaMenuLink
                isActive={megaMenuType === 'documentation'}
                name="Documentation"
                path={path}
                toggleMegaMenu={toggleMegaMenu}
                type="documentation"
              >
                <div ref={(ref) => (this.popoverRef = ref)}>
                  {mobileMegaCheck && (
                    <MegaMenu
                      className="open"
                      closeMenus={closeMenus}
                      megaMenuType="documentation"
                      path={path}
                    />
                  )}
                </div>
              </MegaMenuLink>
              <NavLink closeMenus={closeMenus} url={CASE_STUDIES_PATH} name="Case Studies" />
              <NavLink closeMenus={closeMenus} url={COMMUNITY_PATH} name="Community" />
              <NavLink closeMenus={closeMenus} url={SERVICES_PATH} name="Services" />
              <NavLink closeMenus={closeMenus} url={ABOUT_US_PATH} name="About Us" />
            </div>
            {/* grey section with three cubes */}
            <div
              className={`navbar-mid bg-grey ${
                megaMenuType === 'documentation' ? 'is-active' : ''
              }`}
            >
              <div className="teal-blue-chartreuse-cubes-holder">
                {/* floating blue teal cube */}
                <img
                  src={cubeTealBlue}
                  alt="Floating Blueish Teal Cube"
                  className="teal-blue-cube"
                />
                {/* floating yellowish cube */}
                <img
                  src={cubeChartreuse}
                  alt="Floating Yellowish Green Cube"
                  className="chartreuse-cube"
                />
              </div>
              {/* floating bright green teal cube */}
              <div className="bright-teal-cube-holder">
                <img
                  src={cubeBrightTeal}
                  alt="Floating Bright Teal Cube"
                  className="bright-teal-cube"
                />
              </div>
            </div>
            <div className="navbar-end ">
              <div className="navbar-item nav-link navbar-buttons">
                <Button
                  iconAlt="slack logo"
                  className="slack-button"
                  icon="slackNew"
                  link={SLACK_LINK}
                  size="navSlack"
                  type="secondary"
                >
                  Join us on Slack
                </Button>

                <Button link={DOCUMENTATION_PATH} size="medium" type="primary">
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
