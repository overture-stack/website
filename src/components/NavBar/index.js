/**
 * Created  on 31/3/18
 */
import React from 'react'
import Link from 'gatsby-link'

const NavBar = () => {
  return (
    <nav className="navbar is-fixed-top" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          Overture Logo
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

export default NavBar
