import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Create from './components/MessageCreation/create';
import Down from './components/WebPageDown/Down';

function App() {
  return(
    <div className="App">
      <Routes>
        <Route path="/" element={ <Create/> } />
        <Route path="Down" element={ <Down/> } />
      </Routes>
    </div>
  );
}

export default App;
