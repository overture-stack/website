import React from 'react';
import Helmet from 'react-helmet';
import { H1, H2, H3, P1, P2, L1 } from 'components';
import './styles.scss';

export default function ProductsPage() {
  return (
    <main className="ProductsPage">
      <Helmet>
        <title>Overture Products</title>
        <meta
          name="description"
          content="We want to thank the following organizations for their funding and support, without which Overture could not have been possible."
        />
        <meta
          name="keywords"
          content="Overture, data science software, bioinformatics software, open-source software, cancer research, academic collaborations, grant co-applicant, software consulting, project architecture, migration, custom development, scalability, technical support, troubleshooting, Ontario Institute for Cancer Research, OICR, Canarie, DMS Command Line Interface, The National Cancer Institutes Informatics Technology for Cancer Research Program, NCI ITCR, Overture DMS, GA4GH passport system"
        />
      </Helmet>
    </main>
  );
}
