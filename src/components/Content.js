import React from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'react-emotion';
import { TweenMax as Tween } from 'gsap';

import { container, smallHeight } from 'common/layout';
import ProductItem from 'components/home/ProductItem';

const styles = {
  productItem: css`
    width: 33%;
    margin-right: 50px;
    &:last-child {
      margin-right: 0;
    }
  `,
};

class Content extends React.Component {
  order = [];
  componentDidMount() {
    Tween.set(this.order, { opacity: 0, y: -10 });
  }
  componentWillAppear(callback) {
    Tween.staggerTo(
      this.order,
      0.5,
      { ease: Expo.easeOut, opacity: 1, y: 0, onComplete: callback },
      0.05,
    );
  }

  componentWillEnter(callback) {
    Tween.staggerFromTo(
      this.order,
      0.5,
      { ease: Expo.easeOut, opacity: 0, y: 10 },
      { ease: Expo.easeOut, opacity: 1, y: 0, onComplete: callback },
      0.05,
    );
  }

  componentWillLeave(callback) {
    Tween.delayedCall(0.4, callback);
    Tween.staggerTo(
      this.order,
      0.5,
      {
        ease: Expo.easeOut,
        opacity: 0,
        y: -10,
      },
      0.05,
    );
  }

  render() {
    const { id, description, cards, icon } = this.props;

    return (
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          transform: 'translateY(-50%)',
        }}
        className={css`
          ${container};
        `}
      >
        <div
          className={css`
            display: flex;
            margin: 0 0 0 4em;
            margin-bottom: 8vh;
          `}
        >
          <div
            ref={el => (this.order[0] = el)}
            className={css`
              margin-right: 2em;
              line-height: 1.67;
              font-size: 24px;
              ul {
                display: flex;
                flex-wrap: wrap;
                margin-bottom: 0;
                margin-top: 0.4em;
                margin-left: 1em;
                line-height: 1.2;
              }
              ul li {
                width: 50%;
              }
              ul li:last-child {
                margin-bottom: 0;
                flex-grow: 1;
              }
              @media (max-height: ${smallHeight}px) {
                font-size: 20px;
              }
            `}
          >
            {description}
          </div>
          <img
            ref={el => (this.order[1] = el)}
            className={css`
              margin-left: auto;
              margin-right: 5%;
              height: 120px;
              flex: none;
            `}
            src={icon}
          />
        </div>
        <div
          className={css`
            display: flex;
            margin: 4em 0 0 0;
            margin-top: 8vh;
            justify-content: center;
          `}
        >
          {cards.map((card, i) => {
            return (
              <ProductItem
                {...card}
                key={card.title}
                ref={el => (this.order[2 + i] = ReactDOM.findDOMNode(el))}
                className={styles.productItem}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Content;
