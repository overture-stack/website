import React from "react";
import Icon from "../Icon/index";
import { Link } from "gatsby"
import "./styles.scss";

const btnTypes = {
  primary: "is-primary", // uses bulma
  secondary: "is-white secondary" // bulma + custom css
};

const btnSizes = {
  // Bulma classes
  large: "is-large",
  medium: "is-medium",
  small: "is-small",
  default: ""
};

// Icon sizes vary based on passed in button size prop.
const iconSizes = {
  large: 32,
  medium: 24,
  small: 16,
  default: 16
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
  icon,
  className,
  iconStyle,
  children,
  type = "default",
  size = "default",
  externalLink,
  internalLink,
  target = "_blank"
}) => {
  let customClassName = className ? className : "";
  let classes = `button ${btnTypes[type]} ${btnSizes[size]} ${customClassName}`;
  let IconComp = () => {
    if (icon) {
      return (
        <Icon
          className="mr2"
          style={iconStyle}
          size={iconSizes[size]}
          img={icon}
        />
      );
    }
  };

  // If we have an external link, make the button wrap with an <a>
  if (externalLink) {
    return (
      <button className="custom-button">
        <a
          className={classes}
          target={target}
          href={externalLink}
        >
          {IconComp()}
          {children}
        </a>
      </button>
    );
  } else if (internalLink) {
    return (
      <button className="custom-button">
        <Link className={classes} to={internalLink}>
          {IconComp()}
          {children}
        </Link>
      </button>
    );
  }
};
