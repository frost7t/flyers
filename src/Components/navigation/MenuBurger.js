import { DataBurger } from "@/data/DataBurger";
import Link from "next/link";
import React from "react";

export default function MenuBurger() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-10">
      {DataBurger.map((item, index) => (
        <div key={index}>
          {/* Titre de l'élément */}
          <h2 className="text-2xl font-semibold">{item.title}</h2>

          {/* Vérification de l'ID de l'élément */}
          {item.id === 1 ? (
            // Si l'ID est 1, on crée un lien vers la page "on-demand"
            <Link href="/on-demand" passHref>
              <h3 className="py-1 hover:underline">{item.subtitle}</h3>
            </Link>
          ) : item.id === 2 ? (
            // Si l'ID est 2, on crée un lien vers la page "shared"
            <Link href="/shared" passHref>
              <h3 className="py-1 hover:underline">{item.subtitle}</h3>
            </Link>
          ) : item.id === 3 ? (
            // Si l'ID est 3, on crée un lien vers la page "elevate-membership"
            <Link href="/elevate-membership" passHref>
              <h3 className="py-1 hover:underline">{item.subtitle2}</h3>
            </Link>
          ) : (
            // Pour les autres IDs, on vérifie chaque sous-titre et créons les liens correspondants
            <>
              {/* Vérification du sous-titre 3 */}
              {item.subtitle3 && (
                // Si le sous-titre 3 existe, on crée un lien vers la page "about"
                <Link href="/about" passHref>
                  <h3 className="py-1 hover:underline">{item.subtitle3}</h3>
                </Link>
              )}
              {/* Vérification du sous-titre 4 */}
              {item.subtitle4 && (
                // Si le sous-titre 4 existe, on crée un lien vers la page "solutions"
                <Link href="/solutions" passHref>
                  <h3 className="py-1 hover:underline">{item.subtitle4}</h3>
                </Link>
              )}
              {/* Vérification du sous-titre 5 */}
              {item.subtitle5 && (
                // Si le sous-titre 5 existe, on crée un lien vers la page "news"
                <Link href="/news" passHref>
                  <h3 className="py-1 hover:underline">{item.subtitle5}</h3>
                </Link>
              )}
              {/* Vérification du sous-titre 6 */}
              {item.subtitle6 && (
                // Si le sous-titre 6 existe, on crée un lien vers la page "contact"
                <Link href="/contact" passHref>
                  <h3 className="py-1 hover:underline">{item.subtitle6}</h3>
                </Link>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
}
// l'attribut passHref est utilisé pour s'assurer que l'attribut href est correctement
//  propagé à chaque élément <h3> qui est enveloppé dans un composant Link.
