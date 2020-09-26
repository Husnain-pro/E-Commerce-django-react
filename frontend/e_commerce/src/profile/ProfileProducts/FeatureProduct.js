import React from 'react';
// import '../../profile/style.css';

const FeatureProduct = ({ feature }) => {
    return (
        <div>
            {/* -------- feature products ------------ */}
            <div className="small-container">
                <h2 className="title">Featured Products</h2>
                <div className="row">
                    {feature.length > 0 ? feature.map((image, index) =>
                        <div className="col-4">
                            <img src={image.dir_url} key={index} alt="" />
                            <h4>{image.title}</h4>
                            <div className="rating">
                                <i className="fa fa-star-o" style={{ color: "red" }}></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <p>${image.price}</p>
                        </div>
                    ):<h1>Wait a Second.......</h1>}
                </div>
            </div>
        </div>
    )
}

export default FeatureProduct
