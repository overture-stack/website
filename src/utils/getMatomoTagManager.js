const getMatomoTagManager = () => {
  // use with react helmet or gatsby head
  // const matomoTagManager = getMatomoTagManager();
  // <script type="text/javascript" id="matomo-tag-manager">{matomoTagManager}</script>

  const matomoUrl = process.env.GATSBY_MATOMO_URL || '';
  const matomoSiteID = process.env.GATSBY_MATOMO_SITE_ID || '';

  return matomoUrl
    ? // ? `var _mtm = (window._mtm = window._mtm || []);
      //     _mtm.push({ 'mtm.startTime': new Date().getTime(), event: 'mtm.Start' });
      //     (function () {
      //       var d = document,
      //         g = d.createElement('script'),
      //         s = d.getElementsByTagName('script')[0];
      //       g.async = true;
      //       g.src = '${matomoUrl}';
      //       s.parentNode.insertBefore(g, s);
      //     })();`
      // : '';
      ` var _paq = window._paq = window._paq || [];
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    (function() {
      var u="//webstats.oicr.on.ca/piwik/";
      _paq.push(['setTrackerUrl', u+'matomo.php']);
      _paq.push(['setSiteId', '${matomoSiteID}']);
      var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
      g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
    })();`
    : '';
};

export default getMatomoTagManager;
