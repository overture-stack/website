// Data structure to represent the case studies.
// We iterate over the cases, and render their content.

import React from 'react';
import { P2, LinkHelper as Link } from 'components';
import {
  ICGC_ARGO_LINK,
  VIRUSSEQ_LINK,
  KIDS_FIRST_LINK,
  IHCC_LINK,
  HCMIS_LINK,
} from 'constants/external-links';

//ICGC ARGO Assets
import icgcargo_logo from './assets/icgcargo/logo.svg';
import icgcargo_chart from './assets/icgcargo/chart.png';

// VirusSeq Assets
import virusseq_logo from './assets/virusseq/logo.svg';
import virusseq_chart from './assets/virusseq/chart.png';

// Kids First Assets
import kf_chart from './assets/kidsfirst/chart.png';
import kf_logo from './assets/kidsfirst/logo.svg';

//IHCC Assets
import ihcc_logo from './assets/ihcc/logo.svg';
import ihcc_chart from './assets/ihcc/chart.png';

// HCMIS
import hcmis_logo from './assets/hcmis/logo.svg';
import hcmis_chart from './assets/hcmis/chart.png';

export default [
  {
    title: 'ICGC ARGO',
    slug: 'icgcargo',
    description: (
      <P2>
        The <Link to={ICGC_ARGO_LINK}>ICGC ARGO Data Platform platform</Link> builds on the legacy
        of the ICGC 25K Data Portal by harmonizing molecular and high-quality clinical data from
        global genomics efforts into a collective and unified knowledge base. ICGC ARGO will improve
        patient outcomes by enabling discovery through the responsible sharing of this curated data
        set with researchers worldwide.
      </P2>
    ),
    logo: icgcargo_logo,
    listItems: [
      [
        '63,116 committed donors, 26 programs representing 13 countries and 20 tumour types',
        'ICGC ARGO aims to analyze specimens from 100,000 cancer patients',
        'IGGC DACO governs the responsible sharing of this data for use in research',
      ],
      [
        { 'Song:': 'Validates all submitted sequence meta(data) against a custom data model' },
        {
          'Score:':
            'Manages file transfers and object storage with added SamTools functionalities to help handle large WGS files',
        },
        { 'Maestro:': 'Indexes multiple song repositories into one elastic search instance' },
        { 'Arranger:': 'Facilitates filtering and querying' },
        { 'Ego:': 'Provides stateless authentication and authorization' },
      ],
      [
        'Harmonizing molecular and high-quality clinical data from global genomics efforts',
        'Built using Overture micro-services',
      ],
    ],
    clientLink: ICGC_ARGO_LINK,
    details: [{ title: 'Chart', description: 'ICGC', screenshot: icgcargo_chart }],
  },

  {
    title: 'CaNCOGeN VirusSeq',
    slug: 'virusseq',
    description: (
      <P2>
        The <Link to={VIRUSSEQ_LINK}>Canadian VirusSeq Data Portal</Link> is an open-source and
        open-access data portal for all Canadian SARS-CoV-2 sequences and associated non-personal
        contextual data. VirusSeq harmonizes, validates, and automates submission to international
        databases, providing critical information for public health and policy decisions, testing
        and tracing strategies, virus detection and surveillance methods, vaccine and drug
        development, and understanding susceptibility, disease severity, and clinical outcomes.
      </P2>
    ),
    logo: virusseq_logo,
    listItems: [
      [
        'Built-in 4 weeks with Overture',
        'Hosts 474,215 viral genomes, surpassing the projection of 150K',
        'Horizontally scaled with replica Score, Song, and Maestro instances',
      ],
      [
        { 'Score:': 'Managed file transfers and object storage' },
        { 'Song:': 'Modified for the validation and tracking of viral sequencing metadata' },
        { 'Maestro:': 'Indexed sample data for downstream search' },
        {
          'Arranger:':
            'Responsible for all search capabilities, including faceted search and data tables',
        },
        { 'Ego:': 'Governed the authorization of applications' },
      ],
      [
        'Lorem ipsum dolor sit VirusSeq, consectetur adipiscing elit. Integer nec odio.',
        'Lorem ipsum VirusSeq.',
      ],
    ],
    clientLink: VIRUSSEQ_LINK,
    details: [{ title: 'Chart', description: 'Virus Seq Chart', screenshot: virusseq_chart }],
  },
  {
    title: 'Kids First Data Portal',
    slug: 'kidsFirst',
    description: (
      <P2>
        The <Link to={KIDS_FIRST_LINK}>Kids First Data Resource Center</Link> brings together
        clinical and genetic data from pediatric cancer and structural birth defect cohorts into a
        centralized, cloud-based discovery portal. We created a collaborative, community focused
        portal that brings together researchers, health professionals, and patients to accelerate
        discoveries that improve the lives of pediatric patients and their families.
      </P2>
    ),
    logo: kf_logo,
    listItems: [
      [
        'Data collected across 32 projects',
        '1700 Terra-Bytes, 30.5k Participants, 28k families, 94.9k samples, 187.4k Files',
        'Query and Filter 72 data types with 16 clinical fields',
      ],
      [
        { 'Song:': 'Validation and tracking of genomic metadata' },
        { 'Score:': 'Managed file transfers and object storage' },
        {
          'Arranger:':
            'With the faceted search and customizable data table, arranger enabled users to filter and query this large dataset efficiently',
        },
      ],
      [
        'Lorem ipsum dolor Kids First, consectetur adipiscing elit. Integer nec odio.',
        'Lorem ipsum Kids First.',
      ],
    ],
    clientLink: KIDS_FIRST_LINK,
    details: [
      {
        title: 'Chart',
        description: 'Kids First Chart',
        screenshot: kf_chart,
      },
    ],
  },
  {
    title: 'IHCC',
    slug: 'ihcc',
    description: (
      <P2>
        The <Link to={IHCC_LINK}>International HundredK+ Cohorts Consortium (IHCC)</Link> is
        improving clinical care and population health by aggregating large genomic data cohorts to
        help translational researchers uncover the biological and genetic factors of disease. With
        exception to underrepresented cohorts & populations, all hosted member cohorts are
        disease-agnostic and have available biospecimens and longitudinal follow-up activities. Most
        notably, hosted member cohorts comprise one hundred thousand participants or more.
      </P2>
    ),
    logo: ihcc_logo,
    listItems: [
      ['70 Cohorts', '39 countries', '39 metadata fields'],
      [
        {
          'Arranger:':
            'With Arranger, users are able to filter and query the database through an intuitive UI with a customizable table and faceted search',
        },
      ],
      [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
      ],
    ],
    clientLink: IHCC_LINK,
    details: [
      {
        title: 'IHCC',
        description: 'IHCC chart',
        screenshot: ihcc_chart,
      },
    ],
  },
  {
    title: 'Human Cancer Models Initiative',
    slug: 'humanCancerModels',
    logo: hcmis_logo,
    description: (
      <P2>
        The <Link to={HCMIS_LINK}>Human Cancer Models Initiative (HCMI)</Link> is a catalogue of
        unique cancer models alongside clinical, biospecimen, and molecular data. It also includes
        protocols, consent templates, and clinical data forms, making it a comprehensive resource
        for researchers determining which cancer models to use within their studies. The ultimate
        goal of the HCMI is to support translational cancer research and improve personalized
        patient treatment plans.
      </P2>
    ),
    listItems: [
      [
        '275 unique cancer models across 25 Primary sites',
        'All models are annotated with genomic and clinical data',
        'Enabling researchers to browse and shop for innovative cancer models',
      ],
      [
        {
          'Arranger:':
            'Enables search by filtering and querying the database through an intuitive UI',
        },
      ],
      [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
      ],
    ],
    clientLink: HCMIS_LINK,
    details: [
      {
        title: 'HCMIS',
        description: 'HCMIS chart',
        screenshot: hcmis_chart,
      },
    ],
  },
];
