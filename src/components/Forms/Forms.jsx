import "./Forms.css";
import { useRef } from "react";

function Forms() {
  const inputRef = useRef("");
  const catigoryRef = useRef("");
  const celectConpanyRef = useRef("");
  const cortRef = useRef("");

  // search function

  function hendalSearch(e) {
    e.preventDefault();
    fetch(
      "https://strapi-store-server.onrender.com/api/products?search=&category=Kids&company=Artifex&order=low&price=47000&shipping=on"
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
  // console.log(
  //   inputRef.current.value,
  //   catigoryRef.current.value,
  //   celectConpanyRef.current.value,
  //   cortRef.current.value
  // );

  return (
    <form>
      <div className="form-header ">
        <div className="search-input">
          <p>Search product</p>
          <input
            ref={inputRef}
            type="text"
            placeholder="Type here"
            class="input input-bordered input-sm w-full max-w-xs"
          />
        </div>
        <div className="select-catigory">
          <p>Select Catigory</p>
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
          <p>Select Company</p>
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
          <p>Sort by</p>
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
          <input type="range" min={0} max="100" className="range range-info" />
        </div>
        <div className="form-control flex flex-col items-center">
          <span className="label-text">free shoping</span>
          <label className="cursor-pointer label ">
            <input type="checkbox" className="checkbox checkbox-info" />
          </label>
        </div>
        <div className="btn-group">
          <button onClick={hendalSearch} className="search-btn">
            Search
          </button>
          <button className="reset-btn">Reset</button>
        </div>
      </div>
    </form>
  );
}

export default Forms;
