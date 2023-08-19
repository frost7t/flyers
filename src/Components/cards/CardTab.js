import Link from "next/link"; // Importe le composant Link de la bibliothèque "next/link"
import { useState } from "react"; // Importe le hook useState de la bibliothèque "react"
import InputButtons from "../buttons/InputButtons"; // Importe le composant InputButtons à partir d'un chemin relatif

const CardTab = () => {
  const [activeTab, setActiveTab] = useState(1); // Déclare une variable d'état "activeTab" avec la valeur initiale 1 et une fonction de mise à jour "setActiveTab"

  const handleTabClick = (tabIndex) => {
    // Définit une fonction "handleTabClick" qui prend l'indice de l'onglet en paramètre
    setActiveTab(tabIndex); // Met à jour la valeur de "activeTab" avec l'indice de l'onglet cliqué
  };

  return (
    <div>
      <div className="flex">
        <button
          className={`px-4 py-2 mr-2 rounded-md text-[#fff] ${
            activeTab === 1 ? "bg-[#ff9c09] text-[#000]" : ""
          }`}
          onClick={() => handleTabClick(1)}
        >
          On-demand
        </button>
        <button
          className={`px-4 py-2 rounded-md text-[#fff] ${
            activeTab === 2 ? "bg-[#ff9c09] text-[#000]" : ""
          }`}
          onClick={() => handleTabClick(2)}
        >
          Shared flights
        </button>
      </div>

      <div className="mt-1 p-4 rounded-md">
        {activeTab === 1 && ( // Si l'onglet actif est 1, affiche le contenu suivant
          <div className="font-medium text-md">
            <h1 className="text-4xl font-medium pb-10 text-[#fff]">
              Book On-Demand
            </h1>
            <p className="pt-3">
              Due to a high volume of requests, Hyer is currently unable to
              accept new flight requests from non-members. We apologize for any
              inconvenience this may cause.
              <p>
                If you are interested in becoming a member, please click the
                button below.
              </p>
            </p>
            <Link href="/elevate-membership">
              {/* // Affiche un lien qui pointe vers "/elevate-membership" lorsque qu'il est cliqué */}

              <button className="bg-[#000] text-[#fff] p-2 rounded-full mt-5">
                View Elevate Membership
              </button>
            </Link>
          </div>
        )}
        {activeTab === 2 && ( // Si l'onglet actif est 2, affiche le contenu suivant
          <div>
            <h1 className=" text-lg md:text-4xl font-medium pb-10 text-[#fff]">
              Book a shared flight
            </h1>
            <div className="text-left pt-3">
              <div className="mb-2 font-medium">One way</div>
              <div className="relative">
                <div className="border-t border-[#000] border-solid w-full"></div>
                <div className="absolute left-1 -top-1">
                  <div className="w-14 h-[3.5px] bg-[#892c2c] rounded-full"></div>
                </div>
              </div>
            </div>
            <div>
              <InputButtons />
              {/* // Affiche le composant InputButtons */}
            </div>
            <Link href="/404">
              {/* en cliquant sur Proceed une redirection aura lieu vers la page 404 (Temporarily) */}
              {/* Connexion à effectuer before const */}
              <button class="bg-[#000] text-[#fff] rounded-full mt-16 w-20 h-10">
                Proceed
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardTab; // Exporte le composant CardTab par défaut
