import React from "react";
import "./styles.scss";

const Badge = ({ children, className, style, color }) => (
  <div
    className={`Badge ${className ? className : ""} ${color}`}
    style={style}
  >
    {children}
  </div>
);

export default Badge;
