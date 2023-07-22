import React from "react";
import CardDestOn from "./cards/CardDestOn";

export default function DestinationOnDemand() {
  return (
    <>
      <div className="pt-5 ml-[8%] mb-[3.2vw]">
        <h1 className=" text-4xl lg:text-7xl font-semibold">
          Popular Destinations
        </h1>
      </div>
      <div>
        <CardDestOn />
      </div>
    </>
  );
}
