import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Programmers from './Programmers';
import Orders from './Orders';
import '../App.css';
import { useEffect, useState } from 'react';
import Home from './Home';
import Navigation from './NavBar';

function App() {

  const [programmers, setProgrammers] = useState([])

  const [selectedOrders, setSelectedOrders] = useState([])

  useEffect(() => {
    fetch('http://localhost:5555/programmers')
      .then(r => r.json())
      .then(allProgrammers => setProgrammers(allProgrammers))
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home programmers={programmers} selectedOrders={selectedOrders} setSelectedOrders={setSelectedOrders} />}></Route>
        <Route path='/Programmers' element={<Programmers programmers={programmers} />}></Route>
        <Route path='/Orders' element={<Orders selectedOrders={selectedOrders} />}></Route>
      </Routes>
    </div>
  )
}

export default App;
