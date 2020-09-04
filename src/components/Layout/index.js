// This component handles site wide layouts.  (new to Gatsby 2.0)
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Navbar from '../../components/NavBar';
import ProductsPopup from '../../components/NavBar/Popup';
import Footer from '../../components/Footer';
import config from '../../../meta/config';
import '../../styles/main.scss';

class TemplateWrapper extends Component {
  constructor() {
    super();
    this.popOverRef;
  }

  state = {
    megaMenuOpen: false,
    mobileMenuOpen: false,
    popOverRef: null,
  };

  toggleMenu = () => {
    this.setState({ megaMenuOpen: !this.state.megaMenuOpen });
  };

  openMenu = () => {
    this.setState({ megaMenuOpen: true });
  };

  toggleMobileMenu = () => {
    // if closing, close the mega menu too.
    if (this.state.mobileMenuOpen === false) {
      this.setState({
        mobileMenuOpen: !this.state.mobileMenuOpen,
        megaMenuOpen: false,
      });
    }
    this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen });
  };

  closeMenus = () => {
    this.setState({ megaMenuOpen: false, mobileMenuOpen: false });
  };

  componentDidMount() {
    this.setState({ popOverRef: this.popOverRef });
  }

  /**
   * There is a bit of hacking going on here. We have to use refs
   * to get access to the product menu bar so that we can detect when the
   * mouse is in/out side the box (as the menu is triggered on hover).
   * All mouse events happen inside navbar/index.js as the event of the
   * menu showing begins with the mouse over of the "Products" link.

   * However, in order to get the menu to "slide down" "under" the nav bar
   * it has to be a parallel fixed component and not an actual child element
   * of the <NavBar/>.
   * So we store the ref of the product menu in state so it can be passed to
   * NavBar and operated on by event listeners.
   *
   * All in all, there's probably a more elegant way to do this. ¯\_(ツ)_/¯
   */
  render() {
    let megaMenuOpen = this.state.megaMenuOpen;
    let mobileMenuOpen = this.state.mobileMenuOpen ? 'is-active' : '';
    let megaMenuClass = megaMenuOpen ? 'open' : 'closed';
    let windowExists = typeof window === 'undefined';

    return (
      <div>
        <Helmet>
          <title>{config.siteTitle}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Navbar
          closeMenus={this.closeMenus}
          openMenu={this.openMenu}
          megaMenuOpen={this.state.megaMenuOpen}
          mobileMenuOpen={this.state.mobileMenuOpen}
          toggleMenu={this.toggleMenu}
          toggleMobileMenu={this.toggleMobileMenu}
          popOverRef={this.state.popOverRef}
        />

        <div
          className="desktop-products-popup"
          ref={(r) => (this.popOverRef = r)}
        >
          {typeof window !== 'undefined' &&
            !this.state.mobileMenuOpen &&
            window.innerWidth > 1216 && (
              /* {(windowExists && !this.state.mobileMenuOpen && window.innerWidth > 1216) && ( */
              <ProductsPopup
                className={megaMenuClass}
                closeMenus={this.props.closeMenus}
              />
            )}
        </div>

        <div onClick={() => this.setState({ megaMenuOpen: false })}>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default TemplateWrapper;
