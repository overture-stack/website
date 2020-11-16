import React from 'react';
import { genericHashLink } from 'react-router-hash-link';
import { Link as GatsbyLink } from 'gatsby';

const Link = genericHashLink(GatsbyLink);

const scrollWithOffset = el => {
  console.log('scrolling with offset!');
  // stop navbar from covering the content you were scrolling to
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80;
  const top = yCoordinate + yOffset;
  console.log({ yCoordinate, yOffset });
  console.log({ top });
  window.scrollTo({ top, behavior: 'smooth' });
};

export default function HashLink({ to, ...props }) {
  return (
    <Link
      className="hash-link"
      {...props}
      to={to}
      smooth
      scroll={scrollWithOffset}
      onClick={e => e.stopPropagation()}
    />
  );
}
