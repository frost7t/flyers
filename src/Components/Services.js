import React from "react";
import CardSolutions from "./cards/CardSolutions";
import CardOnDemand from "./cards/CardOnDemand";
import CardShared from "./cards/CardShared";

export default function Services() {
  return (
    <div className=" w-full grid grid-cols-1 lg:grid-cols-3">
      <CardSolutions />
      <CardOnDemand />
      <CardShared />
    </div>
  );
}
