import "./Forms.css";
import { useRef } from "react";
import { useState } from "react";

function Forms() {
  const [inputValue, setInputValue] = useState(1000);
  const inputRef = useRef("");
  const catigoryRef = useRef("");
  const celectConpanyRef = useRef("");
  const cortRef = useRef("");

  // search function

  async function hendalSearch(e) {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://strapi-store-server.onrender.com/api/products?search=${
          inputRef.current.value
        }&category=${catigoryRef.current.value}&company=${
          celectConpanyRef.current.value
        }&order=${cortRef.current.value}&price=${500}000`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  function hendalRange(e) {
    
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
          <p>${inputValue}0.00</p>
          <input
            type="range"
            onChange={hendalRange}
            defaultValue={1000}
            aria-label="Default"
            valueLabe
            Display="on"
            step={1}
            value={inputValue}
            marks={false}
            min={0}
            max={100}
            className="range range-info"
          />
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
