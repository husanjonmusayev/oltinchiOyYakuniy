import React from "react";
import { useEffect, useState } from "react";

function Cart() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("prod")));
  }, []);
  return (
    <>
      {products ? (
        <>
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
        </>
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
