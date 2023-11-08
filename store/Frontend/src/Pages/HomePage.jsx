import React from 'react'
import Header from '../components/Layout/Header/Header'
import Categories from '../components/Categories/Categories'
import Campaigns from '../components/Campaigns/Campaigns'
import Products from '../components/Products/Product'
import Policy from '../components/Layout/Policy/Policy'
import Footer from '../components/Layout/Footer/Footer'
import Sliders from '../components/Slider/Sliders'



function HomePage() {
  return (
    <div>
        <Header></Header>
        <Sliders></Sliders>
        <Categories></Categories>
        <Campaigns></Campaigns>
        <Products></Products>
        <Policy></Policy>
        <Footer></Footer>
    </div>
  )
}

export default HomePage
