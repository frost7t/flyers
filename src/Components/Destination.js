import React from "react";
import CardDestination from "./cards/CardDestination";

export default function Destination() {
  return (
    <>
      <div className="pt-[9.5vw] ml-[8%] mb-[3.2vw]">
        <h1 className=" text-4xl lg:text-7xl font-semibold">Popular Destinations</h1>
      </div>
      <div>
        <CardDestination />
      </div>
    </>
  );
}