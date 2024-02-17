import React from "react";

function Carusel() {
  return (
    <>
      <div className="carousel carousel-center max-w-prose p-4 space-x-4 bg-neutral rounded-box">
        <div className="carousel-item max-w-md">
          <img src="/hero1.webp" className="rounded-box img" />
        </div>
        <div className="carousel-item ">
          <img src="/hero2.webp" className="rounded-box img" />
        </div>
        <div className="carousel-item max-w-md">
          <img src="/hero3.webp" className="rounded-box img" />
        </div>
        <div className="carousel-item max-w-md">
          <img src="/hero4.webp" className="rounded-box img" />
        </div>
      </div>
    </>
  );
}

export default Carusel;
