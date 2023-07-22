import DataOnExp from '@/data/DataOnExp';
import React from 'react'

export default function CardOnExperience() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {DataOnExp.map((card, index) => (
        <div key={index}>
          <img
            src={card.img}
            alt={card.alt}
            className="max-h-20 md:max-h-full"
          />
          <div className="w-[90%] pt-5 text-white">
            <h3 className="font-semibold text-2xl pb-3">{card.title}</h3>
            <p className="py-5">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
