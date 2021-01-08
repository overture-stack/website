const properUrlJoin = require('proper-url-join');
const { internalUrlJoin } = require('../utils');

// github

const GITHUB_ROOT = 'https://github.com/overture-stack/';
const DOCS_ROOT = '/documentation';
const PRODUCTS_ROOT = '/products';

const makeProductsObj = slug => ({
  docs: internalUrlJoin(DOCS_ROOT, slug),
  github: properUrlJoin(GITHUB_ROOT, slug),
  products: internalUrlJoin(PRODUCTS_ROOT, slug),
});

const productsDictCleaner = 

const productsDict = {
  arranger: {
    docs: internalUrlJoin(DOCS_ROOT, 'arranger'),
    github: properUrlJoin(GITHUB_ROOT, 'arranger'),
    iconWhite: 'productArrangerWhite',
    products: internalUrlJoin(PRODUCTS_ROOT, 'arranger'),
    title: 'Arranger',
  },
  billing: {
    docs: properUrlJoin(DOCS_ROOT, 'billing'),
    github: properUrlJoin(GITHUB_ROOT, 'billing'),
    iconWhite: 'productBillingWhite',
    title: 'Billing & Usage',
  },
  enrolment: {
    docs: properUrlJoin(DOCS_ROOT, 'enrolment'),
    github: properUrlJoin(GITHUB_ROOT, 'enrolment'),
    iconWhite: 'productEnrolmentWhite',
    products: internalUrlJoin(PRODUCTS_ROOT, 'enrolment'),
    title: 'Enrolment',
  },
  dms: {
    docs: properUrlJoin(DOCS_ROOT, 'dms'),
    github: properUrlJoin(GITHUB_ROOT, 'dms'),
    iconWhite: 'productDMSWhite',
    title: 'DMS',
  },
  ego: {
    docs: properUrlJoin(DOCS_ROOT, 'ego'),
    github: properUrlJoin(GITHUB_ROOT, 'ego'),
    iconWhite: 'productEgoWhite',
    products: internalUrlJoin(PRODUCTS_ROOT, 'products'),
    title: 'Ego',
  },
  jukebox: {
    docs: internalUrlJoin(DOCS_ROOT, 'jukebox'),
    github: properUrlJoin(GITHUB_ROOT, 'jupyter'),
    iconWhite: 'productJukeboxWhite',
    products: internalUrlJoin(PRODUCTS_ROOT, 'jukebox'),
    title: 'Jukebox',
  },
  maestro: {
    docs: internalUrlJoin(DOCS_ROOT, 'maestro'),
    github: properUrlJoin(GITHUB_ROOT, 'maestro'),
    products: internalUrlJoin(PRODUCTS_ROOT, 'maestro'),
    iconWhite: 'productMaestroWhite',
    title: 'Maestro',
  },
  oncojs: {
    docs: internalUrlJoin(DOCS_ROOT, 'oncojs'),
    github: 'https://github.com/oncojs',
    iconWhite: 'productOncoWhite',
    products: internalUrlJoin(PRODUCTS_ROOT, 'oncojs'),
    title: 'OncoJS',
  },
  overture: { github: GITHUB_ROOT, title: 'Overture' },
  persona: {
    docs: internalUrlJoin(DOCS_ROOT, 'persona'),
    github: properUrlJoin(GITHUB_ROOT, 'persona'),
    iconWhite: 'productPersonaWhite',
    products: internalUrlJoin(PRODUCTS_ROOT, 'persona'),
    title: 'Persona',
  },
  riff: {
    docs: internalUrlJoin(DOCS_ROOT, 'riff'),
    github: properUrlJoin(GITHUB_ROOT, 'riff'),
    iconWhite: 'productRiffWhite',
    products: internalUrlJoin(PRODUCTS_ROOT, 'riff'),
    title: 'Riff',
  },
  score: {
    docs: internalUrlJoin(DOCS_ROOT, 'score'),
    github: properUrlJoin(GITHUB_ROOT, 'score'),
    iconWhite: 'productScoreWhite',
    products: internalUrlJoin(PRODUCTS_ROOT, 'score'),
    title: 'Score',
  },
  song: {
    docs: internalUrlJoin(DOCS_ROOT, 'score'),
    github: properUrlJoin(GITHUB_ROOT, 'song'),
    iconWhite: 'productSongWhite',
    products: internalUrlJoin(PRODUCTS_ROOT, 'products'),
    title: 'Song',
  },
};

module.exports = { productsDict };
