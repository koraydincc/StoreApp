
import './App.css';
import HomePage from './Pages/HomePage';
import React from 'react';
import ShopPage from './Pages/ShopPage';
import ContactPage from './Pages/ContactPage';
import Auth from './components/Auth/Auth';
import AuthPage from './Pages/AuthPage';
import Cart from './components/Cart/Cart';
import CartPage from './Pages/CartPage';
import ProductDetailsPage from './Pages/ProductDetailsPage';


function App() {
  return (
    //div yerine React.Fragment kullanırsak dom tarafında boşuna yer kaplamaz 
    <React.Fragment>
       {/* <HomePage></HomePage> */}
       {/* <ShopPage></ShopPage> */}
       {/* <ContactPage></ContactPage> */}
       {/* <AuthPage></AuthPage> */}
       {/* <CartPage></CartPage> */}
       <ProductDetailsPage></ProductDetailsPage>
    </React.Fragment>
  );
}

export default App;
