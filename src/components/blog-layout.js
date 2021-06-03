import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';

export function BlogLayout({ children, title = 'Blog' }) {
  return (
    <Layout>
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-9">
          <h1 className="text-3xl text-center font-museo font-bold">{title}</h1>
          {children}
        </div>
      </div>
    </Layout>
  );
}

BlogLayout.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
};
