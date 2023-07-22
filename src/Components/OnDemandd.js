import Link from "next/link";
import React from "react";

export default function OnDemandd() {
  return (
    <>
      <div className="max-w-[90%] mx-auto py-5 lg:py-20 ">
        <div>
          <h3 className="text-3xl lg:text-6xl font-bold py-5">On-Demand</h3>
        </div>
      </div>
      <div className="max-w-[90%] mx-auto grid grid-cols-1  lg:grid-cols-3 lg:pt-5border-b-2 border-black">
        <div className="">
          <Link href="/on-demand">
            <img
              src="../Solution/woman-working.jpg"
              alt="woman"
              className="object-cover h-[25rem] lg:max-w-lg lg:h-[34rem]"
            />
          </Link>
          <h3 className="text-3xl pt-1 pb-1 font-semibold">Private Charter</h3>
          <p className=" pb-5">You control all aspects of your flight</p>
        </div>
        <div id="ScrollDemand">
          <img
            src="../Solution/group-charter.jpg"
            alt="group"
            className="object-cover h-[25rem] lg:max-w-lg lg:h-[34rem]"
          />
          <h3 className="text-3xl font-semibold pt-1 pb-1">Group Charter</h3>
          <p className=" pb-10">Specially designed for large events (MICE)</p>
        </div>
      </div>
    </>
  );
}
