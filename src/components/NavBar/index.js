/**
 * Created  on 31/3/18
 */
import React, { Component } from "react";
import Link from "gatsby-link";
import logo from "./overture_logo.svg";
import Badge from "../Badge/index";
import './styles.scss'

const ProductsPopup = () => (
  <div className="ProductsPopup">
    {/* core! */}
    <div className="core flex justify-around">
      <Badge color="pink">Core</Badge>
      <div className="flex">
        <Link className="core-left-link bold" to="/">Ego</Link>
        <Link className="core-left-link bold" to="/">Song</Link>
      </div>
      <div className="flex">
        <Link className="core-left-link bold" to="/">Score</Link>
        <Link className="core-left-link bold" to="/">Indexer</Link>
      </div>
      <a className="bold text-magenta" href="#">Download Core ></a>
    </div>
  </div>
);

class NavBar extends Component {
  state = {
    navOpen: false
  };

  toggleNav() {
    this.setState({ navOpen: !this.state.navOpen });
  }

  render() {
    return (
      <nav className="navbar is-fixed-top" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src={logo} />
          </Link>

          <button className="button navbar-burger" data-target="navMenu">
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className="navbar-menu" id="navMenu">
          
          {this.state.navOpen && <ProductsPopup/>}

          <div className="navbar-start">
            <div className="navbar-item" onClick={() => this.toggleNav()}>
              Products
            </div>

            <Link className="navbar-item" to="/case-studies">
              Case Studies
            </Link>
            <Link className="navbar-item" to="/services">
              Services
            </Link>

            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <Link className="button is-primary is-outlined" to="#">
                    Get Started
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

{
  /* CommentBody 


const NavBar = () => {
  return (
    <nav className="navbar is-fixed-top" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img src={logo}/>
        </Link>

        <button className="button navbar-burger" data-target="navMenu">
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className="navbar-menu" id="navMenu">
        <div className="navbar-start">


          <Link className="navbar-item" to="/products">
            Products
          </Link>

          <Link className="navbar-item" to="/case-studies">
            Case Studies
          </Link>
          <Link className="navbar-item" to="/services">
            Services
          </Link>

          <Link className="navbar-item" to="/contact">
            Contact
          </Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <Link className="button is-primary is-outlined" to="#">
                  Get Started
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
*/
}

export default NavBar;
