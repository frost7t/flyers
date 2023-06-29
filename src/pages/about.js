import AboutUS from "@/Components/AboutUS";
import FoundingTeam from "@/Components/FoundingTeam";
import Footer from "@/Components/footer/Footer";
import OtherNav from "@/Components/navigation/OtherNav";
import WhyHyer from "@/data/WhyHyer";
import React from "react";

export default function About() {
  return (
    <div className="bg-[#8AADB2]">
      <div>
        <OtherNav />
        <AboutUS />
        <FoundingTeam />
        <WhyHyer />
        <Footer />
      </div>
    </div>
  );
}
