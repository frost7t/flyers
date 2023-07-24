import Link from 'next/link';
import React from 'react'

export default function ButtonExp() {
  return (
    <div>
      <Link href="/">
        <button className="bg-[#000] hover:bg-[#252424] font-medium text-lg text-[#fff] px-4 py-2 lg:px-8 lg:py-4 rounded-full">
          Book an Aircraft
        </button>
      </Link>
    </div>
  );
}
