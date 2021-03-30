import * as React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

import headerData from '../data/header.json';

function IndexPage() {
  return (
    <Layout menu={headerData.menu}>
      <SEO title="Home" />
    </Layout>
  );
}

export default IndexPage;
