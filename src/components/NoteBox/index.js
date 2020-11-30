import React from 'react';
import { Icon } from 'components';
import './styles.scss';

export default function NoteBox({ children, title, ...props }) {
  return (
    <div className="note-box" {...props}>
      <h3 className="note-box__title">
        <Icon img="notes" size={36} className="note-box__icon" />
        <span>{title}</span>
      </h3>
      <div className="note-box__content">{children}</div>
    </div>
  );
}
