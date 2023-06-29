import React from "react";

export default function AboutUS() {
  return (
    <>
      <div className=" max-w-[90%] mx-auto lg:ml-[62.5%] mt-[2.4vw]">
        <h1 className="text-4xl lg:text-6xl font-semibold mb-[1.5vw]">
          About Hyer®
        </h1>
        <p className="text-lg -tracking-wider lg:tracking-normal  lg:text-2xl font-normal">
          Technology, extensive industry knowledge and design-thinking approach.
          Few reasons why Hyer® is disrupting the private jet charter business.
          We deliver experiences that are smart, transparent, customisable and
          most of all, unforgettable.
        </p>
          <button className=" pt-10 lg:pt-28">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 22 23"
              fill="none"
              width="35"
              height="40"
            >
              <path
                d="M21.36 9.39L21.36 14.19L10.68 22.26L0 14.19L0 9.39L4.95 13.14C6.53 14.32 7.85 15.35 8.91 16.23L8.91 0.419999L12.48 0.42L12.48 16.2C13.96 15.02 15.27 14 16.41 13.14L21.36 9.39Z"
                fill="#000D10"
              />
            </svg>
          </button>
      </div>
      <div className="w-[90%] mx-auto pt-5">
        <img
          src="/img/shutter.jpg"
          alt="shutter"
          className="rounded-br-[60px]"
        />
      </div>
    </>
  );
}
