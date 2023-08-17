import Link from 'next/link';
import React from 'react'

export default function ButtonLogin() {
  return (
    <div className="py-5">
      <Link href="/404">
         {/*in progress --> directory 404  */}
        <button className="bg-[#000] hover:bg-[#000000cc] text-[#fff] text-xl lg:text-base font-semibold px-8 py-2 lg:px-5 lg:py-3 rounded-full">
          Sign in
        </button>
      </Link>
    </div>
  );
}
