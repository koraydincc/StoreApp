import React from 'react'
import Header from '../components/Layout/Header/Header'
import ProductDetails from '../components/ProductDetails/ProductDetails'
import Policy from '../components/Layout/Policy/Policy'
import Footer from '../components/Layout/Footer/Footer'

function ProductDetailsPage() {
  return (
    <React.Fragment>
      <Header></Header>
      <ProductDetails></ProductDetails>
      <Policy></Policy>
      <Footer></Footer>
    </React.Fragment>
  )
}

export default ProductDetailsPage