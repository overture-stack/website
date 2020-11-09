import React from 'react';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import './styles.scss';

export default function WarningBox({ children }) {
  return (
    <div className="warning-box">
      {/* <MDXRenderer>{children}</MDXRenderer> */}
      {children}
    </div>
  );
}
