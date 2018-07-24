/**
 * Vert  = Vertical
 * Horiz = Horizontal
 * Setting images via css backgrounds: easier to manage responsivity.
 */
import React from "react";
import "./styles.scss";

import betaVert from "./svgs/BETA-vert.svg";
import betaHoriz from "./svgs/BETA-horiz.svg";
import gaVert from "./svgs/GA-vert.svg";
import gaHoriz from "./svgs/GA-horiz.svg";
import rcVert from "./svgs/RC-vert.svg";
import rcHoriz from "./svgs/RC-horiz.svg";
import udVert from "./svgs/UD-vert.svg";
import udHoriz from "./svgs/UD-horiz.svg";

// const bars = { beta, ga, rc, ud };

const ProgressBar = ({ type }) => (
  <div className={`Progress-Bar Progress-Bar-${type}`} />
);

export default ProgressBar;
