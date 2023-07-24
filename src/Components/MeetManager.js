import React, { useState } from "react";
import ButtonExp from "./buttons/ButtonExp";

export default function MeetManager() {
  // Définir un tableau d'images à afficher dans le slider
  const images = [
    "/OnDemand/woman.jpg",
    "/OnDemand/time.png",
    "/OnDemand/tel.png",
  ];

  // Définir un tableau de textes associés aux images
  const texts = [
    {
      title: "Be rewarded for the way you fly",
      description:
        "with our memberships, you receive credits so you can fly more, plus enhanced flexibility, choice, and special pricing.",
    },
    {
      title: "Save time instead of wasting it",
      description:
        "stop depending on airline schedules and itineraries. When you fly Hyer, you save at least 2 hours compared to a commercial flight. Arrive at the airport 20 minutes before your flight.",
    },
    {
      title: "Meet your Flight Manager",
      description:
        "Our award-winning Flight Manager enables a seamless and transparent process. You have a dedicated expert taking care of all details, so you can focus on your destination and not on how to get there.",
    },
  ];

  // Utiliser le Hook useState pour gérer l'état du slider, avec l'index de l'image actuellement affichée
  const [currentIndex, setCurrentIndex] = useState(0);

  // Définir la fonction handleNext pour afficher la prochaine image du slider
  const handleNext = () => {
    // Utiliser la fonction setCurrentIndex pour mettre à jour l'index de l'image actuellement affichée
    // Utiliser l'opérateur % pour revenir au début du tableau lorsque l'on atteint la dernière image
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Définir la fonction handlePrev pour afficher l'image précédente du slider
  const handlePrev = () => {
    // Utiliser la fonction setCurrentIndex pour mettre à jour l'index de l'image actuellement affichée
    // Utiliser l'opérateur % pour revenir à la dernière image lorsque l'on atteint le début du tableau
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  return (
    <div className="max-w-[90%] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="text-center pt-10 lg:pt-[30%] lg:ml-40 lg:max-w-[60%]">
          {/* Afficher le titre de l'image actuellement sélectionnée */}
          <h1 className="lg:text-5xl text-3xl font-semibold">
            {texts[currentIndex].title}
          </h1>
          {/* Afficher la description de l'image actuellement sélectionnée */}
          <p className="text-xl font-medium py-10">
            {texts[currentIndex].description}
          </p>
          {/* Afficher le composant ButtonExp */}
          <ButtonExp />
        </div>
        <div className="py-5 lg:py-20 items-center relative">
          {/* Afficher l'image actuellement sélectionnée dans le slider */}
          <img
            src={images[currentIndex]}
            alt="slider"
            className="lg:w-[70%] lg:h-[700px] object-cover object-center"
          />
          <div
            className="absolute top-1/2 right-[0.40rem] lg:right-[16.2rem]  -translate-y-5 cursor-pointer"
            onClick={handleNext}
          >
            {/* Icône de flèche pour faire défiler vers la droite */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 lg:h-10 lg:w-10 text-[#000] shadow-md  rounded-md bg-opacity-90  bg-[#fff] shadow-[#000]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
          <div
            className="absolute top-1/2 left-[0.40rem] -translate-y-5 cursor-pointer"
            onClick={handlePrev}
          >
            {/* Icône de flèche pour faire défiler vers la gauche */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 lg:h-10 lg:w-10 text-[#000] shadow-md  rounded-md bg-opacity-90  bg-[#fff] shadow-[#000]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 5l-7 7 7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}