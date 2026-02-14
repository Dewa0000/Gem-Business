import { useState, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { CartProvider } from "./Context/cartContext"
import ProtectedRoutes from './Routes/ProtectedRoutes'

const SignUpForm = lazy(() => import('./Pages/signUpForm'))
const LoginForm = lazy(() => import('./Pages/loginForm'))
const HomePage = lazy(() => import('./Pages/HomePage'))
const ProductsPage = lazy(() => import('./Pages/productsPage'))
const AboutUs = lazy(() => import("./Pages/AboutUs"))
const CartReviewPage = lazy(() => import('./Pages/CartPage'))
const CheckoutPage = lazy(() => import('./Pages/Checkout'))
const ThankYouPage = lazy(() => import('./Pages/Thankyou'))
const MyAccount = lazy(() => import('./Pages/myAccount'))
const GemRecommendation = lazy(() => import('./Pages/Gem-Recommendation'))
const PaymentPage = lazy(() => import('./Pages/paymentpage'))
const ProductInfo = lazy(() => import('./Pages/ProductInfo'))
const ContactUsPage = lazy(() => import('./Pages/ContactUs'))
const BlogsPage = lazy(() => import('./Pages/BlogsPage'))
const BlogPost = lazy(() => import('./Pages/BlogbyId'))

function App() {


  return (
    <>
      <CartProvider>
        <Router>
          <Header />
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
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
              <Route path='/payment' element={<PaymentPage/>}></Route>
              <Route path="/product/:id" element={<ProductInfo />} />
              <Route path="/contact-us" element={<ContactUsPage />} />
              <Route path="/blogs" element={<BlogsPage />} />
              <Route path="/blog/:id" element={<BlogPost />} />
            </Routes>
          </Suspense>
          <Footer />
        </Router>
      </CartProvider>
    </>
  )
}

export default App
