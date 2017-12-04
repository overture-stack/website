import React from 'react';
import { compose, withState } from 'recompose';
import colors from 'common/colors';
import { container } from 'common/layout';
import styled, { css } from 'react-emotion';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const tabStyles = {
  tabs: css`
    .react-tabs__tab-list {
      ${container};
      list-style-type: none;
      display: flex;
      margin-bottom: 0;
    }
    .react-tabs__tab {
      margin-bottom: 0;
      padding: 0.5em 2em;
      border-top-right-radius: 2.5px;
      border-top-left-radius: 2.5px;
      &:not(.react-tabs__tab--selected) {
        cursor: pointer;
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
  `,
};
const WrapperStyled = styled(`div`)``;

const enhance = compose(withState('tabIndex', 'setTabIndex', 0));

const ProductsSection = ({ tabIndex, setTabIndex }) => (
  <WrapperStyled>
    <Tabs
      className={`react-tabs ${tabStyles.tabs}`}
      selectedIndex={tabIndex}
      onSelect={(index, lastIndex, event) => setTabIndex(index)}
    >
      <div className={tabStyles.tabListWrapper}>
        <TabList>
          <Tab>Operate</Tab>
          <Tab>Transfer &amp; Store</Tab>
          <Tab>Do Science</Tab>
          <Tab>Share</Tab>
        </TabList>
      </div>

      <TabPanel>Operate</TabPanel>
      <TabPanel>Tranfser and Store</TabPanel>
      <TabPanel>Do Science</TabPanel>
      <TabPanel>Share</TabPanel>
    </Tabs>
  </WrapperStyled>
);

export default enhance(ProductsSection);
