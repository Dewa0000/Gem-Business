import { useState } from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import SignUpForm from './Pages/signUpForm'
import './App.css'
import LoginForm from './Pages/loginForm'

function App() {
  

  return (
     <>
     <Router>
      <Routes>
        <Route path='/signup' element= {<SignUpForm/>}/>
        <Route path='/login' element = {<LoginForm/>}/>
      </Routes>
     </Router>
        
     </>
  )
}

export default App
