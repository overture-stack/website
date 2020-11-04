import React from 'react';

export default function NoteBox({ children, title }) {
  return (
    <div className="note-box">
      <h3>{title}</h3>
      {children}
    </div>
  );
}
