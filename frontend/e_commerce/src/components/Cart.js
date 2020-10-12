import React, { useEffect, useState } from "react";
const Cart = () => {
  const [cart, setCart] = useState([]);
  const [redirectedItem, setredirectedItem] = useState();

  const getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  };

  function deleteData(e) {
    const csrftoken = getCookie("csrftoken");
    const deleteMethod = {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "X-CSRFToken": csrftoken,
      },
    };

    fetch(`http://127.0.0.1:8000/cart/${e}`, deleteMethod).then((res) => {
      setredirectedItem(true);
    });
  }

  useEffect(() => {
    function fetchItem() {
      console.log("work");
      fetch("http://127.0.0.1:8000/cart/")
        .then((res) => res.json())
        .then((data) => setCart(data))
        .catch((err) => console.log(err));
    }
    fetchItem();
    setredirectedItem(false);
  }, [redirectedItem]);

  return (
    <div className="cart-container">
      <div className="small-container cart-page">
        <table>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
          {cart.length > 0 ? (
            cart.map((image, index) => (
              <tr>
                <td>
                  <div className="cart-info">
                    <img src={image.dir_url} key={index} alt="cart" />
                    <div>
                      <p key={index}>{image.title}</p>
                      <small key={index}>Price: ${image.price}</small>
                      <a
                        href="#/"
                        onClick={() => {
                          deleteData(image.id);
                        }}
                      >
                        Remove
                      </a>
                    </div>
                  </div>
                </td>
                <td>
                  <input type="number" value="1" />
                </td>
                <td key={index}>${image.price}</td>
              </tr>
            ))
          ) : (
            <h1>Loading ... </h1>
          )}
        </table>

        <div className="total-price">
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
  );
};

export default Cart;
