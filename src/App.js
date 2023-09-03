import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Create from './components/MessageCreation/create';
import Down from './components/WebPageDown/Down';
import Main from './components/Portfolio/main';
import Default from './components/Portfolio/default';


function App() {
  return(
    <div className="App">
      <Routes>
        <Route path="/" element={ <Default/> } />
        <Route path="Down" element={ <Down/> } />
        <Route path="Main" element={ <Main/> } />
        <Route path="Create" element={ <Create/> } />
      </Routes>
    </div>
  );
}

export default App;
