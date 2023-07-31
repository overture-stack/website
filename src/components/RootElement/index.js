import React from 'react';
import { Script } from 'gatsby';

const RootElement = ({ children }) => {
  return (
    <div id="root-element">
      {children}
      <Script id="matomo-tag-manager">
        {`var _mtm = window._mtm = window._mtm || [];
          _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
          (function() {
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.async=true; g.src='https://webstats.oicr.on.ca/piwik/js/container_BTj2wHUt_dev_58583c73ebd0847b19ba8649.js'; s.parentNode.insertBefore(g,s);
          })();`}
      </Script>
    </div>
  );
};

export default RootElement;
