import React from "react";
import CardContact from "./cards/CardContact";

export default function ContactHyer() {
  return (
    <div className="max-w-[90%] mx-auto lg:py-10 grid grid-cols-1 lg:grid-cols-2 border-b-2 border-[#000]">
      <div>
        <h3 className="text-3xl lg:text-7xl font-bold py-5">Contact Hyer®</h3>
      </div>
      <div className="pb-10">
        <CardContact />
        <div className="pb-10 lg:pt-20" id="ScrollContact">
          <img src="/contact/room.jpg" alt="room" />
        </div>
      </div>
    </div>
  );
}
