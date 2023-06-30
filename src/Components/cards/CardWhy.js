import DataWhy from '@/data/DataWhy';
import React from 'react'

export default function CardWhy() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {DataWhy.map((card, index) => (
        <div key={index}>
          <img
            src={card.img}
            alt={card.alt}
            className="max-h-20 md:max-h-full"
          />
          <div className="w-[90%] pt-5">
            <h3 className="font-semibold text-2xl lg:pb-3">{card.title}</h3>
            <p className="py-5">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
