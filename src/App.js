import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Create from './components/MessageCreation/create';
import Reviews from './components/Reviews/reviews';

function App() {
  return(
    <div className="App">
      <Routes>
        <Route path="/" element={ <Create/> } />
        <Route path="reviews" element={ <Reviews/> } />
      </Routes>
    </div>
  );
}

export default App;
