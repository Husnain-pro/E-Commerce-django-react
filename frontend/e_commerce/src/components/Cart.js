import React from 'react';
import buy_1 from '../../src/profile/RedStore_Img/images/buy-1.jpg';
import buy_2 from '../../src/profile/RedStore_Img/images/buy-2.jpg';
import './style.css';
const Cart = () => {
    return (
        <div className="cart-container">
            <div class="small-container cart-page">
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                    <tr>
                        <td>
                            <div class="cart-info">
                                <img src={buy_1} alt="cart" />
                                <div>
                                    <p>Red Printed T-Shirt</p>
                                    <small>Price: $50.00</small>
                                    <a href="">Remove</a>
                                </div>
                            </div>
                        </td>
                        <td><input type="number" value="1" /></td>
                        <td>$50.00</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="cart-info">
                                <img src={buy_2} alt="cart" />
                                <div>
                                    <p>Red Printed T-Shirt</p>
                                    <small>Price: $50.00</small>
                                    <a href="">Remove</a>
                                </div>
                            </div>
                        </td>
                        <td><input type="number" value="1" /></td>
                        <td>$50.00</td>
                    </tr>
                    <tr>
                        <td>
                            <div class="cart-info">
                                <img src={buy_1} alt="cart" />
                                <div>
                                    <p>Red Printed T-Shirt</p>
                                    <small>Price: $50.00</small>
                                    <a href="">Remove</a>
                                </div>
                            </div>
                        </td>
                        <td><input type="number" value="1" /></td>
                        <td>$50.00</td>
                    </tr>
                </table>

                <div class="total-price">
                    <table>
                        <tr>
                            <td>Subtotal</td>
                            <td>$200.00</td>
                        </tr>
                        <tr>
                            <td>Tax</td>
                            <td>$20.00</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>$230.00</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart
