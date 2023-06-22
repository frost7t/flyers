import DataExp from "@/data/DataExp";
import React from "react";

export default function CardExperience() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {DataExp.map((card, index) => (
          <div key={index}>
            <img src={card.img} alt={card.alt} />
            <div className="w-[90%] pt-5">
              <h3 className="font-semibold text-2xl pb-3">{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}