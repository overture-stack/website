/**
 * Component: Navigation Link used in NavBar
 */

import React from 'react';
import { LinkHelper as Link } from 'components';

const NavLink = ({ url, name, closeMenus }) => {
  return (
    <Link className="navbar-item nav-link" onClick={() => closeMenus()} to={url}>
      {name}
    </Link>
  );
};

export default NavLink;
