import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./index.css";
import Forms from "../Forms/Forms";

function Products() {
  const [caunt, setCaunt] = useState(0);
  const [oneActive, setOneActive] = useState(false);
  const navigate = useNavigate();
  const [productsAll, setproductsAll] = useState([]);

  // card ? Long

  function hendalIconClick(e) {
    fetch(`https://strapi-store-server.onrender.com/api/products?page=${e}`)
      .then((res) => res.json())
      .then((data) => setproductsAll(data.data))
      .catch((err) => console.log(err));
  }

  // Get all product

  useEffect(() => {
    fetch("https://strapi-store-server.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => setproductsAll(data.data))
      .catch((err) => console.log(err));
  }, []);

  // product info  navigate

  function hendalclick(id) {
    navigate("/productid", { state: { id } });
  }

  return (
    <>
      {productsAll.length ? (
        <div className="products-all">
          <Forms />
          <div className="products-title">
            <h2>{caunt}products</h2>
            <div className="icons">
              <label className="btn btn-circle swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" />

                {/* hamburger icon */}
                <svg
                  className="swap-off fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>

                {/* close icon */}
                <svg
                  className="swap-on fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              </label>
            </div>
          </div>
          <section className="products-wrapper">
            <>
              {productsAll.map((el) => {
               
                return (
                  <>
                    <div
                      onClick={() => {
                        hendalclick(el.id);
                      }}
                     
                     
                      key={el.id}
                      className="card w-96 bg-base-100 shadow-xl"
                    >
                      <figure className="px-5 pt-5">
                        <img
                          src={el.attributes.image}
                          alt="Shoes"
                          className="rounded-xl main-img"
                        />
                      </figure>
                      <div className="card-body items-center text-center">
                        <h2 className="card-title">{el.attributes.title}</h2>
                        <p>{el.attributes.price}$</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </>
          </section>
          <div class="radio-input">
            <label
              onClick={() => {
                hendalIconClick(1);
              }}
            >
              <input
                value="value-1"
                name="value-radio"
                id="value-1"
                type="radio"
                checked=""
              />
              <span>1</span>
            </label>
            <label
              onClick={() => {
                hendalIconClick(2);
              }}
            >
              <input
                value="value-2"
                name="value-radio"
                id="value-2"
                type="radio"
              />
              <span>2</span>
            </label>
            <label
              onClick={() => {
                hendalIconClick(3);
              }}
            >
              <input
                value="value-3"
                name="value-radio"
                id="value-3"
                type="radio"
              />
              <span>3</span>
            </label>

            <span class="selection"></span>
          </div>
        </div>
      ) : (
        <>
          <div className="Loader">
            <span className="loading loading-ring loading-lg"></span>
          </div>
        </>
      )}
    </>
  );
}

export default Products;
