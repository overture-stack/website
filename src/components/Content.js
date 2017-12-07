import React from 'react';
import ReactDOM from 'react-dom';
import { css } from 'react-emotion';
import { TweenMax as Tween } from 'gsap';

import { container } from 'common/layout';
import ProductItem from 'components/home/ProductItem';
import { smallHeight, medium } from 'common/dimensions';

const styles = {
  productItem: css`
    width: 100%;
    max-width: 400px;
    margin-right: 50px;
    @media (max-width: ${medium}px) {
      margin-right: 20px;
    }
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
    const { description, cards, icon } = this.props;

    return (
      <div
        className={css`
          ${container};
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          transform: translateY(-50%);
        `}
      >
        <div
          className={css`
            display: flex;
            margin: 0;
            margin-bottom: 8vh;
            justify-content: space-between;
          `}
        >
          <div
            ref={el => (this.order[0] = el)}
            className={css`
              margin-right: 20px;
              margin-right: 8vw;
              max-width: 1000px;
              line-height: 1.67;
              font-size: 24px;
              @media (max-height: ${smallHeight}px) {
                font-size: 20px;
              }
            `}
          >
            {description}
          </div>
          <img
            ref={el => (this.order[1] = el)}
            alt=""
            className={css`
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
