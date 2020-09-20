import React, { useEffect, useState } from 'react';
import Footer from './profile/Footer';
import Navbar from './profile/Navbar';
import Profile from './profile/Profile';
function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/feature/")
      .then(res => res.json())
      .then(result => {
        setItems(result);
        console.log(items);
      })

  }, [])
  return (
    <div>
      <Navbar></Navbar>
      <Profile></Profile>
      <Footer></Footer>
    </div>
  );
}

export default App; 
