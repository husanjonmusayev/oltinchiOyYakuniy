import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./index.css";
import Forms from "../Forms/Forms";

function Products() {
  const [catgory, setCatigory] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [caunt, setCaunt] = useState(9);
  const [oneActive, setOneActive] = useState(false);
  const navigate = useNavigate();
  const [productsAll, setproductsAll] = useState([]);

  function hendalIconClick(e) {
    fetch(`https://strapi-store-server.onrender.com/api/products?page=${e}`)
      .then((res) => res.json())
      .then((data) => setproductsAll(data.data))
      .catch((err) => console.log(err));
  }

  // checkbox function

  function hendalChekbox(e) {
    setIsChecked(e.target.checked);
    isChecked ? setOneActive(false) : setOneActive(true);
  }

  // Get all product

  useEffect(() => {
    fetch("https://strapi-store-server.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => {
        setproductsAll(data.data);
      })
      .catch((err) => console.log(err));
  }, [oneActive]);

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
            <h2>{caunt} products</h2>
            <div>
              <input
                id="checkbox"
                onChange={hendalChekbox}
                checked={isChecked}
                type="checkbox"
              />
              <label class="toggl" for="checkbox">
                <div class="bar bar--top"></div>
                <div class="bar bar--middle"></div>
                <div class="bar bar--bottom"></div>
              </label>
            </div>
          </div>
          <section className="products-wrapper">
            <>
              {productsAll.map((el) => {
                return (
                  <>
                    {oneActive ? (
                      <>
                        <div key={el.id}  onClick={() => {
                            hendalclick(el.id);
                          }} className="card-log shadow-xl">
                          <img src={el.attributes.image} alt="Movie" />

                          <h2 className="card-title">{el.attributes.title}</h2>
                          <p>{el.attributes.price}$</p>
                        </div>
                      </>
                    ) : (
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
                            <h2 className="card-title">
                              {el.attributes.title}
                            </h2>
                            <p>{el.attributes.price}$</p>
                          </div>
                        </div>
                      </>
                    )}
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
