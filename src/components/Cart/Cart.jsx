import React from "react";
import "./cart.css";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";

function Cart() {
  const product = useSelector((state) => state.counter.value);
  console.log(product);

  let sum = 0;
  const [sumAll, setSumAll] = useState(null);
  const [products, setProducts] = useState([]);

  let allProduct = JSON.parse(localStorage.getItem("prod"))
    ? JSON.parse(localStorage.getItem("prod"))
    : [];

  //  get product localstorage

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("prod"));
    if (data) {
      setSumAll(
        data.map((el) => {
          return (sum += el.price);
        })
      );
    }
    setProducts(data);
  }, []);

  let Shopping = sumAll % 8;
  let Tax = sumAll % 20;
  // remove function

  const notify = (el) => {
    toast.success(" Remove to card", {
      position: "top-center",
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    let copy = products.filter((e) => {
      return e.name != el;
    });
    setProducts(copy);
    localStorage.setItem("prod", JSON.stringify(copy));
  };

  return (
    <>
      {products ? (
        <div className="get-local">
          <ToastContainer />
          <div className="pages">
            <div className="Calculation sheet">
              <div className="thum">
                <p>Subtotal</p>
                <p>{sumAll} $</p>
              </div>
              <div className="thum">
                <p>Shopping</p>
                <p>{Shopping} $</p>
              </div>
              <div className="thum">
                <p>Tax</p>
                <p>{Tax}$</p>
              </div>
              <div className="all-sum">
                <p>Order Total</p>
                <p>{sumAll + Shopping + Tax} $</p>
              </div>
            </div>
            <button>PLASE LOGIN</button>
          </div>
          <section>
            {products.map((el) => {
              return (
                <div id="CardItem" className="card-item">
                  <div className="avatar">
                    <div id="awatar" className="w-24 rounded-xl">
                      <img src={el.img} />
                    </div>
                  </div>
                  <div id="cardTitle" className="card-title">
                    <h3>{el.name}</h3>
                    <h3>{el.conpany}</h3>
                    <input type="color" value={el.color} />
                  </div>
                  <div id="cardCaunt" className="card-caunt">
                    <p>Ammont</p>
                    <p>{el.produc}</p>
                    <h4
                      onClick={() => {
                        notify(el.name);
                      }}
                    >
                      Remove
                    </h4>
                  </div>
                  <div className="prise-title">
                    <p>{el.price} $</p>
                  </div>
                </div>
              );
            })}
          </section>
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
