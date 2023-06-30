import React, { useState } from "react";
import DataComs from "@/data/DataComs";

export default function AboutClient() {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = () => {
    const newIndex = (slideIndex + 1) % DataComs.length;
    setSlideIndex(newIndex);
  };

  return (
    <div className="max-w-[90%] mx-auto lg:py-10 grid grid-cols-1 lg:grid-cols-2 border-b-2 border-black">
      <div>
        <h3 className="text-3xl lg:text-7xl font-semibold py-5 max-w-md">
          What our clients say
        </h3>
      </div>
      <div
        className="pt-10 custom-cursor"
        onClick={handleClick}
      >
        {DataComs.map((coms) => (
          <div
            key={coms.id}
            style={{
              display: coms.id === slideIndex + 1 ? "block" : "none",
            }}
          >
            <h3 className="max-w-xl">{coms.h3Text}</h3>
            <p className="pt-5">{coms.pText}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
