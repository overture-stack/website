var GithubSlugger = require('github-slugger');
var slugger = new GithubSlugger();

module.exports = {
  copyToClipboard: function(str) {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  },
  makeSlug: function(input) {
    // input can be a string or array of strings
    return typeof input === 'string' ? slugger.slug(input) : slugger.slug(input[0]);
  },
  makeURLSafeString: function(str) {
    return str
      .replace(/((?!([a-z0-9\- ])).)/gi, '')
      .trim()
      .split(' ')
      .filter(x => x)
      .join('-')
      .substring(0, 25)
      .toLowerCase();
  },
};
