var GithubSlugger = require('github-slugger');
var slugger = new GithubSlugger();

module.exports = {
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
  makeSlug: function(input) {
    // input can be a string or array of strings
    return typeof input === 'string' ? slugger.slug(input) : slugger.slug(input[0]);
  },
};
