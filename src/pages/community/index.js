import React from 'react';
import Helmet from 'react-helmet';
import { Hero, H2, H3 } from 'components';
import './styles.scss';

export default function CommunityPage() {
  return (
    <main className="CommunityPage">
      {/* Metadata */}
      <Helmet>
        <title>Overture Community</title>
        <meta name="description" content="" />
        <meta
          name="keywords"
          content="Overture, data science software, bioinformatics software, open-source software, cancer research, academic collaborations, grant co-applicant, software consulting, project architecture, migration, custom development, scalability, technical support, troubleshooting, Ontario Institute for Cancer Research, OICR, Canarie, DMS Command Line Interface, The National Cancer Institutes Informatics Technology for Cancer Research Program, NCI ITCR, Overture DMS, GA4GH passport system"
        />
      </Helmet>
    </main>
  );
}
