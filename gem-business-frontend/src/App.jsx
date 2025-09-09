import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignUpForm from './Pages/signUpForm'
import './App.css'
import LoginForm from './Pages/loginForm'
import Header from './Components/Header'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage'
import ProductsPage from './Pages/productsPage'
import AboutUs from "./Pages/AboutUs"
import CartReviewPage from './Pages/CartPage'
import { CartProvider } from "./Context/cartContext"
import CheckoutPage from './Pages/Checkout'
import ThankYouPage from './Pages/Thankyou'
import MyAccount from './Pages/myAccount'
import ProtectedRoutes from './Routes/ProtectedRoutes'
import GemRecommendation from './Pages/Gem-Recommendation'

function App() {


  return (
    <>
      <CartProvider>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/signup' element={<SignUpForm />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/products' element={<ProductsPage />}></Route>
            <Route path='/about-us' element={<AboutUs />}></Route>
            <Route path='/cart' element={<CartReviewPage />}></Route>
            <Route path='/checkout' element={<CheckoutPage />}></Route>
            <Route path='/thank-you' element={<ThankYouPage />}></Route>
            <Route path='/my-account' element={<ProtectedRoutes><MyAccount/></ProtectedRoutes>}></Route>
            <Route path='/gem-recommendation' element={<GemRecommendation/>}></Route>
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </>
  )
}

export default App
