import React from 'react';
import { css } from 'react-emotion';
import Link from 'gatsby-link';
import { container } from 'common/layout';

const StorageSystem = () => {
  return (
    <div
      css={`
        color: #003055;
        ${container}
      `}
    >
      <h1
        css={`
          width: 388px;
          font-size: 30px;
          font-weight: 300;
          line-height: 1.23;
          margin: 97px auto 27px;
        `}
      >
        Your choice of storage<br />system
      </h1>
      <div
        css={`
          display: flex;
          justify-content: space-between;
          max-width: 68%;
          margin-left: auto;
          margin-right: auto;
          align-items: center;
        `}
      >
        <img
          src={require('assets/logos/amazon.png')}
          css={`
            height: 46px;
          `}
        />
        <img
          src={require('assets/logos/azure.svg')}
          css={`
            height: 23px;
          `}
        />
        <img
          src={require('assets/logos/postgresql.png')}
          css={`
            height: 43px;
          `}
        />
      </div>
      <p
        css={`
          text-align: center;
          margin-top: 113px;
          margin-bottom: 97px;
        `}
      >
        Or use our storage system SCORE{' '}
        <Link
          to=""
          css={`
            margin-left: 14px;
            font-size: 18px;
          `}
        >
          Learn more
        </Link>
      </p>
    </div>
  );
};

export default StorageSystem;
