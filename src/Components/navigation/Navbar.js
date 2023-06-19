import React from "react";
import NavIcons from "./NavIcons";
import Link from "next/link";
import Button from "./Button";

export default function Navbar() {
  return (
    <div className="pt-10 flex bg-[url('/img/avi.png')] bg-cover bg-no-repeat bg-center h-[100vh] w-full">
      {/* background image jet */}
      <div className="grid grid-cols-2 mx-auto max-w-[1740px]">
        <div>
          <svg
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 959 376"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="950"
            height="376"
          >
            <path
              d="M254.658 0H195.027V302.128H254.658V0Z"
              fill="#000D10"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0H59.6306V302.128H0V0ZM59.6313 123.237H195.028C195.028 150.129 173.28 171.643 146.622 171.643H59.6313V123.237Z"
              fill="#000D10"
            ></path>
            <path
              d="M291.372 375.088V330.892H313.119C332.295 330.892 340.713 331.359 350.535 307.507L353.107 301.193L267.286 77.8706H330.19L380.935 239.458L433.082 77.8706H491.31L409.23 295.347C382.572 365.033 371.347 374.854 315.458 374.854H291.372V375.088Z"
              fill="#000D10"
            ></path>
            <path
              d="M540.885 205.784C544.158 244.134 570.115 262.842 597.475 262.842C615.481 262.842 632.786 256.528 644.478 237.119H703.875C691.715 270.559 659.21 307.507 597.943 307.507C525.918 307.507 483.826 253.722 483.826 189.181C483.826 122.535 530.128 72.9595 596.306 72.9595C665.524 72.9595 708.318 126.744 706.213 205.784H540.885ZM541.82 166.264H647.986C646.817 128.381 620.158 115.052 595.838 115.052C574.324 115.052 546.263 128.381 541.82 166.264Z"
              fill="#000D10"
            ></path>
            <path
              d="M857.278 133.292C848.86 132.123 841.844 132.123 833.426 132.123C805.131 132.123 786.423 142.646 786.423 184.738V302.362H728.897V77.8706H785.488V117.157C798.349 89.329 818.46 78.3383 844.651 78.3383C848.392 78.3383 853.303 78.806 857.044 79.2737V133.292H857.278Z"
              fill="#000D10"
            ></path>
            <path
              d="M917.843 82.3136C895.16 82.3136 876.687 63.8398 876.687 41.1568C876.687 18.4738 895.16 0 917.843 0C940.526 0 959 18.4738 959 41.1568C959 63.8398 940.526 82.3136 917.843 82.3136ZM917.843 7.01537C898.902 7.01537 883.702 22.4492 883.702 41.1568C883.702 60.0983 899.136 75.2983 917.843 75.2983C936.785 75.2983 951.985 59.8645 951.985 41.1568C951.985 22.2153 936.551 7.01537 917.843 7.01537Z"
              fill="#000D10"
            ></path>
            <path
              d="M919.014 44.8982H917.143H910.829V60.0982H903.112V21.5137H915.74C928.368 21.5137 933.278 25.0214 933.278 33.2059C933.278 37.649 931.174 41.3905 926.263 43.2613L934.915 59.8643H926.497L919.014 44.8982ZM910.829 27.3598V39.0521H917.143C923.223 39.0521 925.561 37.1813 925.561 33.2059C925.561 28.7629 921.82 27.3598 916.675 27.3598H910.829Z"
              fill="#000D10"
            ></path>
          </svg>
        </div>
        {/* logo flyers */}
        <div className="flex justify-center space-x-5">
          <ul className="flex space-x-5 text-2xl">
            <Link href="/solutions">
              <li className="group inline-block">
                <span className="transition-colors duration-300 ease-in-out group-hover:border-b-2 group-hover:border-black">
                  Solutions
                </span>
              </li>
            </Link>
            <Link href="/about">
              <li className="group inline-block">
                <span className="transition-colors duration-300 ease-in-out group-hover:border-b-2 group-hover:border-black">
                  About us
                </span>
              </li>
            </Link>
            <Link href="/contact">
              <li className="group inline-block">
                <span className="transition-colors duration-300 ease-in-out group-hover:border-b-2 group-hover:border-black">
                  Contact
                </span>
              </li>
            </Link>
          </ul>
          <NavIcons />
        </div>
        <div className="grid grid-cols-2 justify-center items-center">
          <div>
            <p className="text-3xl font-semibold">
              More flexibility, freedom and choice!
            </p>
          </div>
          <div>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}
