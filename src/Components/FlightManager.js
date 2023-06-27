import React from "react";

export default function FlightManager() {
  return (
    <>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-[#0F0F1C]">
          <img
            src="/img/phone.png"
            alt="phone"
            className="max-w-full mx-auto max-h-40 md:max-h-80 lg:max-h-full "
          />
        </div>
        <div className="bg-[#151622] flex flex-wrap justify-between p-[4.1vw] ">
          <h1 className=" text-[#fff] text-3xl lg:text-7xl font-semibold pb-5 lg:pb-96">
            FlightManager
          </h1>
          <p className="text-base pb-5 lg:text-2xl text-[#fff]">
            All of our flights come with complimentary Flight Manager Service.
            Your dedicated Flight Manager ensures that every detail of your
            flight is taken care of and you get the most competitive tailor-made
            offers. Speak with your Flight Manager in English 🇬🇧, Dutch 🇳🇱,
            German 🇩🇪, Spanish 🇪🇸 or Portuguese 🇵🇹.
          </p>
        </div>
      </div>
    </>
  );
}
