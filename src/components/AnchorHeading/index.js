import React from 'react';
import { Link } from 'gatsby';
import GithubSlugger from 'github-slugger';
import { GoLink as LinkIcon } from 'react-icons/go';

const slugger = new GithubSlugger();

export default function AnchorHeading({ children, size: H, ...props }) {
  const slug = typeof children === 'string' ? slugger.slug(children) : slugger.slug(children[0]);
  // children is an array if some of the heading text
  // is formatted, e.g. bold or italic
  return (
    <H {...props}>
      <Link id={slug} to={`#${slug}`}>
        <LinkIcon size="16" />
      </Link>
      {children}
    </H>
  );
}
