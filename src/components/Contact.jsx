import React from 'react'
import { FaHome, FaMailBulk, FaPhone } from 'react-icons/fa'
import { FaWebAwesome } from 'react-icons/fa6'

export default function Contact() {
  return (
    <section>
      <footer className="footer bg-white text-rose-800 text-xl p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <aside className=''>
            <img className='w-40 items-center justify-center' src="https://i.ibb.co/mVpmBbdW/Asset-2.png" alt="" />
          </aside>
          <div className="col-span-2">
            <div className="flex flex-row items-start gap-2">
              <div className="text-xl"> <FaHome /> </div>
              <p className=""> 203 Sunset Towers, 123 Shannon Lane, Morningside, Johannesburg, 2057, Republic of South Africa. </p>
            </div>
            <div className="flex flex-row items-start gap-2">
              <FaWebAwesome />
              <a href='https://www.rooibos.international' className=""> www.rooibos.international </a>
            </div>
            <div className="flex flex-row items-start gap-2">
              <FaMailBulk />
              <a href='mailto:info@rooibos.international' className=""> info@rooibos.international</a>
            </div>
            <div className="flex flex-row items-start gap-2">
              <FaPhone />
              <p className=""> 
                <a href="tel:+27 82 943 8460"> +27 82 943 8460 </a> 
                or 
                <a href="tel:+27 83 345 1119"> +27 83 345 1119 </a> 
                <br /> 
                <small className='text-sm italic'> (Available on WhatsApp and WeChat) </small> </p>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-rose-700 w-full text-white text-lg p-4">
        <p className="text-center"> All rights reserved | 2025 @ Rooibos International. </p>
      </div>
    </section>
  )
};