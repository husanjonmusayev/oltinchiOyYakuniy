import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

function Products() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("en");
  const [value, setValue] = useState(1000);
  const inputRef = useRef("");
  const catigoryRef = useRef("");
  const celectConpanyRef = useRef("");
  const cortRef = useRef("");
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

  // search function

  async function hendalSearch(e) {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://strapi-store-server.onrender.com/api/products?search=${inputRef.current.value}&category=${catigoryRef.current.value}&company=${celectConpanyRef.current.value}&order=${cortRef.current.value}&price=${value}000`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setproductsAll(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  //  reset form

  function hendalResetBtn(e) {
    e.preventDefault();
    inputRef.current.value = "all";
    catigoryRef.current.value = "all";
    celectConpanyRef.current.value = "all";
    cortRef.current.value = "z-a";
    setValue(1000);
  }


  // get range value  
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      {productsAll.length ? (
        <div className="products-all">
          <form>
            <div className="form-header ">
              <div className="search-input">
                <p>{t("search product")}</p>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered input-sm w-full max-w-xs"
                />
              </div>
              <div className="select-catigory">
                <p>{t("select catighory")}</p>
                <select
                  ref={catigoryRef}
                  className="select select-bordered select-sm w-full max-w-xs"
                >
                  <option value="all">all</option>
                  <option value="tables">Tables</option>
                  <option value="chairs">Chairs</option>
                  <option value="kids">Kids</option>
                  <option value="sofas">Sofas</option>
                  <option value="beds">Beds</option>
                </select>
              </div>
              <div className="select-catigory">
                <p>{t("select company")}</p>
                <select
                  ref={celectConpanyRef}
                  className="select select-bordered select-sm w-full max-w-xs"
                >
                  <option disabled selected>
                    all
                  </option>
                  <option value="modenza">Modenza</option>
                  <option value="luxsora">Luxsora</option>
                  <option value="artifex">Artifex</option>
                  <option value="comfora">Comfora</option>
                  <option value="homested">Homested</option>
                </select>
              </div>
              <div className="select-catigory">
                <p>{t("sort by")}</p>
                <select
                  ref={cortRef}
                  className="select select-bordered select-sm w-full max-w-xs"
                >
                  <option disabled selected>
                    all
                  </option>
                  <option value="a-z">a-z</option>
                  <option value="z-a">z-a</option>
                  <option value="high">high</option>
                  <option value="low">low</option>
                </select>
              </div>
            </div>
            <div className="form-main items-center mt-10">
              <div className="ran">
                <div className="select-price">
                  <p>{t("select price")}</p>
                  <p>${value}0.00</p>
                </div>
                <input
                  className="range range-info"
                  type="range"
                  min="0"
                  max="100"
                  value={value}
                  onChange={handleChange}
                />
                <div className="sum-range">
                  <p>$ 0</p>
                  <p>Max : $ 1000.00 </p>
                </div>
              </div>
              <div className="form-control flex flex-col items-center">
                <span className="label-text">{t("free")}</span>
                <label className="cursor-pointer label ">
                  <input type="checkbox" className="checkbox checkbox-info" />
                </label>
              </div>
              <div className="btn-group">
                <button onClick={hendalSearch} className="search-btn">
                  {t("search")}
                </button>
                <button onClick={hendalResetBtn} className="reset-btn">
                  {t("reset")}
                </button>
              </div>
            </div>
          </form>
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
                        <div
                          key={el.id}
                          onClick={() => {
                            hendalclick(el.id);
                          }}
                          className="card-log shadow-xl"
                        >
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
