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
