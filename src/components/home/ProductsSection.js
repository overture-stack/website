import React from 'react';
import { compose, withState, withProps } from 'recompose';
import colors from 'common/colors';
import { container } from 'common/layout';
import styled, { css } from 'react-emotion';
import Waypoint from 'react-waypoint';
import TransitionGroup from 'react-transition-group-plus';
import Content from 'components/Content';
import tabs from 'common/products';

const tabStyles = {
  tabs: css`
    background-color: ${colors.green};
    padding-top: 6px;
    .tab-list {
      ${container};
      list-style-type: none;
      display: flex;
      margin-bottom: 0;
      justify-content: space-between;
    }
    .tab {
      margin-bottom: 0;
      padding: 0.8em 2em;
      border-top-right-radius: 2.5px;
      border-top-left-radius: 2.5px;
      transition: 0.1s background-color;
      font-weight: 700;
      &:not(.active) {
        cursor: pointer;
        &:hover {
          span {
            border-bottom: 3px solid ${colors.blueDark};
          }
        }
      }
      &.active {
        background-color: #fff;
      }
    }
  `,
};

const WrapperStyled = styled(`div`)`
  color: ${colors.blueDark};
  position: sticky;
  top: -1px;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const TabSeparator = () => (
  <img
    alt=""
    className={css`
      margin-left: 2em;
      margin-right: 2em;
    `}
    src={require('assets/glyph-arrow.svg')}
  />
);

const enhance = compose(
  withState('onScreenTabs', 'setOnscreenTabs', tabs.map(() => false)),
  withProps(({ onScreenTabs }) => ({ tabIndex: onScreenTabs.indexOf(true) })),
);

const ProductsSection = ({ tabIndex, onScreenTabs, setOnscreenTabs }) => {
  return (
    <div>
      <WrapperStyled>
        <div className={`${tabStyles.tabs}`}>
          <div className="tab-list">
            {tabs.reduce((acc, tab, i) => {
              if (i > 0) {
                acc.push(<TabSeparator key={i} />);
              }
              acc.push(
                <div
                  key={tab.key}
                  className={`tab ${tabIndex === i ? 'active' : ''}`}
                  onClick={() => {
                    if (window.location.hash === `#${tab.key}`) {
                      document
                        .querySelector(`.waypoint.${tab.key}`)
                        .scrollIntoView();
                    } else {
                      window.location.hash = tab.key;
                    }
                  }}
                >
                  {tab.tabText}
                </div>,
              );
              return acc;
            }, [])}
          </div>
        </div>
        <TransitionGroup
          transitionMode="out-in"
          style={{ position: 'relative', flexGrow: 1 }}
        >
          {tabIndex >= 0 && (
            <Content key={tabs[tabIndex].key} {...tabs[tabIndex]} />
          )}
        </TransitionGroup>
      </WrapperStyled>
      {tabs.map((tab, i, arr) => {
        return (
          <Waypoint
            key={tab.key}
            onEnter={() =>
              setOnscreenTabs(Object.assign(onScreenTabs, { [i]: true }))
            }
            onLeave={() =>
              setOnscreenTabs(Object.assign(onScreenTabs, { [i]: false }))
            }
            fireOnRapidScroll={false}
            topOffset={1}
          >
            <a
              name={tab.key}
              className={`waypoint ${tab.key}`}
              style={{
                display: 'block',
                height: '75vh',
                ...(i === arr.length - 1 && {
                  height: '100vh',
                }),
                ...(i === 0 && {
                  height: '1px',
                  marginTop: '-100vh',
                }),
              }}
            >
              <div />
            </a>
          </Waypoint>
        );
      })}
    </div>
  );
};

export default enhance(ProductsSection);
