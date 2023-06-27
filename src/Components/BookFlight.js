import Link from "next/link";
import React from "react";

export default function BookFlight() {
  return (
    <div
      className="w-full"
      style={{
        background:
          "linear-gradient(1turn, #d3e3f2, rgba(211, 227, 242, 0) 72.08%)",
      }}
    >
      <div className="text-center bg-[url('/img/clouds.png')] h-20  md:h-40 lg:h-[50vh] bg-cover bg-center">
        <p className="text-[#8e8e95] hidden md:block text-2xl lg:text-4xl font-medium">
          What are you waiting for?
        </p>
        <Link href="/">
          <h3 className="font-bold text-4xl pt-20 lg:pt-10 lg:text-9xl hover:border-b-2  border-black inline">
            Book a flight
          </h3>
        </Link>
      </div>
    </div>
  );
}
