import React from 'react';
import { Script } from 'gatsby';

const RootElement = ({ children }) => {
  const matomoUrl = process.env.GATSBY_MATOMO_URL || '';

  return (
    <div id="root-element">
      {children}
      {/* {matomoUrl && (
        <Script id="matomo-tag-manager">
          {`
            var _mtm = (window._mtm = window._mtm || []);
            _mtm.push({ 'mtm.startTime': new Date().getTime(), event: 'mtm.Start' });
            (function () {
              var d = document,
                g = d.createElement('script'),
                s = d.getElementsByTagName('script')[0];
              g.async = true;
              g.src = '${matomoUrl}';
              s.parentNode.insertBefore(g, s);
            })();
          `}
        </Script>
      )} */}
    </div>
  );
};

export default RootElement;
