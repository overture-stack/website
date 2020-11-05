import React from 'react';
import './styles.scss';

export default function WarningBox({ children }) {
  return <div className="warning-box">IT'S WORKING {children}</div>;
}
