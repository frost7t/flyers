import React from "react";
import NavIcons from "./NavIcons";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className=" lg:grid grid-cols-2 max-w-[1740px] bg-transparent absolute lg:top-0 lg:left-20 w-full h-full pt-[2.6vw]">
      <Link href="/">
        <div className="hidden lg:block">
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
      </Link>
      <div className="flex justify-center lg:space-x-5">
        <ul className="hidden lg:block  space-x-5 text-2xl">
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
            <li className="group inline-block lg:mr-20">
              <span className="transition-colors duration-300 ease-in-out group-hover:border-b-2 group-hover:border-black">
                Contact
              </span>
            </li>
          </Link>
        </ul>
        <div className="hidden lg:block">
          <NavIcons />
        </div>
      </div>
      <div className="flex lg:pt-2  justify-between lg:flex-row lg:justify-between">
        <Link href="/">
          <div className=" ml-3 lg:hidden">
            <svg width="55" height="55" viewBox="0 0 55 55">
              <path
                d="M0 0V55H27.7551C42.7804 55 55 42.7804 55 27.7551V0H0ZM53.8406 27.7551C53.8406 42.1311 42.1311 53.8406 27.7551 53.8406H1.15936V1.15936H53.8406V27.7551Z"
                className="svg-fill"
              ></path>
              <path
                d="M10.4111 19.1988H17.2513C19.3382 19.1988 21.054 17.5061 21.054 15.3961V29.4475H25.7378V5.72705H21.0308V15.4193H10.4111V5.72705H5.72729V29.4475H10.4111V19.1988Z"
                className="svg-fill"
              ></path>
              <path
                d="M31.6968 12.15C33.1344 11.9645 34.2938 10.8052 34.4793 9.36757C34.7575 7.25754 32.9721 5.47213 30.8621 5.75037C29.4245 5.93587 28.2651 7.09523 28.0796 8.53284C27.8014 10.6429 29.5868 12.4283 31.6968 12.15ZM31.72 6.30687C32.833 6.49236 33.7373 7.39666 33.9228 8.48646C34.2242 10.3182 32.6475 11.895 30.8157 11.5935C29.7027 11.408 28.7984 10.5037 28.6361 9.39076C28.3115 7.58216 29.8882 6.00543 31.72 6.30687Z"
                className="svg-fill"
              ></path>
              <path
                d="M30.7231 9.25195H31.21H31.3492L31.952 10.4345H32.6245L31.952 9.11282C32.323 8.95051 32.5085 8.67227 32.5085 8.32446C32.5085 7.69841 32.1375 7.39697 31.1173 7.39697H30.1202V10.4345H30.7231V9.25195ZM30.7231 7.8839H31.1869C31.6042 7.8839 31.8825 7.99984 31.8825 8.34765C31.8825 8.64908 31.6738 8.81139 31.21 8.81139H30.7231V7.8839Z"
                className="svg-fill"
              ></path>
            </svg>
          </div>
        </Link>
        <div className="mr-3 lg:hidden">
          <NavIcons />
        </div>
      </div>
    </div>
  );
}
