import React from 'react';
import GetStartedButton from 'components/GetStartedButton';
import { products } from 'common/products';

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
        <GetStartedButton to={products.song.getStarted} />
      </div>
    </div>
  );
};

export default GetStarted;
