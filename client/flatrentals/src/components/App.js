
import '../App.css';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './Home';


function App() {
  useEffect(() => {
    fetch('http://localhost:5555/users')
      .then(r => r.json())
      .then(allUsers => {
        console.log(allUsers);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
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
