import React from 'react'
import Banner from '../components/Banner'
import Overview from '../components/Overview'
import ChooseUs from '../components/ChooseUs'
import Specifications from '../components/Specifications'

export default function Home() {
  return (
    <div>
      <Banner />
      <ChooseUs />
      <Overview />
      <Specifications />
    </div>
  )
}
