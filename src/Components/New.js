import DataNews from "@/data/DataNews";
import React from "react";

export default function New() {
  return (
    <div className="max-w-[90%] mx-auto" id="ScrollNews">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pt-20 pb-20">
        {DataNews.map((item, index) => (
          <div className="text-center" key={index}>
            <img
              src={item.imageSrc}
              alt={item.imageAlt}
              className="news__image"
            />
            <h1 className="pt-3 text-[#8e8e95] font-medium">{item.date}</h1>
            <h2 className="font-semibold text-3xl lg:text-4xl">{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
