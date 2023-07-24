import React from "react";
import CardWhy from "./cards/CardWhy";

export default function WhyHyer() {
  return (
    <div className="max-w-[90%] mx-auto lg:py-10 grid grid-cols-1 lg:grid-cols-2 border-b-2 border-[#000]">
      <div>
        <h3 className=" text-3xl lg:text-7xl font-semibold py-5">Why Hyer®</h3>
      </div>
      <div className="pb-10">
        <CardWhy />
      </div>
    </div>
  );
}
