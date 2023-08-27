import React, { useEffect, useState } from "react";
import { SvgIcon } from "../icons/svgIcon";

export default function ScrollToTopButton() {
  // État pour déterminer si le bouton doit être affiché ou non
  const [isVisible, setIsVisible] = useState(false);
  // Fonction pour vérifier si le bouton doit être visible
  const toggleVisibility = () => {
    // Si la position de défilement verticale est supérieure à 600 pixels, afficher le bouton
    if (window.scrollY > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  // Fonction pour effectuer un défilement fluide vers le haut de la page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // Utilise useEffect pour ajouter et supprimer un gestionnaire d'événement de défilement lorsque le composant est monté
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    // Retire le gestionnaire d'événement lorsque le composant est démonté
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    // Le bouton est positionné en bas à droite de la page avec un certain style
    <div className="fixed right-0 bottom-0 top-3/4 mr-4 z-50">
      {/* Le bouton est affiché seulement si isVisible est vrai */}
      {isVisible && (
        <div onClick={scrollToTop}>
          {/* Le bouton avec des classes de style conditionnelles */}
          <button
            className={`bg-black opacity-30 hover:opacity-100 hover:border-white hover:border w-10 h-10 text-white rounded ${
              isVisible ? "fade-in-right" : ""
            }`}
          >
            {/* Utilise un composant SvgIcon pour afficher une icône */}
            <SvgIcon />
          </button>
        </div>
      )}
    </div>
  );
}