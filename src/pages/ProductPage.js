import React from 'react'
import Footer from '../components/footer/Footer'
import WhiteHeader from '../components/header/WhiteHeader'
import Productsexport from '../components/products/Productsexport'
import SideCart from '../components/cart/SideCart'
import CartPopup from '../components/cart/CartPopup'

export default function ProductPage({ productsInfo, showProduct, addProducts, addedProducts, showProductArr }) {
  return (
    <>
      <WhiteHeader />
      <SideCart addedProductsArr={addedProducts} />
      <Productsexport productsArr={productsInfo} showProduct={showProduct} />
      <CartPopup productsArr={addedProducts} showProductArr={showProductArr} addtoCart={addProducts} />
      <Footer />
    </>
  )
}
