import React from "react";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Cart() {
  const navigate = useNavigate();
  const [products, setProducts] = useState(null);

  function hendalLoginClick() {
    navigate("/loginSignIn");
  }

  //  get product localstorage

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("prod")));
  }, []);

  return (
    <>
      {products ? (
        <div className="card-wrapper">
          <section>
            {products.map((el) => {
              return (
                <div className="card-item">
                  <div className="avatar">
                    <div className="w-24 rounded-xl">
                      <img src={el.img} />
                    </div>
                  </div>
                  <div className="card-title">
                    <h3>{el.name}</h3>
                    <p>{el.conpany}</p>
                    <input type="color" value={el.color} />
                  </div>
                  <div className="card-caunt">
                    <p>Ammont</p>
                    <p>{el.produc}</p>
                    <h4>Remove</h4>
                  </div>
                  <div className="prise-title">
                    <p>{el.price} $</p>
                  </div>
                </div>
              );
            })}
          </section>
          <div className="pages">
            <div className="Calculation sheet">
              <div className="thum">
                <p>Subtotal</p>
                <p>prise</p>
              </div>
              <div className="thum">
                <p>Shipping</p>
                <p>prise</p>
              </div>
              <div className="thum">
                <p>Tax</p>
                <p>prise</p>
              </div>
              <div className="all-sum">
                <p>Order Total</p>
                <p>prise</p>
              </div>
            </div>
            <button onClick={hendalLoginClick}>PLASE LOGIN</button>
          </div>
        </div>
      ) : (
        <>
          <div className="not-card">
            <h2>Your Cart Is Empty</h2>
          </div>
        </>
      )}{" "}
    </>
  );
}

export default Cart;
