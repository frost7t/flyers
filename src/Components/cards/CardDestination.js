import DataDestination from "@/data/DataDestination"; // Importation de ma data
import React, { useState } from "react"; 
import DestinationItem from "../DestinationItem"; // Importation du composant DestinationItem

export default function CardDestination() {
  const [hoveredDestination, setHoveredDestination] = useState(null); // Utilisation du hook useState pour gérer l'état de la destination survolée

  const handleMouseEnter = (destination) => {
    setHoveredDestination(destination); // Définit la destination survolée en utilisant la fonction setHoveredDestination du hook useState
  };

  const handleMouseLeave = () => {
    setHoveredDestination(null); // Réinitialise la destination survolée en utilisant la fonction setHoveredDestination avec la valeur null
  };

  return (
    <div className="">
      <div className="ml-[8%] pb-[9.3vw] flex">
        <img
          src={
            hoveredDestination
              ? hoveredDestination.image
              : "../slider/barcelona.jpg"
          } // Utilise l'image de la destination survolée si elle existe, sinon utilise l'image "../slider/barcelona.jpg"
          alt="slider"
          className="rounded-br-[60px]"
        />
        <div className="grid grid-cols-2 w-[45%] h-[50%] ml-[3%] gap-5">
          {DataDestination.map((destination) => (
            <DestinationItem
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
