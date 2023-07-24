import React, { useState } from "react"; // Importation de useState pour gérer l'état

import DataComs from "@/data/DataComs"; 

export default function AboutClient() {
  const [slideIndex, setSlideIndex] = useState(0); // Déclaration d'un état local slideIndex initialisé à 0 et de la fonction setSlideIndex pour le mettre à jour

  const handleClick = () => {
    const newIndex = (slideIndex + 1) % DataComs.length; // Calcul du nouvel index en incrémentant slideIndex et en utilisant l'opérateur modulo pour boucler dans la liste des commentaires
    setSlideIndex(newIndex); // Mise à jour de slideIndex avec la nouvelle valeur
  };

  return (
    <div className="max-w-[90%] mx-auto lg:pt-5 lg:pb-60 grid grid-cols-1 lg:grid-cols-2 border-b-2 border-[#000]">
      <div>
        <h3 className="text-3xl lg:text-7xl font-semibold py-5 max-w-md">
          What our clients say
        </h3>
      </div>
      <div
        className="lg:pt-10 cursor-pointer"
        onClick={handleClick} // Attribution de la fonction handleClick à l'événement onClick du conteneur div
      >
        {DataComs.map((coms) => (
          <div
            key={coms.id}
            style={{
              display: coms.id === slideIndex + 1 ? "block" : "none", // Affiche le commentaire dont l'ID correspond à slideIndex + 1, les autres commentaires sont masqués
            }}
          >
            <h3 className="max-w-xl lg:text-2xl">{coms.h3Text}</h3>
            <p className="pt-5 pb-20 lg:pb-3 font-semibold lg:text-2xl">{coms.pText}</p>
          </div>
        ))}
      </div>
    </div>
  );
}