import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cart from './RedStore_Img/images/cart.png';
import logo from './RedStore_Img/images/logo.png';
import menu from './RedStore_Img/images/menu.png';
import './style.css';
const Navbar = () => {
    const [toggleMenu, settoggleMenu] = useState(0)
    function menuToggle() {
        toggleMenu === 0 ? settoggleMenu(200) : settoggleMenu(0)
    }

    
    return (
        <div className="header">
            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        <Link to="/" ><img src={logo} alt="logo" style={{ width: "125px" }} /></Link>
                    </div>
                    <nav>
                        <ul style={{ maxHeight: `${toggleMenu}px`, zIndex: 100 }}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/products" >Products</Link></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><Link to="/account" >Account</Link></li>
                        </ul>
                    </nav>
                    <Link to="/cart" ><img src={cart} alt="cart" className="responsive" style={{ width: "30px", height: "30px" }} /></Link>
                    <img src={menu} alt="cart" class="menu-icon" onClick={menuToggle} />
                </div>
            </div>
        </div >
    )
}

export default Navbar
