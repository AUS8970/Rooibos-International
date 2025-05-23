import React from 'react'

export default function WhatWeSupplay() {
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
      </div>
    </div>
  )
}
