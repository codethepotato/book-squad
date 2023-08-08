
import '../App.css';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './Home';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />}  />
        </Routes>
      </header>
    </div>

  
  );
}

export default App;
