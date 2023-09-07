import React from 'react';
import { CONTACT_US_PATH } from 'constants/pages';
import { Button, P1, H2 } from 'components';
import './styles.scss';

const ServicesPageSection = ({
  src,
  alt,
  title,
  subtitle,
  list1,
  list2,
  list3,
  list4,
  buttonText,
  isGrey, ////setting customized css for section with grey background
  isNoList, //setting customized css for section with no lists
}) => {
  return (
    <section className={`ServicesPageSection ${isGrey && `grey-bg`}`}>
      <div className="container">
        <div className="ServicesPageSection__holder">
          <div
            className={`ServicesPageSection__img-holder ${
              isGrey && `ServicesPageSection__flexbox-order`
            }`}
          >
            <img src={src} alt={alt} className="ServicesPageSection__img" />
          </div>
          {/* div that holds all the text and button */}
          <div className="ServicesPageSection__text-holder">
            <div className="ServicesPageSection__title-holder">
              <H2 className="ServicesPageSection__title">{title}</H2>
            </div>
            <div className="ServicesPageSection__subtitle-holder">
              <P1>
                {subtitle}
                <ul className={isNoList && 'ServicesPageSection__no-list'}>
                  {list1 && <li>{list1}</li>}
                  {list2 && <li>{list2}</li>}
                  {list3 && <li>{list3}</li>}
                  {list4 && <li>{list4}</li>}
                </ul>
              </P1>
            </div>
            <div className="ServicesPageSection__button-holder">
              <Button
                link={CONTACT_US_PATH}
                type="primary"
                size="medium"
                className="ServicesPageSection__button"
              >
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPageSection;
