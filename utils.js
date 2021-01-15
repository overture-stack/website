import urlJoin from 'proper-url-join';

export const copyToClipboard = str => {
  // ref: https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

export const internalUrlJoin = url => urlJoin(...url, { leadingSlash: true, trailingSlash: true });

export const makeURLSafeString = str =>
  str
    .replace(/((?!([a-z0-9\- ])).)/gi, '')
    .trim()
    .split(' ')
    .filter(x => x)
    .join('-')
    .substring(0, 25)
    .toLowerCase();
