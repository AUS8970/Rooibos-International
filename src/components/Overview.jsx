import React from 'react';

const Overview = () => {
  return (
    <div className="hero bg-rose-100 min-h-screen">
      <div className="hero-content p-16 px-10 md:px-20 flex-col lg:flex-row">
        <img src="https://i.ibb.co/C5fKhqZm/Vanilla-Rooibos.png" className="max-w-sm w-96 rounded-lg " />
        <div className='text-center md:text-start'>
          <h1 className="text-5xl text-rose-800 font-bold"> Product Overview </h1>
          <p className="py-6 text-xl md:text-2xl text-rose-500">
            Grown in the pristine Cederberg mountains of
            South Africa, rooibos is famous for its vibrant red
            colour, naturally sweet taste, and outstanding
            purity. Sustainably harvested and processed under
            strict quality standards, our rooibos teas and
            products meets the highest international
            requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;