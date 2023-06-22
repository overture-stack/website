import React from 'react';
import { LinkHelper as Link } from 'components';
import './styles.scss';

export default function YellowButton({ link, text, img_src, alt }) {
  return (
    <div className="yellow-button">
      <Link className="yellow-button__link" to={link}>
        <img className="yellow-button__img" src={img_src} alt={alt} />
        <h1 className="yellow-button__text">{text}</h1>
      </Link>
    </div>
  );
}
