import React from 'react'
import Navbar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import ShopPage from './Pages/ShopPage'
import ProductDetailPage from './Pages/ProductDetailPage'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/shop" element = {<ShopPage/>} />
        <Route path= "/shop/:id" element = {<ProductDetailPage />} />
        {/* <Route path= "/cart" element ={<Cart/>} /> */}
        <Route path= "/login" element ={<Login/>} />
        <Route path= "/register" element ={<Register/>} />

      </Routes>
      <Footer/>
    </div>
  )
}

export default App