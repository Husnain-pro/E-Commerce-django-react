import React from 'react';
import { Link } from 'react-router-dom';
const Products = ({ products, setUrl, setSingleTitle, setSinglePrice, setSingleUrl }) => {
    function handleChange(e) {
        setUrl(`?ordering=${e.target.value}`)
    }
    return (
        <div>
            <div class="small-container">
                <div class="row row-2">
                    <h2>All Products</h2>
                    <select onChange={handleChange}>
                        <option value="Default">Default Sorting</option>
                        <option value="-price">Sort By High Price</option>
                        <option value="price">Sort By Low Price</option>
                        <option value="rating">Sort By Rating</option>
                        <option value="sale">Sort By Sale</option>
                    </select>
                </div>
                <div class="row">
                    {products.length > 0 ? products.map((image, index) =>
                        <div class="col-4">
                            <img src={image.dir_url} key={index} alt="" />
                            <Link to="/single_product"><h4 style={{ cursor: "pointer" }} onClick={() => {
                                setSinglePrice(image.price);
                                setSingleTitle(image.title);
                                setSingleUrl(image.dir_url);
                            }}>{image.title}</h4></Link>
                            <div class="rating">
                                <i class="fa fa-star-o" style={{ color: "red" }}></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <p>${image.price}</p>
                        </div>
                    ) : <h1>Loading.....</h1>}
                </div>
            </div>
        </div>
    )
}

export default Products

