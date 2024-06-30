import { internalUrlJoin } from '../utils';

export const ABOUT_US_PATH = '/about-us/';
export const ACKNOWLEDGEMENTS_PATH = '/acknowledgements/';
export const CASE_STUDIES_PATH = '/case-studies/';
export const CONTACT_US_PATH = '/contact-us/';
export const COMMUNITY_PATH = '/community/';
export const GETTING_STARTED_PATH = '/getting-started/';
export const PRIVACY_PATH = '/privacy/';
export const PRODUCTS_PATH = '/products/';
export const SERVICES_PATH = '/services/';
export const TERMS_PATH = '/terms-conditions/';
export const HOME_PATH = '/';
export const DEPLOYMENT_GUIDE =
  '/documentation/guides/deployment/introduction/';
export const ADMINISTRATION_GUIDE =
  '/documentation/guides/administration/introduction/';
export const SUBMISSION_GUIDE =
  '/documentation/guides/submission/clientsubmission/';
export const DOWNLOAD_GUIDE = '/documentation/guides/download/clientdownload/';

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
