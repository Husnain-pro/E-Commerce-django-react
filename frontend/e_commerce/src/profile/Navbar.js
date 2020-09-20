import React from 'react';
import cart from './RedStore_Img/images/cart.png';
import logo from './RedStore_Img/images/logo.png';
import menu from './RedStore_Img/images/menu.png';
import './style.css';
const Navbar = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        <img src={logo} alt="logo" style={{ width: "125px" }} onClick={menuToggle}/>
                        <img src={menu} alt="cart" className="menu-icon" ></img>
                    </div>
                    <nav>
                        <ul className="MenuItems">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Account</a></li>
                        </ul>
                    </nav>
                    <img src={cart} alt="cart" style={{ width: "30px", height: "30px" }} />
                </div>
            </div>
        </div >
    )
}

export default Navbar
