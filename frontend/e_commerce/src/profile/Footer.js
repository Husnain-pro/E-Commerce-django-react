import React from 'react'
import './style.css'
import play_store from './RedStore_Img/images/play-store.png';
import app_store from './RedStore_Img/images/app-store.png';
import logo_white from './RedStore_Img/images/logo-white.png';
const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col-1">
                        <h3>Download Our App</h3>
                        <p>Download App for Android and ios modile phone</p>
                        <div className="app-logo">
                            <img src={play_store} alt="img" />
                            <img src={app_store} alt="img" />
                        </div>
                    </div>
                    <div className="footer-col-2">
                        <img src={logo_white} alt="" />
                        <p>Our purpose is to miantain sustainability Mek the Pleasure and
                        Benefit of Sports Accessible to many.
                    </p>
                    </div>
                    <div className="footer-col-3">
                        <h3>Useful Links</h3>
                        <ul>
                            <li>Coupons</li>
                            <li>Blog Post</li>
                            <li>Return to Policy</li>
                            <li>Join Affiliate</li>
                        </ul>
                    </div>
                    <div className="footer-col-4">
                        <h3>Follow Us</h3>
                        <ul>
                            <li>FaceBook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>YouTube</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className="copyright">Copyright 2020 - Hunny Khan</p>
            </div>
        </div>
    )
}

export default Footer
