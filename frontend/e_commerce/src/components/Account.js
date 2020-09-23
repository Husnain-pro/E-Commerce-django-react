import React,{useState} from 'react'
import './style.css'
import image1 from '../../src/profile/RedStore_Img/images/image1.png';
const Account = () => {

    const [login, setlogin] = useState(0)
    const [reg, setReg] = useState(0)
    const [indicator, setIndicator] = useState(100)
    function handleLogin() {
        setlogin(300);
        setReg(300);
        setIndicator(0);
      }
    function handleRegister() {
        setlogin(0);
        setReg(0);
        setIndicator(100);
      }
    return (
        <div class="account-page">
            <div class="container">
                <div class="row">
                    <div class="col-2">
                        <img src={image1} alt="" />
                    </div>
                    <div class="col-2">
                        <div class="form-container">
                            <div class="form-btn">
                                <span onClick={handleLogin}>Login</span>
                                <span onClick={handleRegister}>Register</span>
                                <hr className="Indicator" style={{transform:`translateX(${indicator}px)`}}/>
                            </div>
                            <form className="LoginForm" style={{transform:`translateX(${login}px)`}}>
                                <input type="text" placeholder="Username" />
                                <input type="password" placeholder="Password" />
                                <button type="submit" class="btn">Login</button>
                                <a href="#">Forgot Password</a>
                            </form>
                            <form className="RegForm" style={{transform:`translateX(${reg}px)`}}>
                                <input type="text" placeholder="Username" />
                                <input type="email" placeholder="email" />
                                <input type="password" placeholder="Password" />
                                <button type="submit" class="btn">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account
