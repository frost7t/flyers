import AboutUS from "@/Components/AboutUS";
import FoundingTeam from "@/Components/FoundingTeam";
import Footer from "@/Components/footer/Footer";
import OtherNav from "@/Components/navigation/OtherNav";
import WhyHyer from "@/Components/WhyHyer";
import React from "react";
import AboutClient from "@/Components/AboutClient";
import Timeline from "@/Components/Timeline";
import Technology from "@/Components/Technology";

export default function About() {
  return (
    <div className="bg-[#8AADB2]">
      <div>
        <OtherNav />
        <AboutUS />
        <FoundingTeam />
        <WhyHyer />
        <AboutClient />
        <Timeline />
        <Technology />
        <Footer />
      </div>
    </div>
  );
}
