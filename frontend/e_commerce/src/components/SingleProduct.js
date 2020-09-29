import React, { useEffect, useState } from 'react';
import defaultImg from '../profile/RedStore_Img/images/category-3.jpg';
import './style.css';

const SingleProduct = ({ feature, SinglePrice, SingleTitle, SingleUrl, setSingleTitle, setSinglePrice, setSingleUrl, addToCart }) => {

    const [CartTitle, setCartTitle] = useState('')
    const [CartPrice, setCartPrice] = useState()
    const [CartUrl, setCartUrl] = useState('')
    const [Cartquantity, setCartquantity] = useState()

    const getCookie = (name) => {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    useEffect(() => {
        if (CartPrice && CartTitle && CartUrl) {
            console.log(CartPrice)
            console.log(CartTitle)
            console.log(CartUrl)

            const csrftoken = getCookie('csrftoken');
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-CSRFToken': csrftoken
                },
                body: JSON.stringify({
                    title: `${CartTitle}`, price: `${CartPrice}`, dir_url: `${CartUrl}`,
                    quantity: `${Cartquantity}`
                })
            };
            fetch('http://127.0.0.1:8000/cart/', requestOptions)
                .then((response) => {
                    if (!response.ok) {
                        // error processing
                        throw 'Error';
                    }
                    return response.json()
                })

        }

    })

    function setCart() {
        setCartTitle(SingleTitle)
        setCartPrice(SinglePrice)
        setCartUrl(SingleUrl)
        setCartquantity(1)
    }


    return (

        // <!-- ------------Single_Products_Detail----------->
        <>
            <div class="scrollbar style-1">
                <div class="force-overflow"></div>
            </div>
            <div class="small-container">
                <div class="row">
                    <div class="col-2">
                        {SingleUrl ? <img src={SingleUrl} id="ProductImg" />
                            : <img src={defaultImg} id="ProductImg" />}
                    </div>
                    <div class="col-2">
                        <p>Home / T-Shirt</p>
                        <h1>{SingleTitle}</h1>
                        <h4>${SinglePrice}</h4>
                        <div class="page-btn" style={{ margin: "10px auto 5px" }}>
                            <span>XS</span>
                            <span>S</span>
                            <span>M</span>
                            <span>L</span>
                        </div>
                        <div class="wishList_parent">
                            <div class="wishList_parent_text" onClick={setCart}>
                                <p><a href="#">ADD TO CART</a></p>
                            </div>
                            <div class="wishList_parent_wish"></div>
                        </div>
                        <h3>Product Details</h3>
                        <p>Discover the Collection of Men's T-Shirts and
                        Polos at GUCCI.com. Shop Printed and Embroidered
                        Styles. Enjoy Free Shipping and Unique Gift Wrapping.</p>
                    </div>
                </div>
            </div>

            {/* -- -------------Title------------- */}

            <div class="small-container">
                <div class="row row-2">
                    <h2>Related Products</h2>
                    <p>View More</p>
                </div>
            </div>

            {/* // -- -----------Products------------- */}
            <div class="small-container">
                <div class="row">
                    {feature.length > 0 ? feature.map((image, index) =>
                        <div class="col-4">
                            <img src={image.dir_url} key={index} alt="simple" />
                            <h4 style={{ cursor: "pointer" }} onClick={() => {
                                setSinglePrice(image.price);
                                setSingleTitle(image.title);
                                setSingleUrl(image.dir_url);
                            }}> {image.title}</h4>
                            <div class="rating">
                                <i class="fa fa-star-o" style={{ color: "red" }}></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <p>${image.price}</p>
                        </div>
                    ) : <h1>Intenet Problem .... </h1>}
                </div>
                <div class="page-btn">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>&#8594;</span>
                </div>
            </div>
        </>
    )
}

export default SingleProduct
