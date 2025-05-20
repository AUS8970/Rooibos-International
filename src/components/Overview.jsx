import React from 'react';

const Overview = () => {
  return (
    <div className="hero bg-orange-100 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://i.ibb.co/MDGST4cH/download-removebg-preview.png"
          className="max-w-sm w-96 rounded-lg " />
        <div className='text-center md:text-start'>
          <h1 className="text-5xl text-orange-700 font-bold"> Product Overview </h1>
          <p className="py-6 text-xl md:text-2xl text-orange-500">
            Grown in the pristine Cederberg mountains of <br />
            South Africa, rooibos is famous for its vibrant red <br />
            colour, naturally sweet taste, and outstanding <br />
            purity. Sustainably harvested and processed under <br />
            strict quality standards, our rooibos teas and <br />
            products meets the highest international <br />
            requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;