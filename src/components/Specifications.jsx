import React from 'react'

export default function Specifications() {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: "url(https://i.ibb.co/Psv95g1M/Specifications1.png)", }}>
      <div className="hero-content mt-10 p-16 px-10 md:px-20 grid md:grid-cols-3">
        <div className="col-span-1"> </div>
        <div className="col-span-2 text-neutral-content text-start">
          {/* Typical Bulk Rooibos Technical Specifications */}
          <div className="mb-10">
            <h2 className="text-3xl font-semibold text-rose-100 mb-6">Typical Bulk Rooibos Technical Specifications </h2>

            <ul className="space-y-2 text-lg text-rose-100 list-disc list-inside">
              <li><strong> Cut Sizes : </strong></li>
              <ul className="ml-10 space-y-2 font-normal text-rose-100 list-disc list-inside">
                <li> Super Grade: 3–6 mm (Long Cut) </li>
                <li> Choice Grade: 1–3 mm (Medium Cut) </li>
                <li> Industrial Grade: 1 mm (Fine Cut) </li>
              </ul>
              <li><strong> Moisture Content: </strong> : Max 10%</li>
              <li><strong> Stem Content : </strong></li>
              <ul className="ml-10 space-y-2 font-normal text-rose-100 list-disc list-inside">
                <li> Super Grade: 15% </li>
                <li> Choice Grade: 25% </li>
              </ul>
              <li><strong> Microbiological Compliance:</strong> Meets EU and US export standards</li>
            </ul>
          </div>

          {/* Bulk Packaging Options */}
          <div className="mb-4">
            <h2 className="text-3xl font-semibold text-rose-100 mb-6"> Bulk Packaging Options </h2>
            <ul className="space-y-2 text-lg text-rose-100 list-disc list-inside">
              <li> 20kg / 25kg paper sacks (bulk) </li>
              <li> Palletized shipments (1-ton pallets) </li>
              <li> Custom private label packaging (on request) </li>
            </ul>
          </div>

          <p class="note text-lg text-rose-200 italic"> *Dependent on order requirements, finalised during sale process. </p>
        </div>
      </div>
    </div>
  )
}
