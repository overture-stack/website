import React from 'react';
import { compose, withState } from 'recompose';
import colors from 'common/colors';
import { container } from 'common/layout';
import styled, { css } from 'react-emotion';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ProductItem from './ProductItem';

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
    position: sticky;
    top: -1px;
  `,
};

const styles = {
  productItem: css`
    width: calc((100% - 100px) / 3);
  `,
};

const WrapperStyled = styled(`div`)`
  color: ${colors.blueDark};
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

const enhance = compose(withState('tabIndex', 'setTabIndex', 0));

const DummyContent = ({ id }) => (
  <div
    id={id}
    className={css`
      ${container};
    `}
  >
    <div
      className={css`
        display: flex;
        margin-top: 4em;
        margin-bottom: 4em;
      `}
    >
      <div
        className={css`
          width: 30em;
          line-height: 1.67;
        `}
      >
        Clouds can be costly to setup and operate, our tools facilitates some of
        those operations, let user monitor their usage and allows you to recover
        some of the operating costs via a simple and easy to understand
        cost-recovery model.
      </div>
      <img
        className={css`
          margin-left: auto;
          margin-right: 5%;
        `}
        src={require('./images/operate.svg')}
      />
    </div>
    <div
      className={css`
        display: flex;
        margin-top: 4em;
        margin-bottom: 4em;
        justify-content: space-between;
      `}
    >
      <ProductItem
        className={styles.productItem}
        title={`Enrolment app`}
        description={`Define an hourly cost per CPU or GB of storage, the system will automatically connect to Freshbooks and send monthly invoices.`}
        learnMoreLink={'/enrolment'}
        logoUrl={require('assets/logos/ego.png')}
      />
      <ProductItem
        className={styles.productItem}
        title={`Usage`}
        description={`Define an hourly cost per CPU or GB of storage, the system will automatically connect to Freshbooks and send monthly invoices.`}
        logoUrl={require('assets/logos/ego.png')}
      />
      <ProductItem
        className={styles.productItem}
        title={`Billing`}
        description={`Define an hourly cost per CPU or GB of storage, the system will automatically connect to Freshbooks and send monthly invoices.`}
        logoUrl={require('assets/logos/ego.png')}
      />
    </div>
  </div>
);

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
          <TabSeparator />
          <Tab>Transfer &amp; Store</Tab>
          <TabSeparator />
          <Tab>Do Science</Tab>
          <TabSeparator />
          <Tab>Share</Tab>
        </TabList>
      </div>

      <DummyContent id={`operate`} />
      <DummyContent id={`transfer`} />
      <DummyContent id={`science`} />
      <DummyContent id={`share`} />

      {/* <TabPanel>
        <div
          className={css`
            display: flex;
            margin-top: 4em;
            margin-bottom: 4em;
          `}
        >
          <div
            className={css`
              width: 30em;
              line-height: 1.67;
            `}
          >
            Clouds can be costly to setup and operate, our tools facilitates
            some of those operations, let user monitor their usage and allows
            you to recover some of the operating costs via a simple and easy to
            understand cost-recovery model.
          </div>
          <img
            className={css`
              margin-left: auto;
              margin-right: 5%;
            `}
            src={require('./images/operate.svg')}
          />
        </div>
        <div
          className={css`
            display: flex;
            margin-top: 4em;
            margin-bottom: 4em;
            justify-content: space-between;
          `}
        >
          <ProductItem
            className={styles.productItem}
            title={`Enrolment app`}
            description={`Define an hourly cost per CPU or GB of storage, the system will automatically connect to Freshbooks and send monthly invoices.`}
            learnMoreLink={'/enrolment'}
            logoUrl={require('assets/logos/ego.png')}
          />
          <ProductItem
            className={styles.productItem}
            title={`Usage`}
            description={`Define an hourly cost per CPU or GB of storage, the system will automatically connect to Freshbooks and send monthly invoices.`}
            logoUrl={require('assets/logos/ego.png')}
          />
          <ProductItem
            className={styles.productItem}
            title={`Billing`}
            description={`Define an hourly cost per CPU or GB of storage, the system will automatically connect to Freshbooks and send monthly invoices.`}
            logoUrl={require('assets/logos/ego.png')}
          />
        </div>
      </TabPanel>
      <TabPanel>Tranfser and Store</TabPanel>
      <TabPanel>Do Science</TabPanel>
      <TabPanel>Share</TabPanel> */}
    </Tabs>
  </WrapperStyled>
);

export default enhance(ProductsSection);
