import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navigation from './Navigation/Navigation'
import Signup from './Signup/Signup'
import Login from './Login/Login'
import AddProduct from './AddProduct/AddProduct'
import Home from './Home/Home'
import Cart from './Cart/Cart'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/add-product'element={<AddProduct/>}/>
        <Route path='/'element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}
