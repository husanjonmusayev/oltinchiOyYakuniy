import "./Route.css";
import { NavLink, Link, Outlet } from "react-router-dom";
import React, { useState, useEffect, useMemo } from "react";
import useLocalStorage from "use-local-storage";
import { useTranslation } from "react-i18next";
import Select from "react-select";

const options = [
  { value: "uz", label: "Uz" },
  { value: "ru", label: "Ru" },
  { value: "en", label: "En" },
];

function LayoutRoutes() {
  const [caunt, setCaunt] = useState(0);
  const [data, setData] = useState([]);
  const [dark, setDark] = useLocalStorage("dark", false);
  const [isChecked, setIsChecked] = useState(false);
  const [lang, setLang] = useState("en");
  const { t, i18n } = useTranslation();
  const [selectedOption, setSelectedOption] = useState(null);

  // localstorage get  languga

  useEffect(() => {
    let dat = JSON.parse(localStorage.getItem("prod"));
    let lang = localStorage.getItem("lang");
    if (lang) {
      i18n.changeLanguage(lang);
      setLang(lang);
    }
    setIsChecked(dark ? true : false);
    if (dat) {
      setCaunt(dat.length);
    }
  }, [data]);

  // dark mode
  function hendalChekbox(e) {
    setIsChecked(e.target.checked);
    isChecked ? setDark(false) : setDark(true);
  }

  // language
  function hendalclick(e) {
    i18n.changeLanguage(e.value);
    localStorage.setItem("lang", e.value);
  }

  //

  return (
    <div className="container" data-theme={dark ? "light" : "dark"}>
      <header>
        <div className="reg">
          <div className="form-link">
            <div className="col flex gap-1">
              <Link to="/">{t("sigin in")}</Link>
              <a>/</a>
              <Link to="/">{t("guest")}</Link>
            </div>
            <Link to="/">{t("create acaunt")}</Link>
          </div>
        </div>
        <div className="content">
          <div className="responsive-nav">
            <label className="btn btn-circle swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" />

              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

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
          <div className="logo">
            <h1>C</h1>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">{t("home")}</NavLink>
              </li>
              <li>
                <NavLink to="/about">{t("about")}</NavLink>
              </li>
              <li>
                <NavLink to="/product">{t("products")}</NavLink>
              </li>
              <li>
                <NavLink to="/cart">{t("cart")}</NavLink>
              </li>
            </ul>
          </nav>
          <div className="end">
            <div className="mode">
              <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input
                  type="checkbox"
                  className="theme-controller"
                  value="synthwave"
                  onChange={hendalChekbox}
                  checked={isChecked}
                />

                {/* sun icon */}
                <svg
                  className="swap-on fill-current w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* moon icon */}
                <svg
                  className="swap-off fill-current w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
            <Link to="/cart">
              <div className="indicator">
                <span className="indicator-item badge badge-primary">
                  +{caunt}
                </span>
                <div className="grid w-12 h-12  place-items-center">
                  <img className="w-10 h-9" src="/shop.png" alt="" />
                </div>
              </div>
            </Link>
            <div className="App">
              <Select
                className="header-select"
                onChange={hendalclick}
                options={options}
              />
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="main-content">
          <Outlet></Outlet>
        </div>
      </main>
    </div>
  );
}

export default LayoutRoutes;
