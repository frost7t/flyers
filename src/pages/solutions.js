import DemandSolution from "@/Components/DemandSolution";
import MembershipsSolutions from "@/Components/MembershipsSolutions";
import SharedSolution from "@/Components/SharedSolution";
import Footer from "@/Components/footer/Footer";
import HeaderSolutions from "@/Components/header/HeaderSolutions";
import React from "react";

export default function Solutions() {
  return (
    <div>
      <HeaderSolutions />
      <DemandSolution />
      <SharedSolution />
      <MembershipsSolutions />
      <Footer />
    </div>
  );
}
