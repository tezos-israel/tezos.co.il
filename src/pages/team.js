import React from 'react';
import TeamMember from '../components/TeamMember';
import data from '../data/data.json';
import teamData from '../data/teamData.json';
import Layout from '../components/layout';
import SEO from '../components/seo';

function Team() {
  return (
    <Layout>
      <SEO
        title="Team"
        description={data.configs.description}
        lang={data.configs.lang}
        meta={data.configs.meta}
      />
      <div className="bg-tezos-dark flex flex-col py-7">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white text-2xl text-center font-museo">
            Our Team
          </h2>
          <div className="flex flex-wrap  items-center justify-center">
            {teamData.map((item, index) => {
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
      </div>
    </Layout>
  );
}
export default Team;
