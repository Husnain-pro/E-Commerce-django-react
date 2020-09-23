import React from 'react'

const LatestProduct = ({ latest }) => {
    return (
        < div >
            {/* -------- Latest products ------------ */}
            <div className="small-container">
                <h2 className="title">Latest Products</h2>
                <div className="row">
                    {latest.map((image, index) =>
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
                    )}
                </div>
            </div>
        </ div>
    )
}

export default LatestProduct
