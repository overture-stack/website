/**
 * Component: Navigation Link used in Navbar
 */

import React from 'react'
import Link from 'gatsby-link'

const NavLink = ({ url, name, closeMenus }) => {
  return (
    <Link
      className="navbar-item nav-link"
      activeClassName="active-item"
      onClick={() => closeMenus()}
      to={url}
    >
      {name}
    </Link>
  )
}

export default NavLink
