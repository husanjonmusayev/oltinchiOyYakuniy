import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Carusel from "../Carusel/Carusel";
import "./home.css";
import { data } from "autoprefixer";

function Home() {
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://strapi-store-server.onrender.com/api/products?featured=true")
      .then((res) => res.json())
      .then((data) => setdata(data.data))
      .catch((err) => console.log(err));
  }, []);

  function hendalclick(id) {
    navigate("/productid", { state: { id } });
  }
  return (
    <>
      {data.length ? (
        <div className="home-wrapper">
          <div className="hero-wrapper">
            <div className="home-title">
              <h2>We are changing the way people shop</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore repellat explicabo enim soluta temporibus asperiores aut
                obcaecati perferendis porro nobis.
              </p>
              <NavLink to="/product">Our Products</NavLink>
            </div>
            <div className="carusel">
              <Carusel />
            </div>
          </div>
          <div className="home-main-title">
            <h2 className="main-title">Featured Products</h2>
          </div>
          <section className="hero-wrapper">
            <>
              {data.map((el) => {
                return (
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
                      <p className="price">{el.attributes.price}$</p>
                    </div>
                  </div>
                );
              })}
            </>
          </section>
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

export default Home;
