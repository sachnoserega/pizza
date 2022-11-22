import React from 'react'
import { Routes, Route } from "react-router-dom"
import './scss/app.scss'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
// import NotFound from './pages/NotFound'

// import pizzas from './assets/pizzas/pizzas.json'



function App() {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
           <Route path='/' element={<Home />} />
           <Route path='*' element={< Cart />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App;
