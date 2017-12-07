import React from 'react';
import { css } from 'react-emotion';
import { container } from '../common/layout';
import Link from 'gatsby-link';
import GetStartedButton from './GetStartedButton';

const Line = () => (
  <div
    css={`
      margin: 45px 0;
      width: 105px;
      height: 3px;
      background: #f2d03a;
    `}
  />
);

const styled = {
  container: css`
    color: #004773;
    ${container};
  `,
  stepNumber: css`
    font-size: 30px;
    font-weight: bold;
    line-height: 1.23;
    color: #003055;
    margin-bottom: 27px;
  `,
  stepText: css`
    width: 281px;
    font-size: 24px;
    line-height: 1.67;
    color: #003055;
    flex: none;
  `,
  header: css`
    margin: 120px 0 51px;
    font-size: 30px;
    font-weight: 300;
    text-align: center;
  `,
};

const Step = ({ num, text, right, align }) => {
  return (
    <div>
      <div>
        <div>
          <div css={styled.stepNumber}>{num}</div>
          <div
            css={`
              display: flex;
              justify-content: space-between;
              align-items: ${align};
            `}
          >
            <div css={styled.stepText}>{text}</div>
            {right}
          </div>
        </div>
      </div>
      <Line />
    </div>
  );
};

const GettingStarted = () => {
  return (
    <div css={styled.container}>
      <h1 css={styled.header}>Getting started</h1>
      <Step
        num={1}
        text="Download the SONG client - SING, our command line interface."
        right={<GetStartedButton />}
        align="flex-end"
      />
      <Step
        num={2}
        text="Build and run the source using maven with simple instructions."
        right={
          <img
            css={`margin-top: -28px; max-width: 694px;`}
            src={require('../assets/step2.png')}
          />
        }
        align="flex-start"
      />
      <Step
        num={3}
        text="get started running SONG with just two Docker commands."
        right={
          <img
            css={`margin-top: -28px; max-width: 694px;`}
            src={require('../assets/step3.png')}
          />
        }
        align="flex-start"
      />
    </div>
  );
};

export default GettingStarted;
