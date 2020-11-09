import React from 'react';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import { Icon } from 'components';
import './styles.scss';

export default function NoteBox({ children, title }) {
  return (
    <div className="note-box">
      <h3 className="note-box__title">
        <Icon img="notes" size={36} className="note-box__icon" />
        <span>{title}</span>
      </h3>
      {/* <MDXRenderer>{children}</MDXRenderer> */}
      {children}
    </div>
  );
}
