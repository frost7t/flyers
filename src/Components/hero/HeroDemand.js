import DataDemand from '@/data/DataDemand';
import React from 'react'

export default function HeroDemand() {
  return (
    <div className="bg-[#f0f0f0]">
      <div className="lg:ml-[41.66%] lg:max-w-[50%]  max-w-[90%] text-3xl w-full font-semibold lg:font-bold lg:text-7xl py-10 flex mx-auto">
        <h2 className="-tracking-wider">
          Our personal, dynamic and bold program ensures you get the most out of
          your time, money and flight experience.
        </h2>
      </div>
      {/* j'appel mes éléments title/description de ma data pour les affichers  */}
      <div
        className="grid lg:grid-cols-2 lg:ml-[41.66%] lg:max-w-[50%] lg:gap-10 lg:py-10 max-w-[90%] mx-auto"
        id="scrollOn"
      >
        {DataDemand.map((item, index) => (
          <div key={index}>
            <div className="border-t-[1px] border-[#000] mb-8">
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
