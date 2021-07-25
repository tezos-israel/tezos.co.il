import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HeaderBanner from '../components/headerBanner';
import Section from '../components/section';
import Services from '../components/services';
import About from '../components/about';
// import Map from '../components/map';
import JoinUs from '../components/joinUs';
import Partners from '../components/partners';

export default function IndexPage({
  data: {
    markdownRemark: { frontmatter },
  },
}) {
  return (
    <Layout>
      <SEO />
      <HeaderBanner bannerText={frontmatter.title} />
      <Services
        title={frontmatter.servicesSection.title}
        list={frontmatter.servicesSection.services}
      />
      <Section
        title={frontmatter.joinSection.title}
        className="bg-tezos-dark"
        titleColor="white"
      >
        <JoinUs membersTypes={frontmatter.joinSection.joinList} />
      </Section>
      <About
        title={frontmatter.aboutSection.title}
        content={frontmatter.aboutSection.content}
        image={frontmatter.aboutSection.image}
      />
      {/* <Section title="Tezos around the world">
        <Map />
      </Section> */}
      <Section title={frontmatter.partnersSection.title}>
        <Partners partnersList={frontmatter.partnersSection.partnersList} />
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
        aboutSection: PropTypes.shape({
          title: PropTypes.string.isRequired,
          content: PropTypes.string.isRequired,
          image: PropTypes.shape({
            publicURL: PropTypes.string,
          }),
        }),
        joinSection: PropTypes.shape({
          title: PropTypes.string.isRequired,
          joinList: PropTypes.array,
        }),
        partnersSection: PropTypes.shape({
          title: PropTypes.string.isRequired,
          partnersList: PropTypes.array,
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
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                  width: 100
                )
              }
            }
          }
        }
        aboutSection {
          title
          content
          image {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                width: 200
              )
            }
          }
        }
        joinSection {
          title
          joinList {
            title
            description
            url
          }
        }
        partnersSection {
          title
          partnersList {
            partnerImage {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                  width: 300
                )
              }
            }
            url
          }
        }
      }
    }
  }
`;
