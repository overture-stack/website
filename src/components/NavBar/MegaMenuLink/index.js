import React from 'react';
import { Icon } from 'components';
import { useSSRWorkaround } from 'hooks';

const MegaMenuLink = ({ children, isActive, name, path, toggleMegaMenu, type }) => {
  const { key } = useSSRWorkaround();

  const megaMenuActive = path.startsWith(`/${type}`);

  return (
    <div className="megamenu-link-box" key={key}>
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
