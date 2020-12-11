import React, { useEffect, useState } from 'react';

const loadMenu = [
  {
    id: '1',
    name: 'One',
    children: [
      {
        id: '1.1',
        name: 'One - one',
        children: [
          { id: '1.1.1', name: 'One - one - one' },
          { id: '1.1.2', name: 'One - one - two' },
          { id: '1.1.3', name: 'One - one - three' },
        ],
      },
    ],
  },
  { id: '2', name: 'Two', children: [{ id: '2.1', name: 'Two - one' }] },
  {
    id: '3',
    name: 'Three',
    children: [
      {
        id: '3.1',
        name: 'Three - one',
        children: [
          {
            id: '3.1.1',
            name: 'Three - one - one',
            children: [
              {
                id: '3.1.1.1',
                name: 'Three - one - one - one',
                children: [{ id: '3.1.1.1.1', name: 'Three - one - one - one - one' }],
              },
            ],
          },
        ],
      },
    ],
  },
  { id: '4', name: 'Four' },
  {
    id: '5',
    name: 'Five',
    children: [
      { id: '5.1', name: 'Five - one' },
      { id: '5.2', name: 'Five - two' },
      { id: '5.3', name: 'Five - three' },
      { id: '5.4', name: 'Five - four' },
    ],
  },
  { id: '6', name: 'Six' },
];

const MenuItem = ({ name, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [timesOpened, setTimesOpened] = useState(0);
  // const open = () => {
  //   setIsOpen(true);
  //   // setTimesOpened(timesOpened + 1);
  // };
  // const close = () => {
  //   setIsOpen(false);
  // };
  return (
    <React.Fragment>
      <button onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}>{name}</button>

      {name}
      <div>
        {isOpen ? 'closed' : 'open'}
        <MenuItemContainer
          // key={timesOpened}
          menuItems={children}
        />
      </div>
    </React.Fragment>
  );
};

const MenuItemContainer = ({ menuItems = [] }) => {
  return (
    <ul>
      {menuItems.map(menuItem => (
        <li key={menuItem.id}>
          <MenuItem {...menuItem} />
        </li>
      ))}
    </ul>
  );
};

const Menu = () => {
  return <MenuItemContainer menuItems={loadMenu} />;
};

export default Menu;
