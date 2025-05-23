import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import { IoHome } from 'react-icons/io5'
import { TbWorldWww } from 'react-icons/tb'

export default function ContactUs() {
  return (
    <footer className="footer bg-white text-rose-600 text-xl p-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <aside className=''>
            <img className='w-40 items-center justify-center' src="https://i.ibb.co/mVpmBbdW/Asset-2.png" alt="" />
          </aside>
          <div className="col-span-2">
            <div className="flex flex-row items-start gap-2">
              <div className="text-xl"> <IoHome /> </div>
              <p className=""> 203 Sunset Towers, 123 Shannon Lane, Morningside, Johannesburg, 2057, Republic of South Africa. </p>
            </div>
            <div className="flex flex-row items-start gap-2">
              <TbWorldWww />
              <a href='https://www.rooibos.international' className=""> www.rooibos.international </a>
            </div>
            <div className="flex flex-row items-start gap-2">
              <IoIosMail />
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
  )
}
