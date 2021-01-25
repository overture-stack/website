// Data structure to represent the case studies.
// We iterate over the cases, and render their content.

import React from 'react';
import { LinkHelper as Link } from 'components';
import {
  CGC_LINK,
  GDC_LINK,
  HCMIS_LINK,
  ICGC_LINK,
  KIDS_FIRST_LINK,
} from 'constants/external-links';

// GDC Assets
import gdc_sapien from './assets/gdc/sapien.png';
import gdc_oncogrid from './assets/gdc/oncogrid.png';
import gdc_survival from './assets/gdc/survival.png';
import gdc_logo from './assets/gdc/logo.svg';

// Kids First Assets
import kf_arranger from './assets/kidsfirst/arranger.png';
import kf_ego from './assets/kidsfirst/ego.png';
import kf_persona from './assets/kidsfirst/persona.png';
import kf_riff from './assets/kidsfirst/riff.png';
import kf_logo from './assets/kidsfirst/logo.svg';

// ICGC Assets -- TODO Pending 2 Screenshots (Song / Score)
import icgc_onco from './assets/icgc/onco.png';
import icgc_song from './assets/icgc/song.png';
import icgc_score from './assets/icgc/score.png';
import icgc_jukebox from './assets/icgc/jukebox.png';
import icgc_ego from './assets/icgc/ego.png';
import icgc_logo from './assets/icgc/logo.svg';

import cgc_logo from './assets/cgc/logo.svg';
import cgc_billing from './assets/cgc/billing.png';
import cgc_enrolment from './assets/cgc/enrolment.png';

// HCMIS
import hcmis_logo from './assets/hcmis/logo.svg';
import hcmis_arranger from './assets/hcmis/arranger.png';
import hcmis_cms from './assets/hcmis/cms.png';
import hcmis_riff from './assets/hcmis/riff.png';

export default [
  {
    title: 'Kids First Data Resource Center',
    slug: 'kidsFirst',
    description: (
      <div>
        The <Link to={KIDS_FIRST_LINK}>Kids First Data Resource Center</Link> brings together
        clinical and genetic data from pediatric cancer and structural birth defect cohorts into a
        centralized, cloud-based discovery portal. We created a collaborative, community focused
        portal that brings together researchers, health professionals, and patients to accelerate
        discoveries that improve the lives of pediatric patients and their families.
      </div>
    ),
    logo: kf_logo,
    listItems: [
      'Integration with the cloud workflow resource, Cavatica',
      'Customizable user profiles',
      'Innovative data searching and visualization',
      'Interactive cohort builder allowing query combinations',
    ],
    clientLink: KIDS_FIRST_LINK,
    details: [
      {
        title: 'Arranger',
        description: 'Customizable data access made easy.',
        screenshot: kf_arranger,
      },
      {
        title: 'Ego',
        description: 'Authentication and authorization to deliver secure data access.',
        screenshot: kf_ego,
      },
      {
        title: 'Persona',
        description: 'Facilitate collaboration and group science by creating a user profile.',
        screenshot: kf_persona,
      },
      {
        title: 'Riff',
        description: 'Social sharing to spread awareness and build the community.',
        screenshot: kf_riff,
      },
    ],
  },
  {
    title: 'ICGC Data Portal',
    slug: 'icgcDataPortal',
    description: (
      <div>
        The <Link to={ICGC_LINK}>International Cancer Genome Consortium (ICGC)</Link> is a global
        initiative to build a comprehensive catalog of mutations in the major tumor types. The
        portal currently contains data from 86 worldwide cancer projects, collectively representing
        about molecular data from over 22,000 donors with more than 80 million somatic mutations
        accessible to researchers.
      </div>
    ),
    logo: icgc_logo,
    listItems: [
      'Interoperability with distributed data repositories including AWS S3 and Cancer Genome Collaboratory',
      'Beautiful and informative genomic visualizations',
      'In-browser analysis on cancer genomic data',
    ],
    clientLink: ICGC_LINK,
    details: [
      {
        title: 'OncoJS',
        description: 'OncoGrid visualizes genomic data to identify trends and patterns.',
        screenshot: icgc_onco,
      },
      {
        title: 'Score',
        description:
          'Fast file transfer with file bundling, resumable multi-part downloads, and BAM/CRAM slicing',
        screenshot: icgc_score,
      },

      {
        title: 'Song',
        description: 'Distributed file management through secure metadata storage.',
        screenshot: icgc_song,
      },

      {
        title: 'Ego',
        description: 'Authentication and authorization to deliver secure data access.',
        screenshot: icgc_ego,
      },
      {
        title: 'Jukebox',
        description:
          'Automated deployment of JupyterHub to analyze ICGC data on Jupyter Notebooks.',
        screenshot: icgc_jukebox,
      },
    ],
  },
  {
    title: 'NCI GDC Data Portal',
    slug: 'nciGdc',
    logo: gdc_logo,
    description: (
      <div>
        The <Link to={GDC_LINK}>National Cancer Institute’s Genomic Data Commons Data Portal</Link>{' '}
        has harmonized genomic data from over 33,000 cancer patients from programs such as The
        Cancer Genome Atlas (TCGA), Therapeutically Applicable Research to Generate Effective
        Treatments (TARGET) and Foundation Medicine.
      </div>
    ),
    listItems: [
      'Explore genomic and clinical data from cancer patients',
      'Create virtual cohort by search across all patients for specific clinical attributes and genomic mutations',
    ],
    clientLink: GDC_LINK,
    details: [
      {
        title: 'Sapien',
        description: 'Correlates donors to primary sites of the human body',
        screenshot: gdc_sapien,
      },
      {
        title: 'OncoGrid',
        description: 'OncoGrid visualizes genomic data to identify trends and patterns.',
        screenshot: gdc_oncogrid,
      },
      {
        title: 'Survivalplot',
        description: 'Visualizes datasets to determine probable health outcomes.',
        screenshot: gdc_survival,
      },
    ],
  },
  {
    title: 'Cancer Genome Collaboratory',
    slug: 'cgc',
    description: (
      <div>
        The <Link to={CGC_LINK}>Cancer Genome Collaboratory</Link> is an academic compute cloud
        resource that allows researchers to run complex analysis operations across large ICGC cancer
        genome datasets as well as their own data. One petabyte of ICGC data is co-located with
        elastic compute enabling researchers to bring analysis tools to the data for faster
        discovery.
      </div>
    ),
    logo: cgc_logo,
    listItems: [
      'Self-service cloud computing made affordable',
      'Convenient usage tracking for Openstack',
      'Accelerate research by bringing analysis to the data',
    ],
    clientLink: CGC_LINK,
    details: [
      {
        title: 'Billing & Usage',
        description:
          'Track and manage compute usage on an Openstack tenant to streamline customer billing operations.',
        screenshot: cgc_billing,
      },

      {
        title: 'Enrolment',
        description:
          'Automatically manage user enrolment to a project, as well as supporting user self-registration.',
        screenshot: cgc_enrolment,
      },
    ],
  },

  {
    title: 'Human Cancer Models Initiative',
    slug: 'humanCancerModels',
    description: (
      <div>
        The <Link to={HCMIS_LINK}>Human Cancer Models Initiative Searchable Catalog</Link> is an
        interactive catalog of purchasable next-generation, tumor-derived organoids and cell lines.
        The catalog is supported by a custom content management system for entry and validation of
        clinical and genomic data. Investigate individual model pages for licensing requirements,
        molecular features, culturing requirements and purchasing details.
      </div>
    ),
    logo: hcmis_logo,
    listItems: [
      'Customized “shopping” experience for researchers to browse innovative cancer models',
      'Models annotated with genomic and clinical data',
    ],
    clientLink: HCMIS_LINK,
    details: [
      {
        title: 'Arranger',
        description: 'Customizable data access made easy.',
        screenshot: hcmis_arranger,
      },

      {
        title: 'Riff',
        description: 'Social sharing to spread awareness and build the community.',
        screenshot: hcmis_riff,
      },

      {
        title: 'CMS',
        description: 'Entry and validation of clinical and genomic data.',
        screenshot: hcmis_cms,
      },
    ],
  },
];
