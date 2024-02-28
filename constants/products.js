import urlJoin from 'proper-url-join';
import { internalUrlJoin } from '../utils';
import { PRODUCTS_PATH } from './pages';
import { ONCOJS_GITHUB_LINK, OVERTURE_GITHUB_LINK } from './external-links';

// products info that is created or accessed programmatically
// for other external link constants use external-links.js

const productsObj = {
  arranger: {
    iconWhite: 'productArrangerWhite',
    title: 'Arranger',
  },
  billing: {
    iconWhite: 'productBillingWhite',
    productsPath: null,
    title: 'Billing & Usage',
  },
  enrolment: {
    iconWhite: 'productEnrolmentWhite',
    title: 'Enrolment',
  },
  dms: {
    iconWhite: 'productDMSWhite',
    productsPath: null,
    title: 'DMS',
  },
  ego: {
    iconWhite: 'productEgoWhite',
    title: 'Ego',
  },
  jukebox: {
    githubUrl: urlJoin(OVERTURE_GITHUB_LINK, 'jupyter'),
    iconWhite: 'productJukeboxWhite',
    title: 'Jukebox',
  },
  maestro: {
    iconWhite: 'productMaestroWhite',
    title: 'Maestro',
  },
  oncojs: {
    githubUrl: ONCOJS_GITHUB_LINK,
    iconWhite: 'productOncoWhite',
    title: 'OncoJS',
  },
  overture: { githubUrl: OVERTURE_GITHUB_LINK, productsPath: null, title: 'Overture' },
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
  'dms-ui': {
    iconWhite: 'productDMSWhite',
    title: 'DMS-UI',
  },
  'setup': {
    iconWhite: 'productDMSWhite',
    title: 'Setup',
  },
};

const productsDict = Object.entries(productsObj).reduce(
  (acc, [key, value]) => ({
    ...acc,
    ...(key
      ? {
          [key]: {
            githubUrl: urlJoin(OVERTURE_GITHUB_LINK, key),
            productsPath: internalUrlJoin([PRODUCTS_PATH, key]),
            ...value,
          },
        }
      : {}),
  }),
  {}
);

export default productsDict;
