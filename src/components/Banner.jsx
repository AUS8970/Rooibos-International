import React from 'react';

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/N2GVrL9x/Asset-5.png)",
      }}>
      <div className="hero-overlay"></div>
      <div className="hero-content flex flex-row gap-20 text-neutral-content">
        <div className="">
          <img className='w-60' src="https://i.ibb.co/mVpmBbdW/Asset-2.png" alt="" />
        </div>
        <div className="font-merriweather flex flex-col gap-3 mt-10 text-center">
          <h2 className='text-5xl'> Pure South African Rooibos </h2> 
          <p className="text-xl"> Nature’s finest herbal tea, full of antioxidants and naturally sweet. </p>
          <a href="/products" className="">
            <button className='bg-rose-700 p-3 px-5 rounded-full'> Explore Your Rooibos </button>
          </a>
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

export default Banner;







// 12 Section in 4/5 page: name, section

// Home
// Product Overview                              :* ১. প্রোডাক্টটা কি রকম? 
// Applications Beyond Tea                       :* ২. product
// Key Benefits of Rooibos                       :* ৩. প্রোডাক্টের উপকারিতা কি?
// Rooibos for All                               :* ৪. প্রোডাক্টটি কাদের জন্য?
// What We Supply                                :* ৫. আমরা কেন প্রোডাক্টটি বিক্রি করতেছি?
// Grade                                         :* ৬. কেন প্রোডাক্টটি উত্তম?
// Bulk Rooibos Product Features                 :* ৭. প্রোডাক্টের কি কি বৈশিষ্ঠ্য রয়েছে?
// Typical Bulk Rooibos Technical Specifications :* ৮. প্রোডাক্ট কিভাবে প্রস্তুত করা হয়?
// Bulk Packaging Options                        :* ৯. প্রোডাক্ট কিভাবে প্যাকেজিং করা হয়?
// Why Choose Us?                                :* ০. কেন প্রোডাক্টটি আপনি পছন্দ করবেন?
// Contact Us

// দরকার: Product Quality
//      ১. প্রোডাক্টটা কি রকম? 
//      ০. কেন প্রোডাক্টটি আপনি পছন্দ করবেন?
// কিছুটা: 
//     ৪. প্রোডাক্টটি কাদের জন্য? 
//     ৩. প্রোডাক্টের উপকারিতা কি? 
//     ৬. কেন প্রোডাক্টটি উত্তম? 
//     ৭. প্রোডাক্টের কি কি বৈশিষ্ঠ্য রয়েছে?
// নেই: 
//     ৫. আমরা কেন প্রোডাক্টটি বিক্রি করতেছি?
//     ৮. প্রোডাক্ট কিভাবে প্রস্তুত করা হয়? 
//     ৯. প্রোডাক্ট কিভাবে প্যাকেজিং করা হয়? 

// 1. Home: 1. Home
// 2. 
// 3. 
// 4. 
// 5. Contact: 1. Contact Us
