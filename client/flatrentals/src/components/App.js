import React from 'react';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Programmers from './Programmers';
import Orders from './Orders'; 
import '../App.css';
import { useEffect } from 'react';
import Home from './Home';
import Navigation from './NavBar';

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
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Programmers' element={<Programmers/>}></Route>
        <Route path='/Orders' element={<Orders/>}></Route>
      </Routes>
      </div>
  )
}
  
export default App;
