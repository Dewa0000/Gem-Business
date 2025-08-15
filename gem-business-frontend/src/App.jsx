import { useState } from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import SignUpForm from './Pages/signUpForm'
import './App.css'
import LoginForm from './Pages/loginForm'
import Header from './Components/Header'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage'

function App() {
  

  return (
     <>
     <Router>
      <Header/>
      <Routes>
        <Route path='/' element = {<HomePage/>}></Route>
        <Route path='/signup' element= {<SignUpForm/>}/>
        <Route path='/login' element = {<LoginForm/>}/>
      </Routes>
      <Footer/>
     </Router>
        
     </>
  )
}

export default App
