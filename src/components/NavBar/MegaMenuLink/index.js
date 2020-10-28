import React from 'react';
import { Icon } from '../../';

const MegaMenuLink = ({ children, isActive, name, path, toggleMegaMenu, type }) => {
  const section = path.split('/').filter(x => x && x !== '/')[0];
  const isCurrentSection = type === section;
  return (
    <div className="megamenu-link-box">
      <div style={{ flex: '1', display: 'flex' }}>
        <div
          className={`megamenu-link navbar-item ${isActive ? 'megamenu-link-open' : ''} ${
            isCurrentSection ? 'megamenu-link-highlight' : ''
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
};

export default MegaMenuLink;
