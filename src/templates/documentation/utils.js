import { findIndex } from 'lodash';

export const findNextPrevPages = ({ pagesFlat, sectionSlug, pagePath }) => {
  const pageIndex = Object.values(pagesFlat).indexOf(pagePath);
  const isLandingPage = pagePath === sectionSlug;

  const prevPage = isLandingPage ? null : findPrevPage({ pageIndex, pagesFlat });
  const nextPage = findNextPage({ isLandingPage, pageIndex, pagesFlat });

  return { nextPage, prevPage };
};

export const findPrevPage = ({ pageIndex, pagesFlat }) => {
  const prevPagesKeys = Object.keys(pagesFlat)
    .slice(0, pageIndex)
    .reverse();
  const prevPagesValues = Object.values(pagesFlat)
    .slice(0, pageIndex)
    .reverse();
  const prevUrlIndex = findIndex(
    prevPagesKeys,
    key =>
      key.includes('url') && pagesFlat[key] !== null && !pagesFlat[key.replace('url', 'isHeading')]
  );
  const prevUrl = prevPagesValues[prevUrlIndex];
  const prevTitleKey = prevPagesKeys[prevUrlIndex].replace('url', 'title');
  const prevTitle = pagesFlat[prevTitleKey];

  return {
    title: prevTitle,
    url: `/documentation/${prevUrl}/`,
  };
};

export const findNextPage = ({ pageIndex, pagesFlat }) => {
  const nextPagesKeys = Object.keys(pagesFlat).slice(pageIndex + 1);
  const nextPagesValues = Object.values(pagesFlat).slice(pageIndex + 1);
  const nextUrlIndex = findIndex(
    nextPagesKeys,
    key =>
      key.includes('url') && pagesFlat[key] !== null && !pagesFlat[key.replace('url', 'isHeading')]
  );
  // last page, so return null
  if (nextUrlIndex === -1) return null;
  const nextUrl = nextPagesValues[nextUrlIndex];
  const nextTitleKey = nextPagesKeys[nextUrlIndex].replace('url', 'title');
  const nextTitle = pagesFlat[nextTitleKey];

  return {
    title: nextTitle,
    url: `/documentation/${nextUrl}/`,
  };
};
