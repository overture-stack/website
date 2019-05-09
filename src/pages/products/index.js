import React from "react";
import Helmet from "react-helmet";
import { Layout, Hero, H3 } from "../../components";
import "./styles.scss";

const ProductQuadrant = ({ title, description }) => {
  return (
    <section className="quadrant">
      <div className="quadrant-title">{title}</div>
      <p>{description}</p>
    </section>
  );
};

const ProductsPage = () => (
  <Layout>
    <main className="Products">
      {/* Metadata */}
      <Helmet>
        <title>Overture Products</title>
        <meta name="Overture Products" content="" />
        <meta
          name="keywords"
          content="Overture, data science software, bioinformatics software, open-source software, cancer research, cloud-based storage, BAM slicing, CRAM slicing, data integrity, data transfer, genomic solutions, Ontario Institute for Cancer Research, OICR"
        />
      </Helmet>

      {/* Hero */}
      <Hero
        title="Products"
        titleClass="product-title"
        fgImage="img_products"
        fgImageClass="hero-img"
        subtitle="Build your own genomics platform that allows your users to collaborate and share their scientific discoveries."
      />

      {/* Products  */}
      <section className="pt4">
        <ProductQuadrant
          title="Generate & Upload"
          description="Products that allow your data submitters to generate genomic and clinical metadata and upload the corresponding files:"
        />

        <ProductQuadrant
          title="Generate & Upload"
          description="Products that allow your data submitters to generate genomic and clinical metadata and upload the corresponding files:"
        />
      </section>
    </main>
  </Layout>
);

export default ProductsPage;
