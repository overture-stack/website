import { internalUrlJoin } from '../utils';

export const ABOUT_US_PATH = '/about-us/';
export const ACKNOWLEDGEMENTS_PATH = '/acknowledgements/';
export const CASE_STUDIES_PATH = '/case-studies/';
export const CONTACT_US_PATH = '/contact-us/';
export const COMMUNITY_PATH = '/community/';
export const DOCUMENTATION_PATH = '/documentation/';
export const PRIVACY_PATH = '/privacy/';
export const PRODUCTS_PATH = '/products/';
export const SERVICES_PATH = '/services/';
export const TERMS_PATH = '/terms-conditions/';
export const HOME_PATH = '/';

export const caseStudyAnchors = {
  icgcargo: internalUrlJoin([CASE_STUDIES_PATH, '#icgcargo']),
  virusseq: internalUrlJoin([CASE_STUDIES_PATH, '#virusseq']),
  kidsFirst: internalUrlJoin([CASE_STUDIES_PATH, '#kidsFirst']),
  ihcc: internalUrlJoin([CASE_STUDIES_PATH, '#ihcc']),
  humanCancerModels: internalUrlJoin([CASE_STUDIES_PATH, '#humanCancerModels']),
};

export const productsAnchors = {
  song: internalUrlJoin([PRODUCTS_PATH, '#song']),
  score: internalUrlJoin([PRODUCTS_PATH, '#score']),
  maestro: internalUrlJoin([PRODUCTS_PATH, '#maestro']),
  arranger: internalUrlJoin([PRODUCTS_PATH, '#arranger']),
  ego: internalUrlJoin([PRODUCTS_PATH, '#ego']),
};
