import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Home from './Pages/Home';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import { CartProvider } from './Context/CartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/about-us' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
