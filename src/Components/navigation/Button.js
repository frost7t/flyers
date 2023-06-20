import React from 'react'

export default function Button() {
  return (
    <div className="space-x-3 flex items-center justify-center ">
      <button className="p-2 md:p-3  lg:p-5 bg-black text-[#fff] rounded-full">
        Book an Aircraft
      </button>
      <button className="p-2 md:p-3 lg:p-5 bg-black text-[#fff] rounded-full">
        Book a Shared Flight
      </button>
    </div>
  );
}
