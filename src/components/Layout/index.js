// This component handles site wide layouts.  (new to Gatsby 2.0)
import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import config from "../../../meta/config";
import "../../styles/main.scss";

class TemplateWrapper extends Component {
  state = {
    productMenuOpen: false,
    mobileMenuOpen: false
  };

  toggleMenu = () => {
    this.setState({ productMenuOpen: !this.state.productMenuOpen });
  };

  openMenu = () => {
    this.setState({productMenuOpen: true})
  }

  toggleMobileMenu = () => {
    this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen });
  };

  closeMenus = () => {
    this.setState({ productMenuOpen: false, mobileMenuOpen: false });
  };

  render() {
    let { productMenuOpen, mobileMenuOpen } = this.state;
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
        />
        <div onClick={() => this.setState({ productMenuOpen: false })}>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default TemplateWrapper;
