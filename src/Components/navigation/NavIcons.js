import React, { useState } from "react";
import MenuButtons from "../buttons/MenuButtons";
import MenuBurger from "./MenuBurger";
import MenuPlane from "./MenuPlane";

export default function NavIcons() {
  // Utilisation de useState pour gérer l'état des menus
  const [menuOpen1, setMenuOpen1] = useState(false);
  const [menuOpen2, setMenuOpen2] = useState(false);
  // Fonction pour basculer l'état du premier menu
  const toggleMenu1 = () => {
    setMenuOpen1(!menuOpen1);
  };
  // Fonction pour basculer l'état du deuxième menu
  const toggleMenu2 = () => {
    setMenuOpen2(!menuOpen2);
  };

  return (
    <>
      <div className="lg:flex lg:gap-3 items-center">
        {/* Première icône avec un cercle noir */}
        <div
          className="lg:my-0 flex justify-center items-center w-12 h-12 rounded-full bg-black cursor-pointer z-10"
          onClick={toggleMenu1}
        >
          {/* Contenu SVG de l'icône */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="currentColor"
            viewBox="0 0 256 256"
            width="25"
            height="25"
          >
            {/* Contenu du chemin de l'icône */}
            <rect width="256" height="256" fill="none" />
            <path
              d="M128,224l-40,8V208l16-16V152L24,168V144l80-40,.11255-56a24,24,0,0,1,48,0l.11255,56,80,40v24l-80-16v40L168,208v24Z"
              fill="none"
              stroke="#FFFFFF"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="8px"
            />
          </svg>
        </div>
        {/* Deuxième icône avec un cercle noir */}
        <div
          className="my-2 lg:my-0 flex justify-center items-center w-12 h-12 rounded-full bg-black cursor-pointer"
          onClick={toggleMenu2}
        >
          {/* Contenu SVG de l'icône */}
          <svg
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 256 256"
            width="25"
            height="256"
          >
            {/* Contenu des lignes de l'icône */}
            <rect width="256" height="256" fill="none" />
            <line
              x1="40"
              y1="128"
              x2="216"
              y2="128"
              fill="none"
              stroke="#FFFFFF"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="8px"
            />
            <line
              x1="40"
              y1="64"
              x2="216"
              y2="64"
              fill="none"
              stroke="#FFFFFF"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="8px"
            />
            <line
              x1="40"
              y1="192"
              x2="216"
              y2="192"
              fill="none"
              stroke="#FFFFFF"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="8px"
            />
          </svg>
        </div>
      </div>
      {/* Affichage du premier menu en fonction de l'état de menuOpen1 */}
      {menuOpen1 && (
        <div className="fixed right-0 top-0 h-screen w-full lg:w-[37%] z-10 bg-white">
          <div className="flex bg-black h-40 p-4">
            <div className="flex">
              <MenuPlane />
              <span
                onClick={toggleMenu1}
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-full xl:w-16 xl:h-14 ml-2 pb-1 bg-white flex justify-center items-center text-3xl text-gray-400 cursor-pointer z-10"
              >
                x
              </span>
            </div>
          </div>
        </div>
      )}
      {/* Affichage du deuxième menu en fonction de l'état de menuOpen2 */}
      {menuOpen2 && (
        <div className="fixed right-0 top-0 h-screen w-full lg:w-[37%] z-10 bg-white">
          <div className="lg:my-0 flex justify-center items-center p-[1.5vw]">
            <MenuButtons />
            <span
              onClick={toggleMenu2}
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full ml-2 pb-1 bg-black flex justify-center items-center text-3xl text-gray-400 cursor-pointer z-10"
            >
              x
            </span>
          </div>
          <div>
            <MenuBurger />
          </div>
        </div>
      )}
    </>
  );
}
