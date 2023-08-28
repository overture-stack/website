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

// export const productsAnchors = {
//   access: internalUrlJoin([PRODUCTS_PATH, '#access-download']),
//   analyze: internalUrlJoin([PRODUCTS_PATH, '#analyze-discover']),
//   collaborate: internalUrlJoin([PRODUCTS_PATH, '#collaborate-share']),
//   generate: internalUrlJoin([PRODUCTS_PATH, '#generate-upload']),
//   track: internalUrlJoin([PRODUCTS_PATH, '#track-manage']),
// };

export const caseStudyAnchors = {
  icgcargo: internalUrlJoin([CASE_STUDIES_PATH, '#icgcargo']),
  virusseq: internalUrlJoin([CASE_STUDIES_PATH, '#virusseq']),
  kidsFirst: internalUrlJoin([CASE_STUDIES_PATH, '#kidsFirst']),
  ihcc: internalUrlJoin([CASE_STUDIES_PATH, '#ihcc']),
  humanCancerModels: internalUrlJoin([CASE_STUDIES_PATH, '#humanCancerModels']),
};
