// Data structure to represent the case studies.
// We iterate over the cases, and render their content.

// Logos ---
import LogoCGC from "./assets/logo-Cancer-Genome-Collaboratory.svg";
import LogoICGC from "./assets/logo-ICGC.svg";
import LogoGDC from "./assets/logo-NHI-GDC-DataPortal.svg";
import LogoHCMIS from "./assets/logo-human-cancer-models-initiative-stacked.svg";
import LogoKidsFirst from "./assets/logo-Kids-First-Data-Resource-Center.svg";

// Screenshots ---
import screenCGC from "./assets/screenshot-cancer-collaboratory-temp.png";
import screenHCMI from "./assets/screen-HCMI-arranger.png";
import screenICGC from "./assets/screen-ICGC-oncogrid.png";
import screenGDC from "./assets/screen-GDC.png";
import screenKidsFirst from "./assets/screen-kidsfirst.png";

export default [
  {
    title: "Kids First Data Resource Center",
    slug: "kidsFirst",
    description:
      "The Kids First Data Resource Center brings together clinical and genetic data from pediatric cancer and structural birth defect cohorts into a centralized, cloud-based discovery portal. We created a collaborative, community focused portal that brings together researchers, health professionals, and patients to accelerate discoveries that improve the lives of pediatric patients and their families.",
    logo: LogoKidsFirst,
    listItems: [
      "Integration with cloud workflow resource Cavatica",
      "Customizable User profiles",
      "Innovative data searching and visualizations "
    ],
    clientLink: "portal.kidsfirstdrc.org",
    details: [
      {
        title: "Arranger",
        description: "Customizable data access made easy.",
        screenshot: screenKidsFirst
      },

      {
        title: "Ego",
        description:
          "Authorization to deliver secure data access to protect data privacy.",
        screenshot: screenKidsFirst
      },

      {
        title: "Persona",
        description:
          "Facilitate collaboration and group science by creating a user profile.",
        screenshot: screenKidsFirst
      },

      {
        title: "Riff",
        description:
          "Social sharing to spread awareness and build the community.",
        screenshot: screenKidsFirst
      }
    ]
  },

  {
    title: "ICGC Data Portal",
    slug: "icgcDataPortal",
    description:
      "The ICGC Data Portal ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit urna ante. Pellentesque rutrum rhoncus purus, et mollis erat eleifend in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed porta lobortis tortor sit amet efficitur. Curabitur neque velit, elementum ut lorem a, euismod. Curabitur neque velit, elementum ut lorem a, euismod.",
    logo: LogoICGC,
    listItems: [
      "Integration with cloud workflow resource Cavatica",
      "Customizable User profiles",
      "Innovative data searching and visualizations"
    ],
    clientLink: "https://dcc.icgc.org",
    details: [
      {
        title: "OncoJS",
        description:
          "Oncogrid is used to identify trends in mutation co-occurrence by plotting mutations and donors together.",
        screenshot: screenICGC
      },

      {
        title: "Score",
        description:
          "File bundling, resumable downloads, and BAM/CRAM slicing make data transfer fast and smooth.",
        screenshot: screenICGC
      },

      {
        title: "Jukebox",
        description: "Automated set-up and deployment of JupyterHub.",
        screenshot: screenICGC
      }
    ]
  },

  {
    title: "NCI GDC Data Portal",
    slug: "nciGdc",
    description:
      "The NCI GDC Data Portal ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit urna ante. Pellentesque rutrum rhoncus purus, et mollis erat eleifend in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed porta lobortis tortor sit amet efficitur. Curabitur neque velit, elementum ut lorem a, euismod. Curabitur neque velit, elementum ut lorem a, euismod.",
    logo: LogoGDC,
    listItems: [
      "Integration with cloud workflow resource Cavatica",
      "Customizable User profiles",
      "Innovative data searching and visualizations"
    ],
    clientLink: "https://portal.gdc.cancer.gov",
    details: [
      {
        title: "OncoJS",
        description:
          "Sapien is used to correlate donors to primary sites of the human body.",
        screenshot: screenGDC
      },

      {
        title: "Score",
        description:
          "File bundling, resumable downloads, and BAM/CRAM slicing make data transfer fast and smooth.",
        screenshot: screenGDC
      },

      {
        title: "Jukebox",
        description: "Automated set-up and deployment of JupyterHub.",
        screenshot: screenGDC
      }
    ]
  },
  {
    title: "Cancer Genome Collaboratory",
    slug: "cgc",
    description:
      "The Cancer Genome Collaboratory ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit urna ante. Pellentesque rutrum rhoncus purus, et mollis erat eleifend in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed porta lobortis tortor sit amet efficitur. Curabitur neque velit, elementum ut lorem a, euismod. Curabitur neque velit, elementum ut lorem a, euismod.",
    logo: LogoCGC,
    listItems: [
      "Integration with cloud workflow resource Cavatica",
      "Customizable User profiles",
      "Innovative data searching and visualizations"
    ],
    clientLink: "https://cancercollaboratory.org",
    details: [
      {
        title: "Billing & Usage",
        description:
          "Sapien is used to correlate donors to primary sites of the human body.",
        screenshot: screenCGC
      },

      {
        title: "Score",
        description:
          "File bundling, resumable downloads, and BAM/CRAM slicing make data transfer fast and smooth.",
        screenshot: screenCGC
      },

      {
        title: "Jukebox",
        description: "Automated set-up and deployment of JupyterHub.",
        screenshot: screenCGC
      }
    ]
  },
  {
    title: "Human Cancer Models Initiative",
    slug: "humanCancerModels",
    description:
      "The Human Cancer Models Initiative Searchable Catalog ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit urna ante. Pellentesque rutrum rhoncus purus, et mollis erat eleifend in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed porta lobortis tortor sit amet efficitur. Curabitur neque velit, elementum ut lorem a, euismod. Curabitur neque velit, elementum ut lorem.",
    logo: LogoHCMIS,
    listItems: [
      "Integration with cloud workflow resource Cavatica",
      "Customizable User profiles",
      "Innovative data searching and visualizations"
    ],
    clientLink: "https://hcmi-searchable-catalog.nci.nih.gov",
    details: [
      {
        title: "Arranger",
        description: "Customizable data access made easy.",
        screenshot: screenHCMI
      },

      {
        title: "Score",
        description:
          "File bundling, resumable downloads, and BAM/CRAM slicing make data transfer fast and smooth.",
        screenshot: screenHCMI
      },

      {
        title: "Jukebox",
        description: "Automated set-up and deployment of JupyterHub.",
        screenshot: screenHCMI
      }
    ]
  }
];
