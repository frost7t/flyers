import React from "react";
import DataContact from "@/data/DataContact";

export default function CardContact() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {DataContact.map((card, index) => (
        <div key={index}>
          <img
            src={card.img}
            alt={card.alt}
            className="max-h-20 md:max-h-full"
          />
          <div className="w-[90%] pt-5">
            <h3 className="font-semibold text-2xl lg:pb-3">{card.title}</h3>
            <p className="py-5 text-xl w-[90%]">
              {card.title === "Find us" ? (
                <strong>{card.description}</strong>
              ) : (
                card.description
              )}
              <br />
              <span>{card.span}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
