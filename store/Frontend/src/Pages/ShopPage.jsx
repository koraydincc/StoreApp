import React from 'react'
import Header from '../components/Layout/Header/Header'
import Categories from '../components/Categories/Categories'
import Products from '../components/Products/Product'
import Policy from '../components/Layout/Policy/Policy'
import Footer from '../components/Layout/Footer/Footer'

function ShopPage() {
  return (
    <React.Fragment>
        <Categories></Categories>
        <Products></Products>
        <Policy></Policy>
    </React.Fragment>
  )
}

export default ShopPage
