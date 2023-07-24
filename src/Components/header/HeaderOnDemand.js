import React from "react";
import WhiteNav from "../navigation/WhiteNav";

export default function HeaderOnDemand() {
  // Gestionnaire d'événement pour le clic sur le SVG
  const handleClick = () => {
    // Récupère l'élément à faire défiler jusqu'à lui
    const element = document.getElementById("scrollOn");

    // Vérifie si l'élément existe
    if (element) {
      // Fait défiler jusqu'à l'élément avec un effet de défilement fluide
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="background__Demand ">
      <WhiteNav />
      <div className="text-[#fff] text-center font-semibold pt-5 max-w-[90%] mx-auto">
        <p className="lg:text-lg">Easily Book Your Aircraft. Fly Anytime...</p>
        <h2 className="text-4xl md:text-6xl pb-20 lg:text-9xl">On-Demand</h2>
        <div className="flex justify-center lg:pt-60">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 22 23"
            fill="#FFF"
            width="30"
            height="35"
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
    </div>
  );
}
