import * as React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

import headerData from '../data/header.json';

function IndexPage() {
  return (
    <Layout headerData={headerData}>
      <SEO title="Home" />
    </Layout>
  );
}

export default IndexPage;
