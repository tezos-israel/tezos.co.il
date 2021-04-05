import React from 'react';
import Button from './shared/button';

import joinData from '../data/join.json';
function JoinUs() {
  return (
    <div className="text-center max-w-7xl mx-auto text-white flex justify-between sm:mt-16 sm:flex-row flex-col sm:px-0 px-7">
      {joinData.list.map((item, index) => {
        return (
          <div
            key={index}
            className="bg-white bg-opacity-20 rounded-3xl sm:py-7 py-4 px-10 sm:mx-3 sm:w-1/3 sm:mt-0 mt-4 w-full flex flex-col justify-between"
          >
            <div>
              <h4 className="font-semibold sm:text-xl text-lg">{item.title}</h4>
              <p className="sm:text-sm text-xs sm:my-6 my-4 text-opacity-60">
                {item.desc}
              </p>
            </div>
            <div>
              <Button
                title="View Details"
                className="bg-tezos-blue text-white"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default JoinUs;
