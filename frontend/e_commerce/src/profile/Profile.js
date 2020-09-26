import React from 'react';
import category_1 from './RedStore_Img/images/category-1.jpg';
import category_2 from './RedStore_Img/images/category-2.jpg';
import category_3 from './RedStore_Img/images/category-3.jpg';
import image1 from './RedStore_Img/images/image1.png';
import FeatureProduct from './ProfileProducts/FeatureProduct'
import LatestProduct from './ProfileProducts/LatestProduct'
import OfferProduct from './ProfileProducts/OfferProduct'
import Testimonial from './ProfileProducts/Testimonial'

import './style.css';
const Profile = ({feature,latest, setSingleTitle, setSinglePrice, setSingleUrl}) => {
    return (
        <div>
            <div className="Profile__container">
                <div className="row">
                    <div className="col-2">
                        <h1>Give Your Workout <br /> A New Style!</h1>
                        <p>Succes isn't always about greateness. It's about
                        consistecy. Consistant <br /> hard work gains success. greateness
                        will come.
                    </p>
                        <a href="" className="btn">Explore Now &#8594;</a>
                        
                    </div>
                    <div className="col-2">
                        <img src={image1} alt="image" />
                    </div>
                </div>
            </div>

            {/* -------- feature categories ------------ */}

            <div className="categories">
                <div className="small-container">
                    <div className="row">
                        <div className="col-3">
                            <img src={category_1} alt="img" />
                        </div>
                        <div className="col-3">
                            <img src={category_2} alt="img" />
                        </div>
                        <div className="col-3">
                            <img src={category_3} alt="img" />
                        </div>
                    </div>
                </div>
            </div>

            {/* -------- feature products ------------ */}
           
            <FeatureProduct feature={feature}
            setSingleTitle={setSingleTitle}
            setSinglePrice={setSinglePrice} setSingleUrl={setSingleUrl}
            ></FeatureProduct>

            {/* -------- Latest products ------------ */}
           
            <LatestProduct latest={latest}
            setSingleTitle={setSingleTitle}
            setSinglePrice={setSinglePrice} setSingleUrl={setSingleUrl}
            ></LatestProduct>

            {/* ----------- Offer ------------- */}
            <OfferProduct
            setSingleTitle={setSingleTitle}
            setSinglePrice={setSinglePrice} setSingleUrl={setSingleUrl}
            ></OfferProduct>

            {/* --------------testimonial------------- */}
            <Testimonial></Testimonial>

            {/* Footer */}
        </div>
    )
}

export default Profile
