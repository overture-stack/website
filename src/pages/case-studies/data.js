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

export default [
  {
    title: "Kids First Data Resource Center",
    description:
      "The Kids First Data Resource Center brings together clinical and genetic data from pediatric cancer and structural birth defect cohorts into a centralized, cloud-based discovery portal. We created a collaborative, community focused portal that brings together researchers, health professionals, and patients to accelerate discoveries that improve the lives of pediatric patients and their families.",
    logo: LogoKidsFirst,
    listItems: [
      "Integration with cloud workflow resource Cavatica",
      "Customizable User profiles",
      "Innovative data searching and visualizations "
    ],
    checkItOutLink: "portal.kidsfirstdrc.org",
    details: [
      {
        title: "Arranger",
        description: "Customizable data access made easy.",
        screenshot: screenCGC
      },

      {
        title: "Ego",
        description:
          "Authorization to deliver secure data access to protect data privacy.",
        screenshot: screenCGC
      },

      {
        title: "Persona",
        description:
          "Facilitate collaboration and group science by creating a user profile.",
        screenshot: screenCGC
      },

      {
        title: "Riff",
        description:
          "Social sharing to spread awareness and build the community.",
        screenshot: screenCGC
      }
    ]
  },

  {
    title: "ICGC Data Portal",
    description:
      "The ICGC Data Portal ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit urna ante. Pellentesque rutrum rhoncus purus, et mollis erat eleifend in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed porta lobortis tortor sit amet efficitur. Curabitur neque velit, elementum ut lorem a, euismod. Curabitur neque velit, elementum ut lorem a, euismod.",
    logo: LogoICGC,
    listItems: [
      "Integration with cloud workflow resource Cavatica",
      "Customizable User profiles",
      "Innovative data searching and visualizations"
    ],
    checkItOutLink: "dcc.icgc.org",
    details: [
      {
        title: "OncoJS",
        description:
          "Oncogrid is used to identify trends in mutation co-occurrence by plotting mutations and donors together.",
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
    title: "NCI GDC Data Portal",
    description:
      "The NCI GDC Data Portal ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit urna ante. Pellentesque rutrum rhoncus purus, et mollis erat eleifend in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed porta lobortis tortor sit amet efficitur. Curabitur neque velit, elementum ut lorem a, euismod. Curabitur neque velit, elementum ut lorem a, euismod.",
    logo: LogoGDC,
    listItems: [
      "Integration with cloud workflow resource Cavatica",
      "Customizable User profiles",
      "Innovative data searching and visualizations"
    ],
    checkItOutLink: "portal.gdc.cancer.gov",
    details: [
      {
        title: "OncoJS",
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
    title: "Cancer Genome Collaboratory",
    description:
      "The Cancer Genome Collaboratory ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit urna ante. Pellentesque rutrum rhoncus purus, et mollis erat eleifend in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed porta lobortis tortor sit amet efficitur. Curabitur neque velit, elementum ut lorem a, euismod. Curabitur neque velit, elementum ut lorem a, euismod.",
    logo: LogoCGC,
    listItems: [
      "Integration with cloud workflow resource Cavatica",
      "Customizable User profiles",
      "Innovative data searching and visualizations"
    ],
    checkItOutLink: "http://example.com",
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
  }
];
