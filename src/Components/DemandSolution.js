import Link from "next/link";
import React from "react";

export default function DemandSolution() {
  return (
    <>
      <div className="max-w-[90%] mx-auto lg:py-20 grid grid-cols-1 lg:grid-cols-2 mb-5 ">
        <div>
          <h3 className="text-3xl lg:text-6xl font-bold py-5">On-Demand</h3>
        </div>
        <div>
          <p className="lg:text-2xl max-w-lg">
            Fly on your terms. When you want, where you want.{" "}
          </p>
          <p className="max-w-lg pt-5 lg:text-2xl">
            Flying On-Demand gives you the total control of your flight and an
            unbeatable level of service at competitive rates. No hidden fees, no
            upfront investment or jet card payments.
          </p>
        </div>
      </div>
      <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:pt-10 border-b-2 border-black">
        <div className="">
          <Link href="/on-demand">
            <img
              src="../Solution/woman-working.jpg"
              alt="woman"
              className="object-cover h-[25rem] lg:max-w-lg lg:h-[34rem]"
            />
          </Link>
          <h3 className="text-3xl pb-1">Private Charter</h3>
          <p className="text-[#9a9a9a] pb-5">
            Your aircraft is ready when you are.
          </p>
        </div>
        <div className="">
          <img
            src="../Solution/group-charter.jpg"
            alt="group"
            className="object-cover h-[25rem] lg:max-w-lg lg:h-[34rem]"
          />
          <h3 className="text-3xl pb-1">Group Charter</h3>
          <p className="text-[#9a9a9a] pb-10">Coming soon</p>
        </div>
      </div>
    </>
  );
}
