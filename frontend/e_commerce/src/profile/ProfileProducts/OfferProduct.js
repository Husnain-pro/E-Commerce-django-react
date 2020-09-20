import React from 'react'
import '../style.css'
import exclusive from '../../profile/RedStore_Img/images/exclusive.png';
const OfferProduct = () => {
    return (
        <div>
            <div className="offer">
                <div className="small-container">
                    <div className="row">
                        <div className="col-2">
                            <img src={exclusive} alt="img" className="offer-img" />
                        </div>
                        <div className="col-2">
                            <p>Exclusively Availbale on HunnyStore</p>
                            <h1>Smart Band 4</h1>
                            <small>The Mi Smart Band 4 is another solid product in the
                            Mi Band lineup. We loved its display, comfort, and
                            workout tracking accuracy
                        and is well worth its asking price of Rs. 2,299.<br />
                            </small>
                            <a href="#" className="btn">Buy Now &#8594;</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OfferProduct
