import React from 'react';
import TeamMember from '../components/TeamMember';
import data from '../data/teamData.json';
import Layout from '../components/layout';
import SEO from '../components/seo';

function Team() {
  return (
    <Layout>
      <SEO title="Team" />
      <div className="bg-tezos-dark flex flex-col">
        <p className="text-white text-5xl font-bold museo self-center">
          Our Team
        </p>
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 justify-items-center space-x-8 space-y-4">
          {data.map((item, index) => {
            return (
              <TeamMember
                key={index}
                social={item.social}
                name={item.name}
                role={item.role}
                email={item.email}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
export default Team;
