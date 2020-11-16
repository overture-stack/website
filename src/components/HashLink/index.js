import React from 'react';
import { navigate } from '@reach/router';

// https://www.gatsbyjs.com/docs/gatsby-link/#recommendations-for-programmatic-in-app-navigation

export default function HashLink({ to, ...props }) {
  return (
    <a
      {...props}
      href={to}
      onClick={e => {
        e.preventDefault();
        navigate(to);
      }}
    />
  );
}
