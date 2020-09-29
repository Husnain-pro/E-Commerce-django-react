import React, { useEffect, useState } from 'react';
import { browserHistory } from 'react-router';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import useScroll from 'use-scroll-behavior';
import Account from './components/Account';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Products from './components/Products';
import SingleProduct from './components/SingleProduct';
import Footer from './profile/Footer';
import Navbar from './profile/Navbar';
import Profile from './profile/Profile';
const history = useScroll(browserHistory);

function App() {

  const [feature, setFeature] = useState([]);
  const [latest, setLatest] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [Url, setUrl] = useState('')
  const [SingleTitle, setSingleTitle] = useState('')
  const [SingleUrl, setSingleUrl] = useState('')
  const [SinglePrice, setSinglePrice] = useState()
  // const [CartTitle, setCartTitle] = useState('')
  // const [CartPrice, setCartPrice] = useState('')
  // const [CartUrl, setCartUrl] = useState('')
  // const [Cartquantity, setCartquantity] = useState('')

  // const getCookie = (name) => {
  //   let cookieValue = null;
  //   if (document.cookie && document.cookie !== '') {
  //     const cookies = document.cookie.split(';');
  //     for (let i = 0; i < cookies.length; i++) {
  //       const cookie = cookies[i].trim();
  //       // Does this cookie string begin with the name we want?
  //       if (cookie.substring(0, name.length + 1) === (name + '=')) {
  //         cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
  //         break;
  //       }
  //     }
  //   }
  //   return cookieValue;
  // }

  // useEffect(() => {
  //   const csrftoken = getCookie('csrftoken');
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //       'X-CSRFToken': csrftoken
  //     },
  //     body: JSON.stringify({
  //       title: `${CartTitle}`, price: `${CartPrice}`, dir_url: `${CartUrl}`,
  //       quantity: `${Cartquantity}`
  //     })
  //   };
  //   fetch('http://127.0.0.1:8000/cart', requestOptions)
  //     .then((response) => {
  //       if (!response.ok) {
  //         // error processing
  //         throw 'Error';
  //       }
  //       return response.json()
  //     })
  //     console.log(CartPrice)
  //     console.log(CartTitle)
  //     console.log(CartUrl)
  // }, [Cartquantity]);

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
      <Router history={history}>
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

