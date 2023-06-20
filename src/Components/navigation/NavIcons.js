import React from "react";

export default function NavIcons() {
  return (
    <>
      <div className=" lg:flex lg:gap-3">
        <div className="lg:my-0 flex justify-center items-center w-10 h-10 rounded-full bg-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="currentColor"
            viewBox="0 0 256 256"
            width="25"
            height="25"
          >
            <rect width="256" height="256" fill="none" />
            <path
              d="M128,224l-40,8V208l16-16V152L24,168V144l80-40,.11255-56a24,24,0,0,1,48,0l.11255,56,80,40v24l-80-16v40L168,208v24Z"
              fill="none"
              stroke="#FFFFFF"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="8px"
            />
          </svg>
        </div>
        <div className=" my-2 lg:my-0 flex justify-center items-center w-10 h-10 rounded-full bg-black">
          <svg
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 256 256"
            width="256"
            height="256"
          >
            <rect width="256" height="256" fill="none" />
            <line
              x1="40"
              y1="128"
              x2="216"
              y2="128"
              fill="none"
              stroke="#FFFFFF"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="8px"
            />
            <line
              x1="40"
              y1="64"
              x2="216"
              y2="64"
              fill="none"
              stroke="#FFFFFF"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="8px"
            />
            <line
              x1="40"
              y1="192"
              x2="216"
              y2="192"
              fill="none"
              stroke="#FFFFFF"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="8px"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
