import React from 'react';
import { LinkHelper as Link, Icon, P2 } from 'components';
import './styles.scss';

export default function YellowButton({ link, title, img_src, alt, text, isProductPage }) {
  return (
    <div className="yellow-button">
      <Link
        className={`yellow-button__link ${isProductPage && 'yellow-button__product-page-link'}`}
        to={link}
      >
        <Icon className="yellow-button__img" img={img_src} alt={alt} />
        <h1 className="yellow-button__title">{title}</h1>
        <P2
          className={`yellow-button__text ${isProductPage && 'yellow-button__product-page-text'}`}
        >
          {text}
        </P2>
      </Link>
    </div>
  );
}
