import { DataExperience } from "@/data/DataExperience";
import React from "react";

export default function Hero() {
  return (
    <div className="">
      <div className="ml-[41.66%] max-w-[50%] font-bold text-7xl py-10 flex mx-auto">
        <h2>
          We believe that in a world where passengers have become numbers, a
          personal approach is key to ensure you get the most out of your flying
          experience.
        </h2>
      </div>
      {/* j'appel mes éléments title/description de ma data pour les affichers  */}
      <div className="grid grid-cols-2 ml-[41.66%] max-w-[50%] gap-10 py-10 ">
        {DataExperience.map((item, index) => (
          <div key={index}>
            <div className="border-t-[1px] border-black mb-8">
              <h1 className="text-3xl font-medium pt-5">{item.title}</h1>
              <p className="text-2xl text-gray-400 py-5">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
