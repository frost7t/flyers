import Link from "next/link";
import React from "react";

export default function SharedSolution() {
  return (
    <>
      <div className="max-w-[90%] mx-auto lg:py-20 grid grid-cols-1 lg:grid-cols-2 mb-5 ">
        <div>
          <h3 className="text-3xl lg:text-6xl font-bold py-5">
            Shared Flights
          </h3>
        </div>
        <div>
          <p className="lg:text-2xl max-w-lg">
            Fly on Hyer® exclusive routes booking a seat.
          </p>
          <p className="max-w-lg pt-5 lg:text-2xl">
            Flying on a shared flight with like-minded people gives you the
            convenience and comfort that only private aviation can provide, for
            a fraction of the price.
          </p>
        </div>
      </div>
      <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:pt-10 border-b-2 border-black">
        <div className="">
          <Link href="/shared">
            <img
              src="../Solution/young-woman.jpg"
              alt="woman"
              className="object-cover h-[25rem] lg:max-w-lg lg:h-[34rem]"
            />
          </Link>
          <h3 className="text-3xl pb-1 pt-1">Available Flights</h3>
          <p className="text-[#9a9a9a] pb-5">Join in a shared flight.</p>
        </div>
        <div className="">
          <img
            src="../Solution/citation.jpg"
            alt="group"
            className="object-cover h-[25rem] lg:max-w-lg lg:h-[34rem]"
          />
          <h3 className="text-3xl pb-1 pt-1">Propose a route</h3>
          <p className="text-[#9a9a9a] pb-10">Start your shared flight. </p>
        </div>
      </div>
    </>
  );
}
