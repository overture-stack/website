import React from 'react';
import { Icon } from '../../';
import ProductsPopup from '../Popup';

const MegaMenuLink = ({ children, isActive, name, toggleMegaMenu, type }) => (
  <div className="megamenu-link-box">
    <div style={{ flex: '1', display: 'flex' }}>
      <div
        className={`megamenu-link navbar-item ${
          isActive ? 'megamenu-link-open' : ''
        }`}
        style={{ display: 'flex', flex: 1 }}
        onClick={() => toggleMegaMenu(type)}
      >
        {name}
      </div>

      <div className={'flex'} onClick={() => toggleMegaMenu(type)}>
        <Icon
          className={`megamenu-arrow ${isActive ? 'open' : 'closed'} pl1`}
          style={{ width: '32px', height: '100%' }}
          img={isActive ? 'arrowDown' : 'arrowRight'}
        />
      </div>
    </div>

    {isActive && children}
  </div>
);

export default MegaMenuLink;
