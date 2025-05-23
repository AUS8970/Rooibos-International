import React from 'react'

export default function Inspiration() {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: "url(https://i.ibb.co/7xLGhp5P/Rooiboss.png)",}}>
      {/* <div className="hero-overlay bg-opacity-60"></div> */}
      <div className="hero-content text-black mt-8 px-10 md:px-20 text-neutral-content text-start p-20">
        <div className="text-black">
          {/* Applications List */}
          <div className="mb-16 text-black">
            <h2 className="text-3xl font-semibold text-rose-800 mb-6"> Applications Beyond Tea </h2>
            <ul className="space-y-2 text-lg list-disc list-inside md:pr-64">
              <li>Ready-to-Drink (RTD) beverages. </li>
              <li>Hot drinks: traditional tea, red latte, red cappuccino, rooibos hot chocolate and red espresso. </li>
              <li>Cold drinks: ice teas, flavoured ice teas, rooibos infused cocktails, rooibos kombucha, rooibos lemonade, rooibos smoothie, rooibos mocktails, rooibos frappe, and rooibos herbal infusions. </li>
              <li>Health and wellness products. </li>
              <li>Beauty and nutraceutical formulations. </li>
              <li>Herbal infusions and custom blends. </li>
            </ul>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-rose-800 mb-6">Key Benefits of Rooibos</h2>
            <ul className="space-y-2 text-lg list-disc list-inside">
              <li><strong>Naturally Caffeine-Free:</strong> perfect for all ages and any time of day. </li>
              <li><strong>Rich in Antioxidants:</strong> supports healthy aging and strengthens the immune system. </li>
              <li><strong>Packed with Vitamins & Minerals:</strong> promotes detoxification and boosts wellness. </li>
              <li><strong>Neuroprotective:</strong> assists brain health and focus. </li>
              <li><strong>Anti-Inflammatory:</strong> aids in muscle recovery and soothes digestive discomfort. </li>
              <li><strong>Stress Relief:</strong> helps lower cortisol levels and improves sleep. </li>
              <li><strong>Low in Tannins:</strong> gentle on the stomach, promotes better iron absorption. </li>
              <li><strong>Naturally Sweet:</strong> enjoy hot or cold without the need for sugar. </li>
            </ul>
          </div>

          {/* Rooibos for All Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-rose-800 mb-6">Rooibos for All</h2>
            <ul className="space-y-2 text-lg list-disc list-inside">
              <li><strong>Adults:</strong> boosts heart health, supports digestion, promotes restful sleep. </li>
              <li><strong>Infants and Babies:</strong> soothes colic, aids digestion, relieves skin irritations. </li>
              <li><strong>Children:</strong> naturally calming, ideal for hyperactivity. </li>
              <li><strong>Women:</strong> assists during different phases of the reproductive life cycle. </li>
            </ul>
          </div>

          {/* Bulk Rooibos Tea Leaves Grades */}
          <div className="mb-10 md:mr-96">
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
          <div className="mb-4 md:mr-80">
            <h2 className="text-3xl font-semibold text-rose-800 mb-6">Bulk Rooibos Product Features</h2>
            <ul className="space-y-2 text-lg list-disc list-inside">
              <li><strong>Origin:</strong> Cederberg Region, Western Cape, South Africa. </li>
              <li><strong>Processing:</strong> Carefully oxidised for full flavour development. </li>
              <li><strong>Taste Profile:</strong> Naturally sweet, smooth, low in bitterness. </li>
              <li><strong>Colour:</strong> Deep, vibrant red. </li>
              <li><strong>Shelf Life:</strong> 24 months when stored properly. </li>
              <li><strong>Certifications:</strong> organic, HACCP, FSSC 22000, USDA Organic, Halal, Kosher, Vegan, Fairtrade, Organic (Ecocert), Rainforest Alliance. </li>
            </ul>
          </div>

          <p class="note text-lg text-rose-500 italic"> *Product dependent; details available on request and may differ from product to product. </p>
        </div>
      </div>
    </div>
  )
}
