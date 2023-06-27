import React from "react";

export default function DestinationItem({
  destination,
  handleMouseEnter,
  handleMouseLeave,
}) {
  const { name, code, country } = destination; // Destructuration des propriétés de l'objet "destination"

  const Border = name !== "Paris" && name !== "Cannes"; // Vérifie si le nom de la destination est différent de "Paris" et "Cannes"
  const borderClass = Border ? "lg:border-t-[1px] border-gray-300" : ""; // Si Border est vrai, défini la classe CSS "border-t-[1px] border-gray-300", sinon, une chaîne de caractères vide

  return (
    <div
      className={borderClass} // Applique la classe CSS définie dynamiquement à l'élément div
      onMouseEnter={() => handleMouseEnter(destination)} // Déclenche la fonction "handleMouseEnter" lorsqu'on survole l'élément div avec la destination en paramètre
      onMouseLeave={handleMouseLeave} // Déclenche la fonction "handleMouseLeave" lorsqu'on quitte l'élément div
    >
      <h3 className=" text-2xl lg:text-4xl font-semibold pb-20 md:pb-40">
        {name} <span className="font-normal">({code})</span>
         {/* // Affiche le nom
        de la destination et le code entre parenthèses ex: Paris = LBG*/}
      </h3>
      <div className="border-b-[1px] rounded-br-[60px] border-gray-300 pb-5">
        <p className="text-xl lg:text-2xl">{country}</p>
         {/* // Affiche le nom du pays */}
      </div>
    </div>
  );
}