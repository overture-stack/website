import React from 'react';
import Link from 'gatsby-link';
import styled, { css } from 'react-emotion';

import { containerMaxWidth } from 'common/dimensions';
import { container, slimContainer } from 'common/layout';
import colors from 'common/colors';
import Header from 'components/Header';
import Intro from 'components/song/Intro';

import KeyPoint from 'components/product/KeyPoint';
import SecondaryPoint from 'components/product/SecondaryPoint';
import GetStarted from 'components/GetStarted';
import StorageSystem from 'components/StorageSystem';
import GettingStarted from 'components/GettingStarted';

const Song = () => (
  <React.Fragment>
    <Header />
    <Intro />
    <div
      className={
        `key-points ` +
        css`
          ${container};
          display: flex;
          margin-top: 150px;
          margin-bottom: 150px;
          .key-point {
            flex-basis: calc(100% / 3);
          }
        `
      }
    >
      <KeyPoint
        iconSrc={require('assets/icons/bars.svg')}
        title={`Scalable`}
        body={`Designed to handle the volume of your requests in an efficient and timely manner.`}
      />

      <KeyPoint
        iconSrc={require('assets/icons/download.svg')}
        title={`Easy to adopt`}
        body={`Relying on a standard REST API. Get started running SONG with  two Docker commands.`}
      />

      <KeyPoint
        iconSrc={require('assets/icons/checkmark.svg')}
        title={`Accurate and Efficient`}
        body={`Specifically designed to track genome data, SONG tracks and validates your submissions.`}
      />
    </div>
    <div className={`secondary-points ` + css``}>
      <div
        className={css`
          display: flex;
          flex-wrap: wrap;
          .secondary-point {
            background-color: ${colors.greyLighter};
            padding-top: 74px;
            padding-bottom: 74px;
            display: flex;
            padding-left: 42px;
            padding-right: 42px;
            flex-grow: 1;
          }

          @media (min-width: 1160px) {
            flex-basis: 50%;
            .secondary-point {
              margin-top: 2px;
              &:nth-child(2n - 1) {
                justify-content: flex-end;
                .secondary-point__wrapper {
                  padding-left: 25px;
                  width: ${containerMaxWidth / 2}px;
                }
              }
              &:nth-child(2n) {
                padding-left: 100px;
                border-left: 2px solid #fff;
              }
            }
            .secondary-point__body {
              max-width: 22em;
            }
          }

          @media (max-width: 1160px) {
            .secondary-point {
              &:not(:first-child) {
                padding-top: 34px;
              }
              &:not(:last-child) {
                padding-bottom: 34px;
              }
            }
          }
        `}
      >
        <SecondaryPoint
          title={`It's fast`}
          body={`Allows asynchronous uploads, so that invalid uploads don't stop valid ones from going through. Processes submissions with billions of entities in __ hours. `}
        />
        <SecondaryPoint
          title={`Turn-key solution`}
          body={`Uses industry standard technologies, like JSON, YAML, and REST, so you don't have to learn anything new or difficult to use SONG.`}
        />
        <SecondaryPoint
          title={`Tracks and validate`}
          body={`Automatically validates your metadata submissions against a JSON schema to ensure that all your metadata is correct before it gets published.`}
        />
        <SecondaryPoint
          title={`Connected metadata`}
          body={`Supports ACLs out of the box, so you control who and how your metadata gets published.  Easy to keep track of  which researcher updated which data set, and when.`}
        />
      </div>
    </div>
    <GettingStarted />
    <StorageSystem />
    <GetStarted />
  </React.Fragment>
);

export default Song;
