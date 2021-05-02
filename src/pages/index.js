import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HeaderBanner from '../components/headerBanner';
import Section from '../components/section';
import Services from '../components/services';
import About from '../components/about';
import Map from '../components/map';
import JoinUs from '../components/joinUs';
import Partners from '../components/partners';

import data from '../data/data.json';

export default function IndexPage({
  data: {
    markdownRemark: { frontmatter },
  },
}) {
  return (
    <Layout>
      <SEO
        title="Home"
        description={data.configs.description}
        lang={data.configs.lang}
        meta={data.configs.meta}
      />
      <HeaderBanner bannerText={frontmatter.title} />
      <Services
        title={frontmatter.servicesSection.title}
        list={frontmatter.servicesSection.services}
      />
      <About
        title={data.about.title}
        content={data.about.content}
        image={data.about.image}
      />
      <Section title="Tezos around the world">
        <Map />
      </Section>
      <Section
        title="Join the Tezos Eco-system"
        className="bg-tezos-dark"
        titleColor="white"
      >
        <JoinUs membersTypes={data.membersTypes} />
      </Section>
      <Section title="Our Partners">
        <Partners partnersList={data.partners} />
      </Section>
    </Layout>
  );
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        servicesSection: PropTypes.shape({
          title: PropTypes.string.isRequired,
          services: PropTypes.array,
        }),
      }),
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index" } }) {
      frontmatter {
        title
        servicesSection {
          title
          services {
            title
            description
            image {
              publicURL
            }
          }
        }
      }
    }
  }
`;
