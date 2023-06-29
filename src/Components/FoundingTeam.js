import { DataAbout } from "@/data/DataAbout";
import React from "react";

export default function FoundingTeam() {
  return (
    <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2  border-b-2 border-black">
      <div>
        <h3 className=" text-3xl lg:text-6xl font-semibold pt-3 lg:pt-20 pb-5 lg:pb-14">
          Founding Team
        </h3>
        <p className="-tracking-wider text-lg lg:text-2xl font-normal lg:max-w-xl">
          Hyer® Aviation was founded by Max van Doorne and Helder Reis,
          themselves aircraft pilots with decades of experience in the aviation
          industry. They recognized that the private charter market is still too
          complex. Some services, which are usually taken for granted in this
          sector, are not delivered at the same level as they should be. They
          built Hyer® to tackle this problem.
        </p>
      </div>
      <div className="lg:flex lg:py-20 lg:space-x-10 items-center">
        {DataAbout.map(
          (
            Founder,
            index // Utilisation de la méthode map pour itérer sur chaque membre fondateur dans le tableau DataAbout
          ) => (
            <div key={index} className="">
              <img
                src={Founder.imageSrc}
                alt={Founder.imageAlt}
                className={` object-center object-cover max-w-[100%]  pt-8 ${
                  index === 1 ? "rounded-br-[80px]" : "" // Classe pour arrondir le coin inférieur droit de l'image si l'index est égal à 1
                }`}
              />
              <div className="py-5 ">
                <h3 className="text-2xl font-semibold -tracking-wider">
                  {Founder.name}
                </h3>
                <p className="text-xl">{Founder.role}</p>
              </div>
              <p className="-tracking-wider lg:tracking-normal ">
                {Founder.description}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
