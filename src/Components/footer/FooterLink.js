import { DataFooter } from '@/data/DataFooter';
import Link from 'next/link';
import React from 'react'

export default function FooterLink() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-10 px-10">
      {DataFooter.map((item, index) => (
        <div key={index}>
          {/* Titre de l'élément */}
          <h2 className="text-2xl font-semibold text-[#fff]">{item.title}</h2>

          {/* Vérification de l'ID de l'élément */}
          {item.id === 1 ? (
            // Si l'ID est 1, on crée un lien vers la page "on-demand"
            <Link href="/on-demand" passHref>
              <h3 className="py-2 text-2xl hover:text-[#dededed5] text-[#dedede97]">
                {item.subtitle}
              </h3>
            </Link>
          ) : item.id === 2 ? (
            // Si l'ID est 2, on crée un lien vers la page "shared"
            <Link href="/shared" passHref>
              <h3 className="py-2 text-2xl hover:text-[#dededed5] text-[#dedede97]">
                {item.subtitle}
              </h3>
            </Link>
          ) : item.id === 3 ? (
            // Si l'ID est 3, on crée un lien vers la page "elevate-membership"
            <Link href="/elevate-membership" passHref>
              <h3 className="pt-3 text-2xl hover:text-[#dededed5] text-[#dedede97]">
                {item.subtitle1}
              </h3>
            </Link>
          ) : (
            // Pour les autres IDs, on vérifie chaque sous-titre et créons les liens correspondants
            <>
              {/* Vérification du sous-titre 3 */}
              {item.subtitle3 && (
                // Si le sous-titre 3 existe, on crée un lien vers la page "about"
                <Link href="/about" passHref>
                  <h3 className="py-2 text-2xl hover:text-[#dededed5] text-[#dedede97]">
                    {item.subtitle3}
                  </h3>
                </Link>
              )}
              {/* Vérification du sous-titre 4 */}
              {item.subtitle4 && (
                // Si le sous-titre 4 existe, on crée un lien vers la page "solutions"
                <Link href="/solutions" passHref>
                  <h3 className="py-2 text-2xl hover:text-[#dededed5] text-[#dedede97]">
                    {item.subtitle4}
                  </h3>
                </Link>
              )}
              {/* Vérification du sous-titre 5 */}
              {item.subtitle5 && (
                // Si le sous-titre 5 existe, on crée un lien vers la page "news"
                <Link href="/news" passHref>
                  <h3 className="py-2 text-2xl hover:text-[#dededed5] text-[#dedede97]">
                    {item.subtitle5}
                  </h3>
                </Link>
              )}
              {/* Vérification du sous-titre 6 */}
              {item.subtitle6 && (
                // Si le sous-titre 6 existe, on crée un lien vers la page "contact"
                <Link href="/contact" passHref>
                  <h3 className="py-2 text-2xl hover:text-[#dededed5] text-[#dedede97]">
                    {item.subtitle6}
                  </h3>
                </Link>
              )}
              {item.link1 && (
                // Si le sous-titre 6 existe, on crée un lien vers la page "contact"
                <Link href="/register" passHref>
                  <h3 className="py-2 text-2xl hover:text-[#dededed5] text-[#dedede97]">
                    {item.link1}
                  </h3>
                </Link>
              )}
              {item.link2 && (
                // Si le sous-titre 6 existe, on crée un lien vers la page "contact"
                <Link href="/login" passHref>
                  <h3 className="py-2 text-2xl hover:text-[#dededed5] text-[#dedede97]">
                    {item.link2}
                  </h3>
                </Link>
              )}
              {item.link3 && (
                // Si le sous-titre 6 existe, on crée un lien vers la page "contact"
                <Link href="/login" passHref>
                  <h3 className="py-2 text-2xl hover:text-[#dededed5] text-[#dedede97]">
                    {item.link3}
                  </h3>
                </Link>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
}
