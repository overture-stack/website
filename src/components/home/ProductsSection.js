import React from 'react';
import { compose, withState } from 'recompose';
import colors from 'common/colors';
import { container } from 'common/layout';
import styled, { css } from 'react-emotion';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Waypoint from 'react-waypoint';
import TransitionGroup from 'react-transition-group-plus';
import Content from 'components/Content';
import tabs from 'common/tabs';

const tabStyles = {
  tabs: css`
    .react-tabs__tab-list {
      ${container};
      list-style-type: none;
      display: flex;
      margin-bottom: 0;
      justify-content: space-between;
    }
    .react-tabs__tab {
      margin-bottom: 0;
      padding: 0.5em 2em;
      border-top-right-radius: 2.5px;
      border-top-left-radius: 2.5px;
      transition: 0.1s background-color;
      &:not(.react-tabs__tab--selected) {
        cursor: pointer;
        &:hover {
          background-color: rgba(255, 255, 255, 0.3);
        }
      }
    }
    .react-tabs__tab--selected {
      background-color: #fff;
    }
    .react-tabs__tab-panel {
      ${container};
    }
  `,
  tabListWrapper: css`
    background-color: ${colors.green};
    padding-top: 6px;
  `,
};

const WrapperStyled = styled(`div`)`
  color: ${colors.blueDark};
  position: sticky;
  top: -1px;
  height: 100vh;
  max-height: 900px;
  display: flex;
  flex-direction: column;
`;

const TabSeparatorStyled = styled(`div`)`
  &::after {
    content: '';
    display: block;
    width: 10px;
    background-image: url(${require('assets/glyph-arrow.svg')});
  }
`;

const TabSeparator = () => (
  <img
    className={css`
      margin-left: 2em;
      margin-right: 2em;
    `}
    src={require('assets/glyph-arrow.svg')}
  />
);

const enhance = compose(withState('tabIndex', 'setTabIndex', -1));

const ProductsSection = ({ tabIndex, setTabIndex }) => {
  return (
    <div>
      <WrapperStyled>
        <Tabs
          className={`react-tabs ${tabStyles.tabs}`}
          selectedIndex={tabIndex}
          onSelect={(index, lastIndex, event) => setTabIndex(index)}
        >
          <div className={tabStyles.tabListWrapper}>
            <TabList>
              {tabs.reduce((acc, tab, i) => {
                if (i > 0) {
                  acc.push(<TabSeparator key={i} />);
                }
                acc.push(<Tab key={tab.tabText}>{tab.tabText}</Tab>);
                return acc;
              }, [])}
            </TabList>
          </div>
          {tabs.map((tab, i) => <TabPanel key={i} />)}
        </Tabs>
        <TransitionGroup
          transitionMode="out-in"
          style={{ position: 'relative', flexGrow: 1 }}
        >
          {tabIndex >= 0 && (
            <Content key={tabs[tabIndex].tabText} {...tabs[tabIndex]} />
          )}
        </TransitionGroup>
      </WrapperStyled>
      {tabs.map((tab, i, arr) => {
        return (
          <Waypoint
            key={tab.tabText}
            bottomOffset={i === 0 ? -500 : 0}
            onEnter={(previousPosition, currentPosition) => setTabIndex(i)}
          >
            <div
              style={
                arr.length - 1 === i
                  ? { height: '100vh' }
                  : { height: 1, marginBottom: '101vh' }
              }
            />
          </Waypoint>
        );
      })}
    </div>
  );
};

export default enhance(ProductsSection);
