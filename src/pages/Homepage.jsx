import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import PlanSection from '../components/PlanSection'
import TryNowSection from '../components/TryNowSection'
import Footer from '../components/Footer'

function Homepage() {
  return (
    <div>
        <Header />
        <Banner />
        <PlanSection/>
        <TryNowSection/>
        <Footer/>
    </div>
  )
}

export default Homepage
