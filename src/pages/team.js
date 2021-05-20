import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import TeamMember from '../components/TeamMember';
import SEO from '../components/seo';

function Team({
  data: {
    markdownRemark: { frontmatter },
  },
}) {
  return (
    <Layout>
      <SEO title="Team" />
      <div className="bg-tezos-dark flex flex-col py-7">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-white text-2xl text-center font-museo capitalize">
            {frontmatter.title}
          </h2>
          <div className="flex flex-wrap  items-center justify-center">
            {frontmatter.teamMember.map((item, index) => {
              return (
                <TeamMember
                  key={index}
                  social={item.socialLinks}
                  name={item.name}
                  role={item.role}
                  image={item.image.publicURL}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

Team.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        teamMember: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string.isRequired,
            role: PropTypes.string.isRequired,
            image: PropTypes.shape({
              publicURL: PropTypes.string.isRequired,
            }).isRequired,
            socialLinks: PropTypes.arrayOf(
              PropTypes.shape({
                socialNetwork: PropTypes.string.isRequired,
                url: PropTypes.string.isRequired,
              })
            ),
          })
        ),
      }),
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query TeamPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "team" } }) {
      frontmatter {
        title
        teamMember {
          name
          role
          socialLinks {
            socialNetwork
            url
          }
          image {
            publicURL
          }
        }
      }
    }
  }
`;
export default Team;
