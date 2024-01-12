import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Down from './components/WebPageDown/Down';
import Home from './components/Home/Home';

function App() {
  return(
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="Down" element={ <Down/> } />
      </Routes>
    </div>
  );
}

export default App;
