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
    megaMenuType: null, // products or docs
    mobileMenuOpen: false,
    popOverRef: null,
  };

  toggleMegaMenu = (type = null) => {
    // there's only one megamenu. the contents are toggled based on type.
    // always set type to null when closing the megamenu.

    // if animation when switching between megamenu types is preferred,
    // add a callback to this setState
    // i.e. close megamenu first, then in the callback, if type, megaMenuOpen: true
    const { megaMenuOpen, megaMenuType } = this.state;
    this.setState({
      megaMenuOpen: !!type ? true : !megaMenuOpen,
      megaMenuType: type,
    });
  };

  openMenu = () => {
    this.setState({ megaMenuOpen: true });
  };

  toggleMobileMenu = () => {
    const { mobileMenuOpen } = this.state;
    // if closing, close the mega menu too.
    if (!mobileMenuOpen) {
      this.setState({
        megaMenuOpen: false,
        megaMenuType: null,
        mobileMenuOpen: !mobileMenuOpen,
      });
    }
    this.setState({ mobileMenuOpen: !mobileMenuOpen });
  };

  closeMenus = () => {
    this.setState({
      megaMenuOpen: false,
      megaMenuType: null,
      mobileMenuOpen: false,
    });
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
    const {
      megaMenuOpen,
      popOverRef,
      megaMenuType,
      mobileMenuOpen,
    } = this.state;
    const { children } = this.props;
    let megaMenuClass = megaMenuOpen ? 'open' : 'closed';

    return (
      <div>
        <Helmet>
          <title>{config.siteTitle}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Navbar
          closeMenus={this.closeMenus}
          megaMenuOpen={megaMenuOpen}
          megaMenuType={megaMenuType}
          mobileMenuOpen={mobileMenuOpen}
          openMenu={this.openMenu}
          popOverRef={popOverRef}
          toggleMegaMenu={this.toggleMegaMenu}
          toggleMobileMenu={this.toggleMobileMenu}
        />

        <div
          className="desktop-products-popup"
          ref={(r) => (this.popOverRef = r)}
        >
          {typeof window !== 'undefined' &&
            !mobileMenuOpen &&
            window.innerWidth > 1216 && (
              <ProductsPopup
                className={megaMenuClass}
                closeMenus={this.closeMenus}
              />
            )}
        </div>

        <div
          onClick={() =>
            this.setState({ megaMenuOpen: false, megaMenuType: null })
          }
        >
          {children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default TemplateWrapper;
