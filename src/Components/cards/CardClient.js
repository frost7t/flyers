import React from "react";

export default function CardClient() {
  return (
    <div className=" bg-[#f0f0f0] rounded-br-[120px] py-10 mb-10 lg:my-20">
      <div className="mx-auto max-w-[90%]">
        <h1 className="lg:text-6xl text-3xl font-semibold pb-10 lg:pb-40">
          Our clients appreciate the value of time <br /> and having flexibility
          when making <br />
          choices.
        </h1>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 max-w-2xl lg:gap-10">
          <div className="border-t-[1px] border-black">
            <p className="lg:text-5xl font-semibold py-3">7000</p>
            <p className="font-medium">Aircraft worldwide</p>
          </div>
          <div className="border-t-[1px] border-black">
            <p className="lg:text-5xl font-semibold py-3">27000</p>
            <p className="font-medium">Airport to choose from</p>
          </div>
          <div className="border-t-[1px] border-black">
            <p className="lg:text-5xl font-semibold py-3">25</p>
            <p className="font-medium">Aircraft types available</p>
          </div>
        </div>
      </div>
    </div>
  );
}
