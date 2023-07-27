import React from 'react';
import { Icon, LinkHelper as Link } from 'components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import './styles.scss';

const btnTypes = {
  primary: 'button is-primary', // uses bulma
  secondary: 'button is-white secondary', // bulma + custom css
  plain: 'plain',
};

const btnSizes = {
  // Bulma classes
  default: '',
  large: 'is-large',
  medium: 'is-medium',
  navGithub: 'is-medium',
  navSlack: 'is-medium',
  small: 'is-small',
  default: '',
};

// Icon sizes vary based on passed in button size prop.
const iconSizes = {
  default: 16,
  large: 32,
  medium: 24,
  navGithub: 20,
  navSlack: 22,
  small: 16,
  default: 16,
};

/**
 * Component: Button
 * Wraps several of Bulma's classes for easier styling, but can be swapped out
 * with custom styles (see above objects.)
 *
 * Example usage:
 * <Button size="large" type="primary"/>
 * ^ will maps the props to the objects above to determing the style of the button.
 *
 */
export default ({
  anchorLink,
  children,
  className = '',
  icon,
  iconAlt = '',
  iconStyle,
  link = '',
  onClick = '',
  size = 'default',
  type = 'default',
}) => {
  const classes = `custom-button ${btnTypes[type]} ${btnSizes[size]} ${className}`;
  const IconComp = () =>
    icon && (
      <Icon alt={iconAlt} className="mr2" style={iconStyle} size={iconSizes[size]} img={icon} />
    );

  return onClick ? (
    <button className={classes} onClick={() => onClick()} type="button">
      {IconComp()}
      {children}
    </button>
  ) : anchorLink ? (
    <AnchorLink className={classes} to={anchorLink}>
      {IconComp}
      {children}
    </AnchorLink>
  ) : (
    <Link className={classes} to={link}>
      {IconComp()}
      {children}
    </Link>
  );
};
