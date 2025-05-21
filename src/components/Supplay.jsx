import React from 'react'

export default function Supplay() {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: "url(https://i.ibb.co/GQ25hS0w/Supply.png)", }}>
      {/* <div className="hero-overlay bg-opacity-60"></div> */}
      <div className="hero-content mt-10 p-16 px-10 md:px-20 items-start justify-start flex flex-col text-neutral-content text-start">
        {/* What We Supply? */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-rose-800 mb-6"> What We Supply? </h2>
          <ul className="space-y-2 text-lg text-gray-800 list-disc list-inside">
            <li><strong> Bulk Tea Loose-Leaf: </strong> Super grade, choice grade and industrial grade. </li>
            <li><strong> Prepacked Teas: </strong> Pre-packaged loose-leaf tea and pre-packed tea bags. </li>
            <li><strong> Ice Teas: </strong> Pre-packed flavoured ice teas (various brands) (including sparkling ice teas) </li>
            <li><strong> Hot Drinks: </strong> Including red espresso, red latte, red cappuccino and hot chocolate. </li>
            <li><strong> Health Options: </strong> Including rooibos collagen smoothie blends. </li>
          </ul>
        </div>

        {/* Bulk Rooibos Tea Leaves Grades */}
        <div className="text-gray-800 mb-10">
          <h2 className="text-3xl font-semibold text-rose-800 mb-6"> Bulk Rooibos Tea Leaves Grades </h2>
          <table className="table border-collapse border border-rose-600 text-lg">
            <tr>
              <th className='border border-rose-600'>Grade</th>
              <th className='border border-rose-600'>Description</th>
              <th className='border border-rose-600'>Typical Use</th>
            </tr>
            <tr>
              <td className='border border-rose-600'><strong>Super Grade</strong></td>
              <td className='border border-rose-600'>Finest long-cut leaves, vibrant ruby colour, smooth taste</td>
              <td className='border border-rose-600'>Premium loose-leaf teas, luxury blends</td>
            </tr>
            <tr>
              <td className='border border-rose-600'><strong>Choice Grade</strong></td>
              <td className='border border-rose-600'>Medium cut, slightly more stems, full-bodied flavour</td>
              <td className='border border-rose-600'>Teabags, everyday loose-leaf teas</td>
            </tr>
            <tr>
              <td className='border border-rose-600'><strong>Industrial Grade</strong></td>
              <td className='border border-rose-600'>Fine cut, higher stem and dust content</td>
              <td className='border border-rose-600'>Bulk teabag production, blends</td>
            </tr>
          </table>
        </div>

        {/* Bulk Rooibos Product Features */}
        <div className="mb-4">
          <h2 className="text-3xl font-semibold text-rose-800 mb-6">Bulk Rooibos Product Features</h2>
          <ul className="space-y-2 text-lg text-gray-800 list-disc list-inside">
            <li><strong>Origin:</strong> Cederberg Region, Western Cape, South Africa</li>
            <li><strong>Processing:</strong> Carefully oxidised for full flavour development</li>
            <li><strong>Taste Profile:</strong> Naturally sweet, smooth, low in bitterness</li>
            <li><strong>Colour:</strong> Deep, vibrant red</li>
            <li><strong>Shelf Life:</strong> 24 months when stored properly</li>
            <li><strong>Certifications:</strong> organic, HACCP, FSSC 22000, USDA Organic, Halal, Kosher, Vegan, Fairtrade, Organic (Ecocert), Rainforest Alliance</li>
          </ul>
        </div>

        <p class="note text-lg text-rose-500 italic"> *Product dependent; details available on request and may differ from product to product. </p>
      </div>
    </div>
  )
}
