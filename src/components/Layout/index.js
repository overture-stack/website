// This component handles site wide layouts.  (new to Gatsby 2.0)
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Navbar from '../../components/NavBar';
import ProductsPopup from '../../components/NavBar/Popup';
import Footer from '../../components/Footer';
import config from '../../../meta/config';
import '../../styles/main.scss';

console.log(
  "SHOW_DOCS (feature flag) expecting 'true' on QA, 'false' on prod\n",
  process.env.GATSBY_SHOW_DOCS,
  "\nNODE_ENV (Gatsby environment) expecting 'production'\n",
  process.env.NODE_ENV,
  "\nGATSBY_LOCAL_TEST (checking .env file for local secrets) expecting 'local' when built locally, 'undefined' when built by netlify\n",
  process.env.GATSBY_LOCAL_TEST
);

class TemplateWrapper extends Component {
  constructor() {
    super();
    this.popOverRef;
  }

  state = {
    productMenuOpen: false,
    mobileMenuOpen: false,
    popOverRef: null,
  };

  toggleMenu = () => {
    this.setState({ productMenuOpen: !this.state.productMenuOpen });
  };

  openMenu = () => {
    this.setState({ productMenuOpen: true });
  };

  toggleMobileMenu = () => {
    // if closing, close the product menu too.
    if (this.state.mobileMenuOpen === false) {
      this.setState({
        mobileMenuOpen: !this.state.mobileMenuOpen,
        productMenuOpen: false,
      });
    }
    this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen });
  };

  closeMenus = () => {
    this.setState({ productMenuOpen: false, mobileMenuOpen: false });
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
    let productMenuOpen = this.state.productMenuOpen;
    let mobileMenuOpen = this.state.mobileMenuOpen ? 'is-active' : '';
    let productsMenuClass = productMenuOpen ? 'open' : 'closed';
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
          productMenuOpen={this.state.productMenuOpen}
          mobileMenuOpen={this.state.mobileMenuOpen}
          toggleMenu={this.toggleMenu}
          toggleMobileMenu={this.toggleMobileMenu}
          popOverRef={this.state.popOverRef}
        />

        <div className="desktop-products-popup" ref={r => (this.popOverRef = r)}>
          {typeof window !== 'undefined' && !this.state.mobileMenuOpen && window.innerWidth > 1216 && (
            /* {(windowExists && !this.state.mobileMenuOpen && window.innerWidth > 1216) && ( */
            <ProductsPopup className={productsMenuClass} closeMenus={this.props.closeMenus} />
          )}
        </div>

        <div onClick={() => this.setState({ productMenuOpen: false })}>{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

export default TemplateWrapper;
