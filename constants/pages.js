import { internalUrlJoin } from '../utils';

export const ABOUT_US_PATH = '/about-us/';
export const CASE_STUDIES_PATH = '/case-studies/';
export const CONTACT_PATH = '/contact/';
export const DOCS_PATH = '/documentation/';
export const PRIVACY_PATH = '/privacy/';
export const PRODUCTS_PATH = '/products/';
export const SERVICES_PATH = '/services/';
export const TERMS_PATH = '/terms-conditions/';
export const HOME_PATH = '/';

export const productsAnchors = {
  access: internalUrlJoin([PRODUCTS_PATH, '#access-download']),
  analyze: internalUrlJoin([PRODUCTS_PATH, '#analyze-discover']),
  collaborate: internalUrlJoin([PRODUCTS_PATH, '#collaborate-share']),
  generate: internalUrlJoin([PRODUCTS_PATH, '#generate-upload']),
  track: internalUrlJoin([PRODUCTS_PATH, '#track-manage']),
};
