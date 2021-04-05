import React from 'react';
import PropTypes from 'prop-types';
import Button from './shared/button';

function Services({ servicesData }) {
  return (
    <div className="max-w-7xl mx-auto sm:py-20 py-10 sm:px-0 px-7 text-center">
      <h2 className="text-tezos-blue font-semibold sm:mb-14 mb-8 sm:text-3xl text-lg leading-normal">
        {servicesData.title}
      </h2>

      <div className="flex sm:flex-row flex-col justify-around sm:-m-5">
        {servicesData.list.map((item, index) => {
          return (
            <div
              key={index}
              className="shadow-3xl shadwo-tezos-blue bg-white p-10 rounded-xl sm:m-5 w-full sm:mt-0 mt-4"
            >
              <div className="text-center">
                <img src={item.image} width="100" className="mx-auto" />
                <h4 className="font-semibold sm:text-xl text-lg text-tezos-blue mt-5">
                  {item.title}
                </h4>
                <p className="text-tezos-dark sm:text-md text-sm sm:my-5 my-3 ">
                  {item.desc}
                </p>
              </div>
              <Button title="Learn More" className="bg-tezos-blue text-white" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

Services.propTypes = {
  servicesData: PropTypes.shape({
    title: PropTypes.string,
    list: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        desc: PropTypes.string,
      })
    ),
  }),
};

export default Services;
