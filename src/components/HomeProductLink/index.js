import React from 'react';
import { LinkHelper as Link, Icon, P2 } from 'components';
import './styles.scss';

export default function HomeProductLink({
  icon,
  alt,
  title,
  textUpper,
  textLower,
  textThirdLine,
  link,
}) {
  return (
    <Link className="ProductLink" to={link}>
      <div className="ProductLink__top-container">
        <Icon alt={alt} className="ProductLink__icon" img={icon} />
        <h1 className="ProductLink__title">{title}</h1>
      </div>
      <P2 className="ProductLink__text">
        {textUpper}
        <br />
        {textLower}
        <br />
        {textThirdLine}
      </P2>
    </Link>
  );
}
