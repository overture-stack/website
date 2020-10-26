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
};
