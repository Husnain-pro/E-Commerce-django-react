import React from 'react'
import './style.css'
const Products = ({ products }) => {
    return (
        <div>
            <div class="small-container">
                <div class="row row-2">
                    <h2>All Products</h2>
                </div>
                <div class="row">
                    {products.map((image, index) =>
                        <div class="col-4">
                            <img src={image.dir_url} key="index" alt="" />
                            <h4>{image.title}</h4>
                            <div class="rating">
                                <i class="fa fa-star-o" style={{ color: "red" }}></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <p>${image.price}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Products
