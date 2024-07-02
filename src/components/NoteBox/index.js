import React from 'react';
import { Icon } from 'components';
import './styles.scss';

export default function NoteBox({ children, title, icon = 'notes', ...props }) {
  //  Use 'notes' as the default icon if 'icon' prop is not specified or is falsy
  const iconName = icon || 'notes';

  return (
    <div className="note-box" {...props}>
      <h3 className="note-box__title">
        <Icon img={iconName} size={36} className="note-box__icon" />
        <span>{title}</span>
      </h3>
      <div className="note-box__content">{children}</div>
    </div>
  );
}
