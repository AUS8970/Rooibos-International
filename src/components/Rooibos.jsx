import React from "react";

export default function Rooibos() {
  return (
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/7xLGhp5P/Rooiboss.png)",
        }}>
        {/* <div className="hero-overlay bg-opacity-60"></div> */}
        <div className="hero-content text-neutral-content text-start p-20">
          <div className="">
            {/* Applications List */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold text-rose-800 mb-6"> Applications Beyond Tea </h2>
              <ul className="space-y-2 text-lg text-gray-800 list-disc list-inside">
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
              <ul className="space-y-2 text-lg text-gray-800 list-disc list-inside">
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
              <ul className="space-y-2 text-lg text-gray-800 list-disc list-inside">
                <li><strong>Adults:</strong> boosts heart health, supports digestion, promotes restful sleep. </li>
                <li><strong>Infants and Babies:</strong> soothes colic, aids digestion, relieves skin irritations. </li>
                <li><strong>Children:</strong> naturally calming, ideal for hyperactivity. </li>
                <li><strong>Women:</strong> assists during different phases of the reproductive life cycle. </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
}