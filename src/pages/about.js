import AboutUS from "@/Components/AboutUS";
import Footer from "@/Components/footer/Footer";
import OtherNav from "@/Components/navigation/OtherNav";
import React from "react";

export default function About() {
  return (
    <div className="bg-[#8AADB2]">
      <div>
        <OtherNav />
        <AboutUS />
        <Footer />
      </div>
    </div>
  );
}
