// This component handles site wide layouts.  (new to Gatsby 2.0)
import React, { Component } from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import { Footer, Icon, NavBar, MegaMenu, Search, SidebarMenu } from 'components';
import config from 'meta/config';
import productsDict from 'meta/products-dict';
import 'styles/main.scss';

const SHOW_DOCS = process.env.GATSBY_SHOW_DOCS === 'true';
const searchIndex = process.env.GATSBY_ALGOLIA_INDEX_NAME;
const searchIndices = [{ name: searchIndex, title: searchIndex }];

class TemplateWrapper extends Component {
  constructor() {
    super();
    this.popOverRef;
  }

  state = {
    megaMenuOpen: false,
    megaMenuType: null, // products or docs
    mobileMenuOpen: false,
    mobileSidebarOpen: true,
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

  toggleMobileSidebar = () => {
    console.log('test');
    const { mobileSidebarOpen } = this.state;
    console.log(mobileSidebarOpen);
    this.setState({ mobileSidebarOpen: !mobileSidebarOpen });
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
      megaMenuType,
      mobileMenuOpen,
      mobileSidebarOpen,
      popOverRef,
    } = this.state;
    const { children, data = {}, path } = this.props;
    const megaMenuClass = megaMenuOpen ? 'open' : 'closed';
    const desktopMegaMenuCheck =
      typeof window !== 'undefined' && !mobileMenuOpen && window.innerWidth > 1160;
    const isDocs = path.indexOf('/documentation/') === 0;
    const docsSectionSlug = isDocs && data.mdx.fields.sectionSlug;
    const docsSectionTitle = isDocs && productsDict[docsSectionSlug].title;

    const isMobileSidebarActive = false;

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
            {isDocs && SHOW_DOCS ? (
              <main className="docs__page">
                <div className="docs__mobile-sidebar__button">
                  <button
                    type="button"
                    className={`button navbar-burger ${mobileSidebarOpen ? 'is-active' : ''}`}
                    onClick={this.toggleMobileSidebar}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div>
                <div className="docs__header">
                  <div className="docs__header-title">
                    <Icon
                      className="icon"
                      size={45}
                      img={productsDict[docsSectionSlug].iconWhite}
                    />
                    <h1>{docsSectionTitle} Documentation</h1>
                  </div>
                  <div className="docs__header-search">
                    <Search indices={searchIndices} />
                  </div>
                </div>
                <div className="docs__columns">
                  {/* SECTION TABLE OF CONTENTS */}
                  <div
                    className={`docs__sidebar docs__mobile-sidebar  ${
                      mobileSidebarOpen ? 'docs__mobile-sidebar__active' : ''
                    }`}
                  >
                    <SidebarMenu />
                    <div className="docs__sidebar__sticky">
                      <Link to="/documentation/" className="docs__sidebar__overview">
                        <Icon size={6} img="arrowLeftBlue" />
                        Documentation Overview
                      </Link>
                      {/* <SectionTableOfContents
                        pages={sectionObj.pages}
                        path={path}
                        sectionSlug={sectionSlug}
                      />*/}
                    </div>
                  </div>
                  {children}
                </div>
              </main>
            ) : (
              children
            )}
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default TemplateWrapper;
