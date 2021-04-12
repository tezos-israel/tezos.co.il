import React from 'react';
import TeamMember from '../components/TeamMember';
import data from '../data/teamData.json';

function Members() {
  return (
    <div className="bg-tezos-dark flex flex-col items-center">
      <p className="text-white text-5xl font-bold museo">Our Team</p>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 justify-items-center space-x-8 space-y-4">
        {data.map((item, index) => {
          return (
            <TeamMember
              key={index}
              social={item.social}
              name={item.name}
              role={item.role}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Members;
