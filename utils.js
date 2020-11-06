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
  makeMarkdownHeadings: function() {
    // make heading elements from h2 to h6
    // that have anchor tags
    // replace h1 with h2, h2 with h3, etc.
    const headingLevels = [...Array(6)]
      .map((x, i) => i++)
      .reduce((acc, curr) => ({
        ...acc,
        [`h${curr}`]: ({ children }) => <AnchorHeading priority={curr}>{children}</AnchorHeading>,
      }));

    const headings = [...Array(5)].reduce((acc, curr, i) => {
      const maxPriority = 6; // hx goes up h6
      const originalPriority = i + 1 > maxPriority ? maxPriority : i + 1; // h1 to h6
      const originalTag = `h${originalPriority}`;
      const customPriority = i + 2 > maxPriority ? maxPriority : i + 2; // h2 to h6
      const CustomTag = `h${customPriority}`;
      return {
        ...acc,
        // TODO: heading & anchor need ID & aria attributes.
        // will be added in sidebar ticket.
        [originalTag]: ({ children }) => <CustomTag>{children}</CustomTag>,
      };
    });
    return headings;
  },
};
