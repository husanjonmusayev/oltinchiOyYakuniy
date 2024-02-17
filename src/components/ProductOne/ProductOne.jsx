import { NavLink, useLocation } from "react-router-dom";

import { useEffect, useState } from "react";
import "./index.css";

function ProductOne() {
  const productId = useLocation();
  const [data, setdata] = useState(null);

  useEffect(() => {
    fetch(
      `https://strapi-store-server.onrender.com/api/products/${productId.state.id}`
    )
      .then((res) => res.json())
      .then((data) => setdata(data.data));
  }, []);

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
              <input className="color-input" type="color" value={data.attributes.colors[0]} />
              <input className="color-input" type="color" value={data.attributes.colors[1]} />
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
    </div>
  );
}

export default ProductOne;
