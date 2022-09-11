import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Home from './Pages/Home';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import AllDishes from './Components/AllDishes';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/dishes' element={<AllDishes />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
