import Link from "next/link";
import React from "react";

export default function CardSolutions() {
  return (
    <div className="bg-[#151623] w-full lg:h-[100vh] h-[33vh] bg-cover text-[#fff] relative">
      <div className="max-w-[90%] mx-auto">
        <h3 className="pt-[3.7vw] font-semibold text-3xl lg:text-6xl">
          Flexible Services
        </h3>
        <p className="text-lg font-medium py-3">
          Smart solutions for all your charter requirements
        </p>
        <div className=" py-5 lg:py-0 absolute bottom-2 lg:bottom-16">
          <Link href="/solutions">
            <button className="border rounded-full text-lg lg:text-2xl p-1 lg:p-3 border-white hover:bg-white hover:text-black">
              All Solutions
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
