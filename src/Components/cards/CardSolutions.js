import Link from 'next/link';
import React from 'react'

export default function CardSolutions() {
  return (
    <div className="bg-[#151623] w-[33.33vw] h-[100vh] text-[#fff] relative">
      <div className="text-center">
        <h3 className="pt-[3.7vw] text-6xl">Flexible Services</h3>
        <p className="text-2xl font-semibold absolute bottom-40 left-10 ">
          Smart solutions for all your charter requirements
        </p>
        <Link href="/solutions">
          <button className="border rounded-full text-2xl p-3 border-white absolute bottom-20 left-8 hover:bg-white hover:text-black">
            All Solutions
          </button>
        </Link>
      </div>
    </div>
  );
}