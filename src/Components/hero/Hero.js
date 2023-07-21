import { DataExperience } from "@/data/DataExperience";
import React from "react";

export default function Hero() {
  return (
    <div className="">
      <div className="lg:ml-[41.66%] lg:max-w-[50%]  max-w-[90%] text-3xl w-full font-semibold lg:font-bold lg:text-7xl py-10 flex mx-auto">
        <h2 className="-tracking-wider">
          We believe that in a world where passengers have become numbers, a
          personal approach is key to ensure you get the most out of your flying
          experience.
        </h2>
      </div>
      {/* j'appel mes éléments title/description de ma data pour les affichers  */}
      <div className="grid lg:grid-cols-2 lg:ml-[41.66%] lg:max-w-[50%] lg:gap-10 lg:py-10 max-w-[90%] mx-auto">
        {DataExperience.map((item, index) => (
          <div key={index}>
            <div className="border-t-[1px] border-black mb-8">
              <h1 className="text-3xl font-medium pt-5">{item.title}</h1>
              <p className=" text-lg lg:text-2xl text-[#8e8e95] py-3">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}