import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Error() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-rose-900">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="mt-4 text-lg text-gray-100">Sorry, the page you are looking for does not exist.</p>
        <a href="/" className="mt-6 px-4 py-2 bg-rose-700 text-white rounded hover:bg-rose-700">Go Back Home</a>
      </div>
      <Footer />
    </div>
  )
}
