import React from "react";
import WhiteNav from "../navigation/WhiteNav";

export default function HeaderPrivacy() {
  // Gestionnaire d'événement pour le clic sur le SVG
  const handleClick = () => {
    // Récupère l'élément à faire défiler jusqu'à lui
    const element = document.getElementById("scroll");

    // Vérifie si l'élément existe
    if (element) {
      // Fait défiler jusqu'à l'élément avec un effet de défilement fluide
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black lg:rounded-br-[90px]">
      <WhiteNav />
      <div className="lg:ml-[62.5%] lg:pt-[20%] pt-[30%]  ml-[5%]">
        <h2 className="text-white text-4xl pb-20 lg:text-6xl font-semibold">
          Politique de confidentialité
        </h2>

        {/* Élément SVG avec le gestionnaire d'événement onClick */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 22 23"
          fill="#FFF"
          width="35"
          height="40"
          cursor="pointer"
          className="pb-5"
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
