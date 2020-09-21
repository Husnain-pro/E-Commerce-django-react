import React, { useEffect, useState } from 'react';
import Footer from './profile/Footer';
import Navbar from './profile/Navbar';
import Profile from './profile/Profile';
function App() {
  const [feature, setFeature] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/feature/")
      .then(res => res.json())
      .then(result => {
        setFeature(result);
      })
  }, [])
  if (feature.length > 0)
    console.log(feature[0].title);
  return (
    <div>
      <Navbar></Navbar>
      <Profile feature={feature}></Profile>
      <Footer></Footer>
    </div>
  );
}

export default App; 
