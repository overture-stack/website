import { findIndex } from 'lodash';

export const sectionIcons = {
  arranger: 'productArrangerWhite',
  billing: 'productBillingWhite',
  dms: 'productDMSWhite',
  ego: 'productEgoWhite',
  enrolment: 'productEnrolmentWhite',
  jukebox: 'productJukeboxWhite',
  maestro: 'productMaestroWhite',
  oncojs: 'productOncoWhite',
  persona: 'productPersonaWhite',
  riff: 'productRiffWhite',
  score: 'productScoreWhite',
  song: 'productSongWhite',
};

export const findNextPrevPages = ({ sectionPages, sectionSlug, slug }) => {
  const pagePath = slug.split('/documentation/')[1].slice(0, -1); // remove trailing slash
  const pageIndex = Object.values(sectionPages).indexOf(pagePath);
  const isLandingPage = pagePath === sectionSlug;

  const prevPage = isLandingPage ? null : findPrevPage({ pageIndex, sectionPages });
  const nextPage = findNextPage({ isLandingPage, pageIndex, sectionPages });

  return { nextPage, prevPage };
};

export const findPrevPage = ({ pageIndex, sectionPages }) => {
  const prevPagesKeys = Object.keys(sectionPages)
    .slice(0, pageIndex)
    .reverse();
  const prevPagesValues = Object.values(sectionPages)
    .slice(0, pageIndex)
    .reverse();
  const prevUrlIndex = findIndex(
    prevPagesKeys,
    key =>
      key.includes('url') &&
      sectionPages[key] !== null &&
      !sectionPages[key.replace('url', 'isHeading')]
  );
  const prevUrl = prevPagesValues[prevUrlIndex];
  const prevTitleKey = prevPagesKeys[prevUrlIndex].replace('url', 'title');
  const prevTitle = sectionPages[prevTitleKey];

  return {
    title: prevTitle,
    url: `/documentation/${prevUrl}/`,
  };
};

export const findNextPage = ({ pageIndex, sectionPages }) => {
  const nextPagesKeys = Object.keys(sectionPages).slice(pageIndex + 1);
  const nextPagesValues = Object.values(sectionPages).slice(pageIndex + 1);
  const nextUrlIndex = findIndex(
    nextPagesKeys,
    key =>
      key.includes('url') &&
      sectionPages[key] !== null &&
      !sectionPages[key.replace('url', 'isHeading')]
  );
  // last page, so return null
  if (nextUrlIndex === -1) return null;
  const nextUrl = nextPagesValues[nextUrlIndex];
  const nextTitleKey = nextPagesKeys[nextUrlIndex].replace('url', 'title');
  const nextTitle = sectionPages[nextTitleKey];

  return {
    title: nextTitle,
    url: `/documentation/${nextUrl}/`,
  };
};
