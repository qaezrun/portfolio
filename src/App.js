import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Create from './components/MessageCreation/create';
import Down from './components/WebPageDown/Down';
import Default from './components/Portfolio/default';
import Projects from './components/Portfolio/projects';
import ProjectHolder from './components/Portfolio/projectHolder';


function App() {
  return(
    <div className="App">
      <Routes>
        <Route path="/" element={ <Default/> } />
        <Route path="Down" element={ <Down/> } />
        <Route path="Create" element={ <Create/> } />
        <Route path="Projects" element={ <Projects/> } />
        <Route path="ProjectsHolder" element={ <ProjectHolder/> } />
      </Routes>
    </div>
  );
}

export default App;
