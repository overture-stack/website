/**
 * A button that basically wraps the Bulma styles via props: size, type, etc.
 */
import React from "react";
import Icon from "../Icon/index";
import "./styles.scss";

/**
 * wrapper types and sizes from bulma classes and applying through props, although this
 * also allows for custom styling escape hatches if needed vis ./styles.scss
 */
const btnTypes = {
  // Bulma classes:
  primary: "is-primary",
  default: ""
  // custom classes:
};

const btnSizes = {
  // Bulma classes
  large: "is-large",
  medium: "is-medium",
  small: "is-small",
  default: ""
  // put custom classes here:
};

// Icon sizes vary based on passed in button size prop.
const iconSizes = {
  large: 32,
  medium: 24,
  small: 16,
  default: 16
};

/**
 * Button component basically providing an api to bulma's button stylings.
 * Passing in props like `type` or `size` map to bulma's classes above
 * but can also provide an escape hatch to style the button with our custom scss.
 * Passing an icon prop will add an <Icon> component, who's size is determined by size prop.
 * Can have internal / external links. TODO: make internal links gatsby links.
 * Props for dayyyyyyys woop woop!
 */
export default ({
  icon,
  className,
  iconStyle,
  children,
  type = "default",
  size = "default",
  externalLink,
  internalLink
}) => {
  let classes = `button ${btnTypes[type]} ${btnSizes[size]} ${className}`;

  return (
    <a
      className={classes}
      target={internalLink ? "_self" : "_blank"}
      href={externalLink || internalLink}
    >
      {icon && (
        <Icon
          className="mr2"
          style={iconStyle}
          size={iconSizes[size]}
          img={icon}
        />
      )}
      {children}
    </a>
  );
};
