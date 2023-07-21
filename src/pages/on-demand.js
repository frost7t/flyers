import MeetManager from "@/Components/MeetManager";
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
      <Footer/>
    </div>
  );
}
