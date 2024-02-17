import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

function ProductOne() {
  let allProduct = [];
  const productRef = useRef(0);
  const productId = useLocation();
  const [data, setdata] = useState(null);

  useEffect(() => {
    fetch(
      `https://strapi-store-server.onrender.com/api/products/${productId.state.id}`
    )
      .then((res) => res.json())
      .then((data) => setdata(data.data));
  }, []);

  const notify = () => {
    toast.success(" item added to card", {
      position: "top-center",
      autoClose: 5000,

      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    let product = {
      img: data.attributes.image,
      name: data.attributes.title,
      conpany: data.attributes.company,
      price: data.attributes.price,
      color: data.attributes.colors[0],
      produc: productRef.current.value,
    };
    allProduct.push(product);
    localStorage.setItem("prod", JSON.stringify(allProduct));
  };

  return (
    <div className="home-wrapper">
      <nav>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>/</li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
      </nav>
      <>
        {data ? (
          <div className="oneCard">
            <div className="card-image">
              <img src={data.attributes.image} alt="product-img" />
            </div>
            <div className="Onecard-title">
              <h2>{data.attributes.title}</h2>
              <h4>{data.attributes.company}</h4>
              <h3>{data.attributes.price} $</h3>
              <p>{data.attributes.description}</p>
              <input
                className="color-input"
                type="color"
                value={data.attributes.colors[0]}
              />
              <input
                className="color-input"
                type="color"
                value={data.attributes.colors[1]}
              />
              <div className="shop">
                <select ref={productRef} class="select select-bordered w-full ">
                  <option value="1" disabled selected>
                    +1
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
                <ToastContainer />
                <button
                  onClick={notify}
                  className="btn bg-violet-700  text-gray-100 btn-outline w-40 hover:bg-violet-800"
                >
                  ADD TO BAG
                </button>
              </div>
            </div>
          </div> //
        ) : (
          <>
            <div className="Loader">
              <span className="loading loading-ring loading-lg"></span>
            </div>
          </>
        )}
      </>
    </div>
  );
}

export default ProductOne;
