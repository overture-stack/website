import React from 'react';
import { css } from 'react-emotion';

const GetStarted = () => {
  return (
    <div
      css={`
        height: 392px;
        background-color: #04518c;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      <div
        css={`
          width: 872px;
          font-size: 30px;
          font-weight: 300;
          line-height: 1.77;
          color: #ffffff;
        `}
      >
        <p>
          A flexible data model for tracking your data across the cloud:<br />
          one specifically dedicated to genomic research.
        </p>
        <button
          css={`
            min-width: 163px;
            min-height: 52px;
            border-radius: 5px;
            background-color: #47d9bf;
            box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
            font-size: 20px;
            text-align: center;
            color: #ffffff;
            border: none;
            padding: 9px 32px;
          `}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
