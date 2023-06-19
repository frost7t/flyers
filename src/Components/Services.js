import React from "react";
import CardSolutions from "./cards/CardSolutions";
import CardOnDemand from "./cards/CardOnDemand";
import CardShared from "./cards/CardShared";

export default function Services() {
  return (
    <div className="flex">
      <CardSolutions />
      <CardOnDemand />
      <CardShared />
    </div>
  );
}
