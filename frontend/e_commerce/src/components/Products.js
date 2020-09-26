import React, { useState } from 'react'
// import './style.css'
const Products = ({ products,setUrl }) => {
    // const [url, setUrl] = useState('')
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
                            <h4 onClick={()=>console.log(image.price)} style={{cursor:"pointer"}}>{image.title}</h4>
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
