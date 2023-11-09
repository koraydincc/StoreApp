import React from 'react'
import Auth from '../components/Auth/Auth'
import Header from '../components/Layout/Header/Header'
import Policy from '../components/Layout/Policy/Policy'
import Footer from '../components/Layout/Footer/Footer'

function AuthPage() {
  return (
    <React.Fragment>
        
        <Auth></Auth>
        <Policy></Policy>
       
    </React.Fragment>
  )
}

export default AuthPage
