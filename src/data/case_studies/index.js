// Data structure to represent the case studies.
// We iterate over the cases, and render their content.

// GDC Assets
import gdc_sapien from './assets/gdc/sapien.png'
import gdc_oncogrid from './assets/gdc/oncogrid.png'
import gdc_survival from './assets/gdc/survival.png'
import gdc_logo from './assets/gdc/logo.svg'
const gdc_link = "https://portal.gdc.cancer.gov";

// Kids First Assets
import kf_arranger from './assets/kidsfirst/arranger.png'
import kf_ego from './assets/kidsfirst/ego.png'
import kf_persona from './assets/kidsfirst/persona.png'
import kf_riff from './assets/kidsfirst/riff.png'
import kf_logo from "./assets/kidsfirst/logo.svg" 
const kf_link = "https://portal.kidsfirstdrc.org"

// ICGC Assets -- TODO Pending Screenshots
import icgc_onco from './assets/icgc/onco.png';
import icgc_logo from "./assets/icgc/logo.svg";
const icgc_link = "https://dcc.icgc.org";

// CGC Assets -- TODO Pending Screenshots
import cgc_logo from "./assets/cgc/logo.svg";
import screenCGC from "./assets/cgc/screenshot-cancer-collaboratory-temp.png";
const cgc_link = "https://cancercollaboratory.org";

// HCMIS 
import hcmis_logo from './assets/hcmis/logo.svg';
import hcmis_arranger from './assets/hcmis/arranger.png';
import hcmis_cms from './assets/hcmis/cms.png';
import hcmis_riff from './assets/hcmis/riff.png';
const hcmis_link = "https://hcmi-searchable-catalog.nci.nih.gov/"

export default [
  {
    title: "Kids First Data Resource Center",
    slug: "kidsFirst",
    description: `The <a target='_blank' href='${kf_link}'>Kids First Data Resource Center </a> brings together clinical and genetic data from pediatric cancer and structural birth defect cohorts into a centralized, cloud-based discovery portal. We created a collaborative, community focused portal that brings together researchers, health professionals, and patients to accelerate discoveries that improve the lives of pediatric patients and their families.`,
    logo: kf_logo,
    listItems: [
      "Integration with the cloud workflow resource, Cavatica",
      "Customizable user profiles",
      "Innovative data searching and visualization",
      "Interactive cohort builder allowing query combinations",
    ],
    clientLink: kf_link,
    details: [
      {
        title: "Arranger",
        description: "Customizable data access made easy.",
        screenshot: kf_arranger
      },
      {
        title: "Ego",
        description: "Authentication and authorization to deliver secure data access.",
        screenshot: kf_ego
      },
      {
        title: "Persona",
        description: "Facilitate collaboration and group science by creating a user profile.",
        screenshot: kf_persona
      },
      {
        title: "Riff",
        description: "Social sharing to spread awareness and build the community.",
        screenshot: kf_riff
      }
    ]
  },
  {
    title: "ICGC Data Portal",
    slug: "icgcDataPortal",
    description: `The <a target='_blank' href='${icgc_link}'>International Cancer Genome Consortium (ICGC) </a> is a global initiative to build a comprehensive catalog of mutational abnormalities in the major tumor types. The portal currently contains data from 86 worldwide cancer projects, collectively representing about molecular data from over 22,000 donors with more than 80 million somatic mutations accessible to researchers.`,
    logo: icgc_logo,
    listItems: [
      "Interoperability with distributed data repositories including AWS S3 and Cancer Genome Collaboratory",
      "Beautiful and informative genomic visualizations",
      "In-browser analysis on cancer genomic data",
    ],
    clientLink: icgc_link,
    details: [
      {
        title: "Score",
        description: "Fast file transfer with file bundling, resumable multi-part downloads, and BAM/CRAM slicing",
        screenshot:icgc_onco 
      },

      {
        title: "Song",
        description: "Distributed file management through secure metadata storage.",
        screenshot:icgc_onco 
      },

      {
        title: "Ego",
        description: "Authentication and authorization to deliver secure data access.", 
        screenshot: icgc_onco 
      },
      {
        title: "OncoJS",
        description: "OncoGrid visualizes genomic data to identify trends and patterns.", 
        screenshot: icgc_onco 
      },
      {
        title: "Jukebox",
        description: "Automated deployment of JupyterHub to analyze ICGC data on Jupyter Notebooks.", 
        screenshot: icgc_onco 
      }
    ]
  },
  {
    title: "NCI GDC Data Portal",
    slug: "nciGdc",
    logo: gdc_logo,
    description: `The <a href='${gdc_link}' target='_blank'>National Cancer Institute’s GDC Data Portal</a> has harmonized genomic data from over 33,000 cancer patients from programs such as The Cancer Genome Atlas (TCGA), Therapeutically Applicable Research to Generate Effective Treatments (TARGET) and Foundation Medicine.`,
    listItems: [
      "Explore genomic and clinical data from cancer patients",
      "Create virtual cohort by search across all patients for specific clinical attributes and genomic mutations",
    ],
    clientLink: gdc_link,
    details: [
      {
        title: "OncoJS",
        description: "Sapien correlates donors to primary sites of the human body.",
        screenshot: gdc_sapien
      },
      {
        title: "OncoJS",
        description: "OncoGrid visualizes genomic data to identify trends and patterns.",
        screenshot: gdc_oncogrid
      },
      {
        title: "OncoJS",
        description: "Survivalplot visualizes datasets to determine probable health outcomes.",
        screenshot: gdc_survival
      },
    ]
  },
  {
    title: "Cancer Genome Collaboratory",
    slug: "cgc",
    description: `The <a target='_blank' href='${cgc_link}'>Cancer Genome Collaboratory</a> is an academic compute cloud resource that allows researchers to run complex analysis operations across large ICGC cancer genome data sets as well as their own data. One petabyte of ICGC data is co-located with elastic compute enabling researchers to bring analysis tools to the data for faster discovery.`,
    logo: cgc_logo,
    listItems: [
      "Self-service cloud computing made affordable",
      "Convenient usage tracking for Openstack ",
      "Speed research up by bringing analysis to the data",
    ],
    clientLink: cgc_link,
    details: [
      {
        title: "Billing & Usage",
        description: "Track and manage compute usage on an Openstack tenant to streamline customer billing operations.",
        screenshot: screenCGC
      },

      {
        title: "Enrollment",
        description: "Automatically manage user enrolment to a project, as well as supporting user self-registration.",
        screenshot: screenCGC
      },
    ]
  },
  {
    title: "Human Cancer Models Initiative",
    slug: "humanCancerModels",
    description: `The <a href='${hcmis_link}' target='_blank'>Human Cancer Models Initiative Searchable Catalog</a> is an interactive catalog of purchasable next-generation, tumor-derived organoids and cell lines. The catalog is supported by a custom content management system for entry and validation of clinical and genomic data. Investigate individual model pages for licensing requirements, molecular features, culturing requirements and purchasing details. `,
    logo: hcmis_logo,
    listItems: [
      "Customized “shopping” experience for researchers to browse innovative cancer models",
      "Models annotated with genomic and clinical data",
    ],
    clientLink: hcmis_link,
    details: [
      {
        title: "Arranger",
        description: "Customizable data access made easy.",
        screenshot: hcmis_arranger
      },

      {
        title: "Riff",
        description: "Social sharing to spread awareness and build the community.",
        screenshot: hcmis_riff
      },

      {
        title: "CMS",
        description: "Entry and validation of clinical and genomic data.",
        screenshot: hcmis_cms
      }
    ]
  }
];
