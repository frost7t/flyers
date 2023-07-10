import ContactHyer from "@/Components/ContactHyer";
import MessageUs from "@/Components/MessageUs";
import Footer from "@/Components/footer/Footer";
import HeaderContact from "@/Components/header/HeaderContact";
import React from "react";

export default function Contact() {
  return (
    <div>
      <HeaderContact />
      <ContactHyer />
      <MessageUs />
      <Footer />
    </div>
  );
}
