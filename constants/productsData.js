import urlJoin from 'proper-url-join';
import { internalUrlJoin } from '../utils';

// github

const GITHUB_ROOT = 'https://github.com/overture-stack/';
const DOCS_ROOT = '/documentation';
const PRODUCTS_ROOT = '/products';

const makeProductsObj = slug => ({
  docs: internalUrlJoin(DOCS_ROOT, slug),
  github: urlJoin(GITHUB_ROOT, slug),
  products: internalUrlJoin(PRODUCTS_ROOT, slug),
});

const productsObj = {
  arranger: {
    iconWhite: 'productArrangerWhite',
    title: 'Arranger',
  },
  billing: {
    iconWhite: 'productBillingWhite',
    products: null,
    title: 'Billing & Usage',
  },
  enrolment: {
    iconWhite: 'productEnrolmentWhite',
    title: 'Enrolment',
  },
  dms: {
    iconWhite: 'productDMSWhite',
    products: null,
    title: 'DMS',
  },
  ego: {
    iconWhite: 'productEgoWhite',
    title: 'Ego',
  },
  jukebox: {
    // github: properUrlJoin(GITHUB_ROOT, 'jupyter'),
    iconWhite: 'productJukeboxWhite',
    title: 'Jukebox',
  },
  maestro: {
    iconWhite: 'productMaestroWhite',
    title: 'Maestro',
  },
  oncojs: {
    github: 'https://github.com/oncojs',
    iconWhite: 'productOncoWhite',
    title: 'OncoJS',
  },
  overture: { docs: null, github: GITHUB_ROOT, products: null, title: 'Overture' },
  persona: {
    iconWhite: 'productPersonaWhite',
    title: 'Persona',
  },
  riff: {
    iconWhite: 'productRiffWhite',
    title: 'Riff',
  },
  score: {
    iconWhite: 'productScoreWhite',
    title: 'Score',
  },
  song: {
    iconWhite: 'productSongWhite',
    title: 'Song',
  },
};

module.exports = Object.entries(productsObj).reduce(
  ([key, value], acc) => ({
    [key]: {
      docs: internalUrlJoin(DOCS_ROOT, key),
      github: properUrlJoin(GITHUB_ROOT, key),
      products: internalUrlJoin(PRODUCTS_ROOT, key),
      ...value,
    },
    ...acc,
  }),
  {}
);
