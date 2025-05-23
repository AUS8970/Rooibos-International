import React, { useEffect, useState } from 'react'

export default function Recipes() {

  const [drinks, setDrinks] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [meals, setMeals] = useState([]);
  const [wellness, setWellness] = useState([]);
  const [kids, setKids] = useState([]);

  useEffect(() => {
    fetch('/drinks_and_smoothies.json')
      .then(res => res.json())
      .then(data => setDrinks(data))
      .catch(err => console.error("Failed to load recipes:", err));
  }, []);

  useEffect(() => {
    fetch('/desserts_and_treats.json')
      .then(res => res.json())
      .then(data => setDesserts(data))
      .catch(err => console.error("Failed to load recipes:", err));
  }, []);
  
  useEffect(() => {
    fetch('/meals_and_marinades.json')
      .then(res => res.json())
      .then(data => setMeals(data))
      .catch(err => console.error("Failed to load recipes:", err));
  }, []);
  
  useEffect(() => {
    fetch('/wellness_and_skincare.json')
      .then(res => res.json())
      .then(data => setWellness(data))
      .catch(err => console.error("Failed to load recipes:", err));
  }, []);

  useEffect(() => {
    fetch('/for_kids_and_family.json')
      .then(res => res.json())
      .then(data => setKids(data))
      .catch(err => console.error("Failed to load recipes:", err));
  }, []);

  return (
    <section className='pt-28 pb-20 bg-rose-900'>
      <div className="px-5 md:px-20 text-center">
        <h1 className="text-3xl font-bold text-rose-100"> 50 Delicious Rooibos Recipes </h1>
        <p className="text-sm pt-3 md:px-48"> Discover the versatility of rooibos tea with these 50 recipes. From refreshing drinks and nourishing meals to indulgent desserts and self-care remedies, rooibos is a powerful and flexible ingredient suitable for every part of your day. </p>
      </div>
      <div className="join join-vertical w-full px-6 lg:px-20 mt-10">

        {/* Drinks And Smoothies */}
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium"> Drinks & Smoothies </div>
          <div className="collapse-content">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {drinks.length === 0 ? <span className="loading loading-ring loading-lg"></span> : drinks.map(recipe => (
                <div key={recipe.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                  <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-rose-800">{recipe.title}</h2>
                    <p className="text-sm text-gray-600 mt-2">{recipe.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desserts & Treats */}
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium"> Desserts & Treats </div>
          <div className="collapse-content">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {desserts.length === 0 ? <span className="loading loading-ring loading-lg"></span> : desserts.map(recipe => (
                <div key={recipe.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                  <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-rose-800">{recipe.title}</h2>
                    <p className="text-sm text-gray-600 mt-2">{recipe.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Meals & Marinades */}
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium"> Meals & Marinades </div>
          <div className="collapse-content">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {meals.length === 0 ? <span className="loading loading-ring loading-lg"></span> : meals.map(recipe => (
                <div key={recipe.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                  <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-rose-800">{recipe.title}</h2>
                    <p className="text-sm text-gray-600 mt-2">{recipe.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wellness & Skincare */}
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium"> Wellness & Skincare </div>
          <div className="collapse-content">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {wellness.length === 0 ? <span className="loading loading-ring loading-lg"></span> : wellness.map(recipe => (
                <div key={recipe.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                  <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-rose-800">{recipe.title}</h2>
                    <p className="text-sm text-gray-600 mt-2">{recipe.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

         {/* For Kids & Family */}
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium"> For Kids & Family </div>
          <div className="collapse-content">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {kids.length === 0 ? <span className="loading loading-ring loading-lg"></span> : kids.map(recipe => (
                <div key={recipe.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                  <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-rose-800">{recipe.title}</h2>
                    <p className="text-sm text-gray-600 mt-2">{recipe.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};