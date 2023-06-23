import React, { useState } from "react";
import BookFlight from "./BookFlight";

// Tableau contenant les chemins des images utilisées dans le slider
const images = [
  "/sliderXP/cabin.jpg",
  "/sliderXP/cabin2.jpg",
  "/sliderXP/women.jpg",
  "/sliderXP/customer.jpg",
  "/sliderXP/luxury.jpg",
  "/sliderXP/flyhyer.png",
];

export default function SliderXp() {
  // Utilisation du hook useState pour gérer l'état du slider
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fonction pour passer à la diapositive suivante
  const goToNextSlide = () => {
    // Utilisation de la fonction de mise à jour du state en utilisant une fonction de rappel
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  // Fonction pour passer à la diapositive précédente
  const goToPreviousSlide = () => {
    // Utilisation de la fonction de mise à jour du state en utilisant une fonction de rappel
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  };

  return (
    <>
      <div className="w-[90%] p-[3.7vw] ml-[0.7vw] ">
        <div style={{ position: "relative", display: "inline-block" }}>
          {/* Affichage de l'image courante en utilisant le chemin correspondant dans le tableau des images */}
          <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />

          {/* Affichage du numéro de la diapositive actuelle */}
          <div
            className="text-lg md:text-3xl lg:text-6xl font-semibold"
            style={{
              position: "absolute",
              bottom: "10px",
              right: "10px",
              color: "#fff",
            }}
          >
            {`${currentSlide + 1}/${images.length}`}
          </div>

          {/* Bouton pour passer à la diapositive précédente */}
          <button
            className="text-xl md:text-3xl lg:text-6xl font-semibold"
            onClick={goToPreviousSlide}
            style={{
              position: "absolute",
              bottom: "50%",
              left: "10px",
              color: "#fff",
            }}
          >
            &lt; {/* Utilisation de "&lt;" pour afficher le symbole "<" */}
          </button>

          {/* Bouton pour passer à la diapositive suivante */}
          <button
            className="text-xl md:text-3xl lg:text-6xl font-semibold"
            onClick={goToNextSlide}
            style={{
              position: "absolute",
              bottom: "50%",
              right: "10px",
              color: "#fff",
            }}
          >
            &gt; {/* Utilisation de "&gt;" pour afficher le symbole ">" */}
          </button>
        </div>
      </div>
      <div>
        <BookFlight />
      </div>
    </>
  );
}
