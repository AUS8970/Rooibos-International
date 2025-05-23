import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import { IoHome } from 'react-icons/io5'
import { TbWorldWww } from 'react-icons/tb'

export default function ContactUs() {
  return (
    <footer className="footer bg-white text-rose-700 text-xl pt-28 px-14 py-16 min-h-screen">
      <div className="grid grid-cols-1 gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold"> Contact Us </h2>
          <p className="text-xl"> We’d love to hear from you! Whether you’re interested in our premium Rooibos products, have a question about bulk supply, or simply want to learn more about what we offer — our team is here to help. Reach out to us anytime, and we’ll get back to you promptly. Let’s bring the magic of Rooibos to your market together. </p>
        </div>
        <div className="flex flex-col gap-1 text-lg">
          <div className="flex gap-2">
            <div className="pt-1"> <IoHome /> </div>
            <p className=""> 203 Sunset Towers, 123 Shannon Lane, Morningside, Johannesburg, 2057, Republic of South Africa. </p>
          </div>
          <div className="flex gap-2">
            <div className="pt-1"> <TbWorldWww /> </div>
            <a href='https://www.rooibos.international' className=""> www.rooibos.international </a>
          </div>
          <div className="flex gap-2">
            <div className="pt-1"> <IoIosMail /> </div>
            <a href='mailto:info@rooibos.international' className=""> info@rooibos.international</a>
          </div>
          <div className="flex gap-2">
            <div className="pt-1"> <FaPhone /></div>
            <p className="">
              <a href="tel:+27 82 943 8460"> +27 82 943 8460 </a>
              or
              <a href="tel:+27 83 345 1119"> +27 83 345 1119 </a>
              <small className='text-xs italic'> (Available on WhatsApp and WeChat) </small> </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
