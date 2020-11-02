import { Button, notification, Space } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";
import image1 from "../../src/profile/RedStore_Img/images/image1.png";
import "./style.css";
const Account = ({ setToken, setUser }) => {
  //account process

  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [password2, setpassword2] = useState("");
  // const [token, settoken] = useState("");

  function setUsername(e) {
    setusername(e.target.value);
  }

  function setEmail(e) {
    setemail(e.target.value);
  }

  function setPassword1(e) {
    setpassword(e.target.value);
  }

  function setPassword2(e) {
    setpassword2(e.target.value);
  }

  const openNotificationWithIcon = (type, register) => {
    notification[type]({
      message: `Notification ${register}`,
      description:
        "We oplogize for now.We are working on authentication form which will be take some days to come in action",
    });
  };

  const [login, setlogin] = useState(0);
  const [reg, setReg] = useState(0);
  const [indicator, setIndicator] = useState(100);
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

  const getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  };

  function registerSubmit() {
    if (username && email && password && password2) {
      console.log(email);
      const csrftoken = getCookie("csrftoken");
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-CSRFToken": csrftoken,
        },
        body: JSON.stringify({
          username: `${username}`,
          email: `${email}`,
          password1: `${password}`,
          password2: `${password2}`,
        }),
      };
      fetch(
        "http://127.0.0.1:8000/dj-rest-auth/registration/",
        requestOptions
      ).then((response) => {
        if (!response.ok) {
          throw "Error";
        }
        return response.json();
        //   settoken(response);
      });
    }
  }

  function LoginSubmit() {
    if (username && email && password) {
      console.log(email);
      console.log(email);
      const csrftoken = getCookie("csrftoken");
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-CSRFToken": csrftoken,
        },
        body: JSON.stringify({
          username: `${username}`,
          email: `${email}`,
          password: `${password}`,
        }),
      };
      fetch("http://127.0.0.1:8000/dj-rest-auth/login/", requestOptions)
        .then((res) => res.json())
        .then((data) => {
          setToken(data);
          setUser(true);
        })
        .catch((err) => console.log(err));
    }
  }
  // console.log(token);

  return (
    <div className="account-page">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img src={image1} alt="" />
          </div>
          <div className="col-2">
            <div className="form-container">
              <div className="form-btn">
                <span onClick={handleLogin}>Login</span>
                <span onClick={handleRegister}>Register</span>
                <hr
                  className="Indicator"
                  style={{ transform: `translateX(${indicator}px)` }}
                />
              </div>

              {/* Login Form */}

              <form
                className="LoginForm"
                style={{ transform: `translateX(${login}px)` }}
              >
                <input
                  type="text"
                  placeholder="Username"
                  onChange={setUsername}
                />
                <input type="email" placeholder="email" onChange={setEmail} />

                <input
                  type="password"
                  placeholder="Password1"
                  onChange={setPassword1}
                />
                {/* <button type="submit" className="btn">Login</button> */}
                <Space>
                  <Button
                    style={{ marginTop: "10px" }}
                    onClick={() => openNotificationWithIcon("info", "Login")}
                    onClick={LoginSubmit}
                  >
                    Login
                  </Button>
                </Space>
                <br />
                <a href="#/">Forgot Password</a>
              </form>

              {/* Registration Form */}

              <form
                className="RegForm"
                style={{ transform: `translateX(${reg}px)` }}
              >
                <input
                  type="text"
                  placeholder="Username"
                  onChange={setUsername}
                />
                <input type="email" placeholder="email" onChange={setEmail} />
                <input
                  type="password"
                  placeholder="Password1"
                  onChange={setPassword1}
                />
                <input
                  type="password"
                  placeholder="Password2"
                  onChange={setPassword2}
                />
                {/* <button type="submit" className="btn">Register</button> */}

                <Space>
                  <Button
                    style={{ marginTop: "10px" }}
                    onClick={() => openNotificationWithIcon("info", "Register")}
                    onClick={registerSubmit}
                  >
                    Register
                  </Button>
                </Space>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
