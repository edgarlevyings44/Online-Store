import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Register from './Components/Register';
import Login from './Components/Login';
import HomePage from './Components/Homepage/HomePage';
import { TopCategoriesPage } from './Components/Homepage/TopCategoriesPart';
import DrinksPage from './Components/Homepage/CDJHomePage';
import FruitsVegPage from './Components/Homepage/FVHomePage';
import SnacksPage from './Components/Homepage/SCHomePage';
import FeaturedBrandsPage from './Components/Homepage/FeaturedBrandsPage';
import { useState } from 'react';
import Cart from './Components/Homepage/Cart';
import { Navbar } from './Components/Homepage/Navbar';
import FruitsVegetablesPage from './Components/Homepage/FruitsVegetablesPage';
import ColdDrinksPage from './Components/Homepage/ColdDrinksPage';
import SnacksMunchiesPage from './Components/Homepage/SnacksMunchies';
import AllCategoriesPage from './Components/Homepage/AllCategories';
import Mpesa from './Components/Homepage/Mpesa';
import MyOrders from './Components/Homepage/MyOrders';
import ResetPassword from './Components/Homepage/ResetPassword';

function AppRoutes({showNotification, customer, setCustomer, handleAddToCart, totalAmount, removeFromCart, cart, setCart}) {

  return (
    <div className="App">
        <Routes>

          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login setCustomer={setCustomer}/>}/>
          <Route path='/resetpassword' element={<ResetPassword />}/>
          <Route path='/' element={<HomePage handleAddToCart={handleAddToCart} />}/>
          <Route path='/top-categories' element={<TopCategoriesPage />}/>
          <Route path='/fruits-and-vegetables' element={<FruitsVegPage handleAddToCart={handleAddToCart}/>}/>
          <Route path='/cold-drinks-and-juices' element={<DrinksPage handleAddToCart={handleAddToCart}/>}/>
          <Route path='/snacks-and-munchies' element={<SnacksPage handleAddToCart={handleAddToCart}/>}/>
          <Route path='/featured-brands' element={<FeaturedBrandsPage />}/>
          <Route path='/all-categories' element={<AllCategoriesPage handleAddToCart={handleAddToCart} showNotification={showNotification} />}/>
          <Route path='/all-fruits' element={<FruitsVegetablesPage handleAddToCart={handleAddToCart}/>}/>
          <Route path='/all-drinks' element={<ColdDrinksPage handleAddToCart={handleAddToCart}/>}/>
          <Route path='/all-snacks' element={<SnacksMunchiesPage handleAddToCart={handleAddToCart}/>}/>
          <Route path='/cart' element={<Cart customer={customer} cart={cart} setCart={setCart} removeFromCart={removeFromCart} totalAmount={totalAmount}/>}/>
          <Route path='/cart/payment' element={<Mpesa totalAmount={totalAmount}/>}/>
          <Route path='/myorders' element={<MyOrders />}/>
          

        </Routes>
    </div>
  );
}

export default AppRoutes;
