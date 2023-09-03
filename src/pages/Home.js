import React from 'react'
import Catageory from '../components/catageory/Catageory'
import Footer from '../components/footer/Footer'
import Headers from '../components/header/Headers'
import Productsexport from '../components/products/Productsexport'
import '../App.css'
import SideCart from '../components/cart/SideCart'
import CartPopup from '../components/cart/CartPopup'

export default function Home({ productsInfo, showProduct, addProducts, addedProducts, showProductArr }) {



  return (
    <>
      <Headers />
      <SideCart addedProductsArr={addedProducts} />
      <Catageory />
      <Productsexport productsArr={productsInfo} showProduct={showProduct} />
      <CartPopup productsArr={addedProducts} showProductArr={showProductArr} addtoCart={addProducts} />
      <Footer />
    </>
  )
}
