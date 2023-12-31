import React from 'react'
import WhiteNav from '../navigation/WhiteNav';

export default function HeaderNews() {
  const handleClick = () => {
    // Récupère l'élément à faire défiler jusqu'à lui
    const element = document.getElementById("ScrollNews");
    // Fait défiler jusqu'à l'élément avec un effet de défilement fluide
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="background__new">
      <WhiteNav />
      <div className="lg:ml-[62.5%] lg:pt-[20%] pt-[70%] ml-[5%]">
        <h2 className="text-[#fff] text-4xl lg:text-6xl font-semibold">
          What's New?
        </h2>
        <p className="text-[#fff] pt-3 pb-20 md:pb-10 lg:pb-20 lg:pt-8 lg:text-2xl lg:max-w-lg">
          Stay up-to-date with everyting about Hyer® and Aviation related.
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 22 23"
          fill="#FFF"
          width="35"
          height="40"
          cursor="pointer"
          onClick={handleClick}
        >
          <path
            d="M21.36 9.39L21.36 14.19L10.68 22.26L0 14.19L0 9.39L4.95 13.14C6.53 14.32 7.85 15.35 8.91 16.23L8.91 0.419999L12.48 0.42L12.48 16.2C13.96 15.02 15.27 14 16.41 13.14L21.36 9.39Z"
            fill="#FFF"
          />
        </svg>
      </div>
    </div>
  );
}
