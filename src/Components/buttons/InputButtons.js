import React, { useState } from "react";

export default function InputButtons() {
  const [from, setFrom] = useState(""); // Définition d'un état 'from' avec sa valeur initiale comme une chaîne vide.
  const [to, setTo] = useState(""); // Définition d'un état 'to' avec sa valeur initiale comme une chaîne vide.
  const [passengers, setPassengers] = useState(0); // Définition d'un état 'passengers' avec sa valeur initiale comme 0.

  const paysValides = [
    // Création d'un tableau contenant des pays valides (je add des pays à la demande du client).
    "France",
    "Allemagne",
    "Angleterre",
    "Espagne",
    "Italie",
    "Royaume-Uni",
    "États-Unis",
  ];

  paysValides.sort((a, b) => a.localeCompare(b));
  // Trie le tableau paysValides en ordre alphabétique

  const isFromValid = paysValides.includes(from); // Vérification si la valeur de 'from' est dans le tableau des pays valides.
  const isToValid = paysValides.includes(to); // Vérification si la valeur de 'to' est dans le tableau des pays valides.

  const handleFromChange = (e) => {
    // Fonction pour gérer les changements dans le champ 'From'.
    const newFrom = e.target.value; // Récupération de la nouvelle valeur depuis l'événement.
    setFrom(newFrom); // Mise à jour de l'état 'from' avec la nouvelle valeur.
  };

  const handleToChange = (e) => {
    // Fonction pour gérer les changements dans le champ 'To'.
    const newTo = e.target.value; // Récupération de la nouvelle valeur depuis l'événement.
    setTo(newTo); // Mise à jour de l'état 'to' avec la nouvelle valeur.
  };

  const handlePassengersChange = (e) => {
    // Fonction pour gérer les changements dans le champ 'Passengers'.
    const newPassengers = parseInt(e.target.value); // Conversion de la nouvelle valeur en nombre entier (Integer).
    if (!isNaN(newPassengers) && newPassengers >= 0 && newPassengers <= 40) {
      // Vérification si le nombre est valide.
      setPassengers(newPassengers); // Mise à jour de l'état 'passengers' avec la nouvelle valeur valide.
    } else {
      // Afficher un message d'erreur ou effectue une autre action en cas de nombre de passagers invalide
    }
  };

  return (
    <div className="mt-4">
      {/* Champ 'From' */}
      <div className="flex flex-col">
        <label htmlFor="fromInput" className="mb-1 text-sm font-semibold">
          From*
        </label>
        <div className="border-b border-gray-500">
          <select
            id="fromInput"
            className="w-full bg-transparent focus:outline-none"
            value={from}
            onChange={handleFromChange}
          >
            <option value="">Sélectionnez un pays</option>
            {paysValides.map((pays) => (
              // je boucle avec map qui génère des options à partir du tableau 'paysValides'
              <option key={pays} value={pays}>
                {pays}
              </option>
            ))}
          </select>
          {isFromValid ? (
            /* Un bloc conditionnel qui vérifie si 'isToValid' est vrai (c'est-à-dire si le pays sélectionné est valide) */
            <span className="text-green-500 text-sm">Pays accepté</span>
          ) : (
            /* Si 'isToValid' est faux, cela signifie que le pays sélectionné n'est pas valide */
            <span className="text-red-500 text-sm">Pays non valide</span>
          )}
        </div>
      </div>

      {/* Champ 'To' */}
      <div className="flex flex-col mt-4">
        <label htmlFor="toInput" className="mb-1 text-sm font-semibold">
          To*
        </label>
        <div className="border-b border-gray-500">
          <select
            id="toInput"
            className="w-full bg-transparent focus:outline-none"
            value={to}
            onChange={handleToChange}
          >
            <option value="">Sélectionnez un pays</option>
            {paysValides.map((pays) => (
              // je boucle avec map qui génère des options à partir du tableau 'paysValides'
              <option key={pays} value={pays}>
                {pays}
              </option>
            ))}
          </select>
          {isToValid ? (
            /* Un bloc conditionnel qui vérifie si 'isToValid' est vrai (c'est-à-dire si le pays sélectionné est valide) */
            <span className="text-green-500 text-sm">Pays accepté</span>
          ) : (
            /* Si 'isToValid' est faux, cela signifie que le pays sélectionné n'est pas valide */
            <span className="text-red-500 text-sm">Pays non valide</span>
          )}
        </div>
      </div>

      {/* Champ 'Passengers' */}
      <div className="flex flex-col mt-4">
        <label htmlFor="passengersInput" className="mb-1 text-sm font-semibold">
          Passengers*
        </label>
        <div className="border-b border-gray-500">
          <select
            id="passengersInput"
            className="w-full bg-transparent focus:outline-none"
            value={passengers}
            onChange={handlePassengersChange}
          >
            {Array.from({ length: 41 }, (_, i) => (
              // Une boucle qui génère des options pour les nombres de 0 à 40
              <option key={i} value={i}>
                {i}
              </option>
            ))}
            {/* Chaque option a une valeur numérique et un texte affiché (de 0 à 40) */}
          </select>
        </div>
      </div>
    </div>
  );
}
