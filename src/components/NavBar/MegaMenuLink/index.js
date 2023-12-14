import React from 'react';
import { Icon } from 'components';
import { useSSRWorkaround } from 'hooks';

const MegaMenuLink = ({ children, isActive, name, path, toggleMegaMenu, type }) => {
  const { key } = useSSRWorkaround();

  const megaMenuActive = path.startsWith(`/${type}`);

  return (
    <div className="megamenu-link-box" key={key} activeClassName="active-item">
      <div style={{ flex: '1', display: 'flex' }}>
        <div
          className={`megamenu-link navbar-item ${isActive ? 'megamenu-link-open' : ''} ${
            megaMenuActive ? 'megamenu-link-highlight' : ''
          }`}
          style={{ display: 'flex', flex: 1 }}
          onClick={() => toggleMegaMenu(type)}
        >
          {name}
          {name === 'Documentation' ? (
            <Icon
              img="arrowDownNavbar"
              className={`documentation-down-arrow ${
                isActive ? 'documentation-arrow-rotate-up' : ''
              }`}
              alt="down arrow"
            />
          ) : null}
        </div>
      </div>
      {isActive && children}
    </div>
  );
};

export default MegaMenuLink;
