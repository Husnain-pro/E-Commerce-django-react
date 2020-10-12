import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import Account from './components/Account';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Products from './components/Products';
import SingleProduct from './components/SingleProduct';
import Footer from './profile/Footer';
import Navbar from './profile/Navbar';
import Profile from './profile/Profile';

function App() {

  const [feature, setFeature] = useState([]);
  const [latest, setLatest] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [Url, setUrl] = useState('')
  const [SingleTitle, setSingleTitle] = useState('')
  const [SingleUrl, setSingleUrl] = useState('')
  const [SinglePrice, setSinglePrice] = useState()

  useEffect(() => {
    fetch("http://127.0.0.1:8000/feature/")
      .then(res => res.json())
      .then(result => {
        setFeature(result);
      })
  }, [])

  useEffect(() => {
    fetch("http://127.0.0.1:8000/latest/")
      .then(res => res.json())
      .then(result => {
        setLatest(result);
      })
  }, [])

  useEffect(() => {

    fetch(`http://127.0.0.1:8000/all_products/${Url}`)
      .then(res => res.json())
      .then(result => {
        setAllProducts(result);
      })
  }, [Url])
  console.log(Url)

  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" >
            <Profile feature={feature} latest={latest}
              setSingleTitle={setSingleTitle}
              setSinglePrice={setSinglePrice} setSingleUrl={setSingleUrl}
            ></Profile>
          </Route>
          <Route path="/products" >
            <Products setSingleTitle={setSingleTitle}
              setSinglePrice={setSinglePrice} setSingleUrl={setSingleUrl}
              setUrl={setUrl} products={allProducts}>
            </Products>
          </Route>
          <Route path="/account" >
            <Account></Account>
          </Route>
          <Route path="/cart" >
            <Cart></Cart>
          </Route>
          <Route path="/single_product" >
            <SingleProduct
              SinglePrice={SinglePrice} SingleTitle={SingleTitle}
              SingleUrl={SingleUrl}
              setSingleTitle={setSingleTitle}
              setSinglePrice={setSinglePrice} setSingleUrl={setSingleUrl}
              feature={latest}></SingleProduct>
          </Route>
          <Route path="/contact" >
            <Contact></Contact>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

