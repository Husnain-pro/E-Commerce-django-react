import React from 'react'
import user_1 from '../../profile/RedStore_Img/images/user-1.png';
import user_2 from '../../profile/RedStore_Img/images/user-2.png';
import user_3 from '../../profile/RedStore_Img/images/user-3.png';
import '../style.css';

const Testimonial = () => {
    return (
        <div className="testmonial">
            <div className="small-container">
                <div className="row">
                    <div className="col-3">
                        <i className="fa fa-quote-left"></i>
                        <p>
                            The Mi Smart Band 4 is another solid product in the
                            Mi Band lineup. We loved its display, comfort, and
                            workout tracking accuracy
                            and is well worth its asking price of Rs. 2,299.
                    </p>
                        <div className="rating">
                            <i className="fa fa-star-o" style={{ color: "red" }}></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <img src={user_1} alt="user" />
                        <h3>seen parker</h3>
                    </div>
                    <div className="col-3">
                        <i className="fa fa-quote-left"></i>
                        <p>
                            The Mi Smart Band 4 is another solid product in the
                            Mi Band lineup. We loved its display, comfort, and
                            workout tracking accuracy
                            and is well worth its asking price of Rs. 2,299.
                    </p>
                        <div className="rating">
                            <i className="fa fa-star-o" style={{ color: "red" }}></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <img src={user_2} alt="user" />
                        <h3>Mike smith</h3>
                    </div>
                    <div className="col-3">
                        <i className="fa fa-quote-left"></i>
                        <p>
                            The Mi Smart Band 4 is another solid product in the
                            Mi Band lineup. We loved its display, comfort, and
                            workout tracking accuracy
                            and is well worth its asking price of Rs. 2,299.
                    </p>
                        <div className="rating">
                            <i className="fa fa-star-o" style={{ color: "red" }}></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <img src={user_3} alt="user" />
                        <h3>Model Joe</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
