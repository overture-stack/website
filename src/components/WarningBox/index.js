import React from 'react';
import './styles.scss';

export default function WarningBox({ children, ...props }) {
  return (
    <div className="warning-box" {...props}>
      {children}
    </div>
  );
}
