import React from 'react';

const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/N2GVrL9x/Asset-5.png)",
      }}>
      <div className="hero-overlay"></div>
      <div className="hero-content flex flex-col text-neutral-content">
          <div className="">
            <img className='w-60' src="https://i.ibb.co/mVpmBbdW/Asset-2.png" alt="" />
          </div>
          <div className="font-merriweather mt-10 text-center">
            <h1 className='text-8xl'> Pure </h1> 
            <h2 className='text-5xl'> South African </h2> 
            <h2 className='text-5xl'> Rooibos </h2> 
            <h6 className='text-2xl'> Naturally Caffeine - Free </h6>
          </div>
      </div>
    </div>
  );
};

// https://i.ibb.co/BHkCBBrF/banner-logo.png

    // <div className="hero min-h-screen" style={{ backgroundImage: "url(https://i.ibb.co/N2GVrL9x/Asset-5.png)"}}>
    //   {/* <div className="hero-overlay bg-opacity-60"></div> */}
    //   <div className="hero-content flex-row-reverse text-neutral-content">
    //     <div className="pl-5">
    //       <img className='w-60' src="https://i.ibb.co/mVpmBbdW/Asset-2.png" alt="" />
    //     </div>
    //     <div className="font-merriweather mt-10">
    //       <h2 className='text-5xl'> Pure South African Rooibos </h2> 
    //       <p className='text-xl'> Nature’s gift from South Africa – naturally caffeine - free and rich in antioxidants. </p>
    //     </div>
    //   </div>
    // </div>

export default Home;