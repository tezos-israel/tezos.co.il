import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

import MostPopular from '../components/mostPopular';
import RecentlyPosts from '../components/recentlyPosts';

import data from '../data/data.json';

function Blogs() {
  return (
    <Layout>
      <SEO title="Blogs" />

      <MostPopular popularBlogs={data.popularBlogs} />

      <RecentlyPosts recentlyBlogs={data.recentlyBlogs} />
    </Layout>
  );
}

export default Blogs;
