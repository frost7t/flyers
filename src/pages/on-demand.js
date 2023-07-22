import DestinationOnDemand from "@/Components/DestinationOnDemand";
import MeetManager from "@/Components/MeetManager";
import OnDemandd from "@/Components/OnDemandd";
import OnExperience from "@/Components/OnExperience";
import CardClient from "@/Components/cards/CardClient";
import Footer from "@/Components/footer/Footer";
import HeaderOnDemand from "@/Components/header/HeaderOnDemand";
import HeroDemand from "@/Components/hero/HeroDemand";
import React from "react";

export default function OnDemand() {
  return (
    <div>
      <HeaderOnDemand />
      <HeroDemand />
      <MeetManager />
      <OnExperience />
      <OnDemandd />
      <CardClient />
      <DestinationOnDemand />
      <Footer />
    </div>
  );
}
