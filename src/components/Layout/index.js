// This component handles site wide layouts.  (new to Gatsby 2.0)
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Footer, NavBar, MegaMenu } from 'components';
import config from 'meta/config';
import 'styles/main.scss';

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

  closeMegaMenu = () => {
    // close megamenu FIRST
    // then change type to null in a callback
    // for smoother animation
    this.setState({ megaMenuOpen: false }, () => {
      setTimeout(() => {
        // delay for 0.5s CSS animation
        this.setState({ megaMenuType: null });
      }, 500);
    });
  };

  openMegaMenu = megaMenuType => {
    // set type FIRST
    // then open the menu in a callback
    // for smoother animation
    this.setState({ megaMenuType }, () => {
      // no animation delay needed
      this.setState({ megaMenuOpen: true });
    });
  };

  toggleMegaMenu = (type = null) => {
    const { megaMenuType } = this.state;

    // close the megamenu if user clicks button for
    // the currently open megamenu
    const typeIsActive = type && type === megaMenuType;
    if (!type || typeIsActive) {
      this.closeMegaMenu();
    } else {
      this.openMegaMenu(type);
    }
  };

  closeMenus = () => {
    this.closeMegaMenu();
    this.setState({
      mobileMenuOpen: false,
    });
  };

  toggleMobileMenu = () => {
    const { mobileMenuOpen } = this.state;

    // close megamenu if closing mobile menu
    if (mobileMenuOpen) {
      this.closeMenus();
    } else {
      this.setState({
        mobileMenuOpen: true,
      });
    }
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
    const { megaMenuOpen, popOverRef, megaMenuType, mobileMenuOpen } = this.state;
    const { children, path } = this.props;
    const megaMenuClass = megaMenuOpen ? 'open' : 'closed';
    const desktopMegaMenuCheck =
      typeof window !== 'undefined' && !mobileMenuOpen && window.innerWidth > 1160;

    return (
      <div>
        <Helmet>
          <title>{config.siteTitle}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <NavBar
          closeMenus={this.closeMenus}
          megaMenuOpen={megaMenuOpen}
          megaMenuType={megaMenuType}
          mobileMenuOpen={mobileMenuOpen}
          path={path}
          popOverRef={popOverRef}
          toggleMegaMenu={this.toggleMegaMenu}
          toggleMobileMenu={this.toggleMobileMenu}
        />

        {/* desktop megamenu */}
        <div className="desktop-megamenu" ref={r => (this.popOverRef = r)}>
          {desktopMegaMenuCheck && (
            <MegaMenu
              closeMenus={this.closeMenus}
              className={megaMenuClass}
              megaMenuType={megaMenuType}
              path={path}
            />
          )}
        </div>

        <div className="site-wrapper">
          <div onClick={() => this.closeMegaMenu()} className="site-wrapper__content">
            {children}
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default TemplateWrapper;
