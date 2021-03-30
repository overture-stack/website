import React from 'react';
import Badge from '.';

const ComingSoonBadge = ({ style = {} }) => (
  <div
    color="dark-blue"
    style={{
      alignSelf: 'center',
      display: 'inline-block',
      fontSize: 10,
      justifySelf: 'end',
      marginBottom: 0,
      minWidth: 'auto',
      width: 'auto',
      textTransform: 'none',
      fontWeight: '700',
      background: '#fcf3c7',
      padding: '2px 5px',
      borderRadius: 4,
      marginLeft: 8,
      ...style,
    }}
  >
    Coming Soon
  </div>
);

export default ComingSoonBadge;
