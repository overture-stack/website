import React from "react";
import "./styles.scss";
import Icon from "../Icon/index";

/**
 * A target icon with potential header and details text block.
 * Sometimes (oncojs page) we just have a target + details.
 * So; not passing a header prop will place details directly next to target icon.
*/
const ProductTarget = ({ header, details, className, icon="target" }) => (
  <div className={`ProductTarget ${className ? className : ""}`}>
    <div className="flex items-center py2">
      {/* Icon */}
      <Icon img={icon} size={32} />

      {/* header */}
      {header ? (
        <div className="target-header">{header}</div>
      ) : (
        <div className="ml2 details">{details}</div>
      )}
    </div>

    {/* feature */}
  {header && <div className="details"
   dangerouslySetInnerHTML={{ __html: details }} ></div>}
  </div>
);

export default ProductTarget;
