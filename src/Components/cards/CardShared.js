import Link from "next/link"; // Importation du composant Link de Next.js
import React, { useState } from "react"; // Importation de React et du hook useState

export default function CardShared() {
  // Définition du composant CardOnDemand
  const [isHovered, setIsHovered] = useState(false); // Déclaration d'un état local isHovered à false et d'une fonction setIsHovered pour le mettre à jour

  const handleMouseEnter = () => {
    // Fonction pour gérer l'événement onMouseEnter (lorsque la souris survole l'élément)
    setIsHovered(true); // Met à jour l'état isHovered à true
  };

  const handleMouseLeave = () => {
    // Fonction pour gérer l'événement onMouseLeave (lorsque la souris quitte l'élément)
    setIsHovered(false); // Met à jour l'état isHovered à false
  };
  return (
    <Link href="/shared">
      <div
        className="w-full lg:h-[100vh] h-[33vh] bg-left bg-cover z-20 relative flex overflow-hidden"
        style={{ backgroundImage: `url('/img/3.png')` }}
      >
        <h3
          className={`text-5xl font-semibold z-10 flex items-center gap-3 text-[#fff] absolute left-14 bottom-20 ${
            isHovered ? "hover:bottom-36" : ""
            //  Utilisation d'une expression ternaire pour ajouter la classe "hover:bottom-36" si isHovered est vrai
          }`}
          onMouseEnter={handleMouseEnter} // Attribution de la fonction handleMouseEnter à l'événement onMouseEnter
          onMouseLeave={handleMouseLeave} // Attribution de la fonction handleMouseLeave à l'événement onMouseLeave
        >
          Shared Flights
          {isHovered && ( // Affichage conditionnel du contenu JSX si isHovered est vrai
            <svg
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="Slider_arrow__2Sdkl Slider_arrowRight__3jNpQ hover:bottom-36"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 33 33"
              width="40"
              height="40"
            >
              <path
                d="M13.585 0.959999H20.785L32.89 16.98L20.785 33H13.585L19.21 25.575C20.98 23.205 22.525 21.225 23.845 19.635H0.13V14.28H23.8C22.03 12.06 20.5 10.095 19.21 8.385L13.585 0.959999Z"
                fill="#FFFFFF"
                key="arrow-path"
              ></path>
            </svg>
          )}
        </h3>
        {isHovered && (
          <p className="text-[#fff] text-3xl font-semibold absolute left-14 bottom-14  py-2">
            Fly private for a fraction of the price.
          </p>
        )}
      </div>
    </Link>
  );
}
