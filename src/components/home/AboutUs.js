import React from 'react';
import { withState } from 'recompose';
import Link from 'gatsby-link';
import Waypoint from 'react-waypoint';
import styled, { css } from 'react-emotion';

import colors from 'common/colors';
import { container } from 'common/layout';
import BoxyImage from './BoxyImage';

const Illustration = withState('shouldAnimate', 'setShouldAnimate', false)(
  ({ shouldAnimate, setShouldAnimate }) => (
    <Waypoint onEnter={() => !shouldAnimate && setShouldAnimate(true)}>
      <a name="about-us">
        <BoxyImage
          className={css`
            position: absolute;
            bottom: 0;
            width: 180px;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
          `}
          shouldAnimate={shouldAnimate}
        />
      </a>
    </Waypoint>
  ),
);

const moreAboutUs = css`
  width: 18em;
`;

const AboutUs = ({}) => (
  <div
    className={css`
      position: relative;
      background-color: #f2f3f5;
      padding: 100px 0;
      color: ${colors.blueDark};
      overflow: hidden;
    `}
  >
    <Illustration />
    <div
      className={css`
        ${container};
        display: flex;
        flex-direction: row;
        position: relative;
      `}
    >
      <div
        className={css`
          width: 11.7em;
          font-size: 50px;
          flex-grow: 0;
        `}
      >
        <h2
          className={css`
            font-size: 16px;
            font-weight: 700;
          `}
        >
          About us
        </h2>
        <p
          className={css`
            line-height: 1.2;
          `}
        >
          We created Overture to share with the community, components actively
          used in our projects.
        </p>
      </div>
      <div
        className={css`
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          line-height: 1.5;
          padding-top: 0.5em;
        `}
      >
        <p className={moreAboutUs}>
          Overture is created using OICR’s experience in building large scale
          infrastructures, big data ETL and portals supporting genomic research.
        </p>
        <p className={moreAboutUs}>
          Built to be re-usable and scalable, Overture’s components are well
          documented, actively supported and welcome external feedback and
          contributions.
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
