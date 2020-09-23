import React,{ useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import Footer from './profile/Footer';
import Navbar from './profile/Navbar';
import Profile from './profile/Profile';
import Products from './components/Products'
import Account from './components/Account'
function App() {
  const [feature, setFeature] = useState([]);
  const [latest, setLatest] = useState([]);
  const[allProducts,setAllProducts] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/feature/")
      .then(res => res.json())
      .then(result => {
        setFeature(result);
      })
  }, [])
  if (feature.length > 0)
    console.log(feature[0].title);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/latest/")
      .then(res => res.json())
      .then(result => {
        setLatest(result);
      })
  }, [])
  if (latest.length > 0)
    console.log(feature[0].title);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/all_products/")
      .then(res => res.json())
      .then(result => {
        setAllProducts(result);
      })
  }, [])
  if (allProducts.length > 0)
    console.log(allProducts[0].title);
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" >
            <Profile feature={feature} latest={latest}></Profile>
          </Route>
          <Route path="/products" >
            <Products products={allProducts}></Products>
          </Route>
          <Route path="/account" >
            <Account></Account>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App; 
