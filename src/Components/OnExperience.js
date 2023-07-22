import React from "react";
import CardOnExperience from "./cards/CardOnExperience";
import ButtonOnExp from "./buttons/ButtonOnExp";
import SliderOnExp from "./SliderOnExp";

export default function OnExperience() {
  return (
    <div className="p-[3.7vw] bg-[#151623]">
      <div>
        <h4 className="mb-[6.8vw] text-3xl text-white  lg:text-9xl font-bold">
          Hyer® <br /> Experience
        </h4>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <p className=" pb-3 text-lg text-white -tracking-wider lg:tracking-normal lg:w-1/2">
            Personalisation, flexibility and care are the core of Hyer®
            <strong>On-Demand</strong> flights. Our clients enjoy much more
            value for their investment.
            <br />
            <br /> We don't believe in a "one-size-fits-all". Our operational
            freedom enables us to work with multiple leading operators to offer
            you the best options in the market with unparalleled service levels.
          </p>
        </div>
        <div>
          <CardOnExperience />
        </div>
      </div>
      <div className="py-3">
        <ButtonOnExp />
      </div>
      <div>
        <SliderOnExp />
      </div>
    </div>
  );
}
