import React from 'react';
import Button from './shared/button';

function JoinUs() {
  return (
    <div className="text-center max-w-7xl mx-auto text-white flex justify-between mt-16">
      <div className="bg-white bg-opacity-20 rounded-3xl py-7 px-10 mx-3 w-1/3 flex flex-col justify-between">
        <div>
          <h4 className="font-semibold text-xl">Community</h4>
          <p className="text-sm my-6 text-opacity-60">
            Community is what was, is, and will be what makes Tezos so special.
            Join us, it’s free.
          </p>
        </div>
        <div>
          <Button title="View Details" className="bg-tezos-blue text-white" />
        </div>
      </div>
      <div className="bg-white bg-opacity-20 rounded-3xl py-7 px-10 mx-3 w-1/3 flex flex-col justify-between">
        <div>
          <h4 className="font-semibold text-xl">Developers</h4>
          <p className="text-sm my-6 text-opacity-60">
            Tezos Israel is creating an R&D center and looking for talented,
            experienced developers to add to our team.
          </p>
        </div>
        <div>
          <Button title="View Details" className="bg-tezos-blue text-white" />
        </div>
      </div>
      <div className="bg-white bg-opacity-20 rounded-3xl py-7 px-10 mx-3 w-1/3 flex flex-col justify-between">
        <div>
          <h4 className="font-semibold text-xl">Baking</h4>
          <p className="text-sm my-6 text-opacity-60">
            Baking is how blocks are produced and validated on the Tezos
            blockchain.
          </p>
        </div>
        <div>
          <Button title="View Details" className="bg-tezos-blue text-white" />
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
