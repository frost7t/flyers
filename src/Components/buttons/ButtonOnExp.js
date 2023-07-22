import Link from 'next/link';
import React from 'react'

export default function ButtonOnExp() {
  return (
    <div>
      <Link href="/on-demand">
        <button className="hover:bg-[#FFF] font-medium text-lg text-[#fff] hover:text-[#151623] px-4 py-2 lg:px-8 lg:py-4 border-2 border-white  rounded-full">
          Book an Aircraft
        </button>
      </Link>
    </div>
  );
}
