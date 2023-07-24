import React, { useState } from "react";
import DataDestOn from "@/data/DataDestOn"; // Importation de ma data
import DestItem from "../DestItem"; // Importation du composant DestItem

export default function CardDestOn() {
  const [hoveredDestination, setHoveredDestination] = useState(null); // Utilisation du hook useState pour gérer l'état de la destination survolée

  const handleMouseEnter = (destination) => {
    setHoveredDestination(destination); // Définit la destination survolée en utilisant la fonction setHoveredDestination du hook useState
  };

  const handleMouseLeave = () => {
    setHoveredDestination(null); // Réinitialise la destination survolée en utilisant la fonction setHoveredDestination avec la valeur null
  };

  return (
    <div className="max-w-[90%] mx-auto border-b-[1px]  border-[#000]">
      <div className=" pb-[9.3vw] lg:flex">
        <img
          src={
            hoveredDestination
              ? hoveredDestination.image
              : "../sliderDest/london.jpg"
          } // Utilise l'image de la destination survolée si elle existe, sinon utilise l'image "../sliderDest/london.jpg"
          alt="slider"
          className="rounded-br-[60px] lg:w-[50%]"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:w-[45%] lg:h-[50%] ml-[3%] gap-5">
          {DataDestOn.map((destination) => (
            <DestItem
              key={destination.id} // Utilise l'ID de la destination comme clé
              destination={destination} // Passe la destination en tant que propriété au composant DestinationItem
              handleMouseEnter={handleMouseEnter} // Passe la fonction handleMouseEnter
              handleMouseLeave={handleMouseLeave} // Passe la fonction handleMouseLeave
            />
          ))}
        </div>
      </div>
    </div>
  );
}
