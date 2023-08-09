import React from 'react';
import { LinkHelper as Link, Icon, P1 } from 'components';
import './styles.scss';

export default function HomeProductLink({ icon, title, link, text }) {
  return (
    <Link className="ProductLink" to={link}>
      <div className="ProductLink__top-container">
        <Icon alt="" className="ProductLink__icon" img={icon} />
        <h1 className="ProductLink__title">{title}</h1>
      </div>
      <P1 className="ProductLink__text">{text}</P1>
    </Link>
  );
}
