import { useState } from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import SignUpForm from './Pages/signUpForm'
import './App.css'

function App() {
  

  return (
     <>
     <Router>
      <Routes>
        <Route path='/signup' element= {<SignUpForm/>}/>
      </Routes>
     </Router>
        
     </>
  )
}

export default App
