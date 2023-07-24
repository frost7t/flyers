import Link from 'next/link';
import React from 'react'

export default function MembershipsSolutions() {
  return (
    <>
      <div className="max-w-[90%] mx-auto lg:py-20 grid grid-cols-1 lg:grid-cols-2 mb-5 ">
        <div>
          <h3 className="text-3xl lg:text-6xl font-bold py-5">Memberships</h3>
        </div>
        <div>
          <p className="lg:text-2xl max-w-lg">
            Our membership program is <strong>innovative,</strong>
            <strong>bold</strong> and offers even more personalisation and
            flexibility.
          </p>
          <p className="max-w-xl pt-5 lg:text-2xl">
            You will start enjoying the benefits straight away.
          </p>
        </div>
      </div>
      <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:pt-10 border-b-2 mb-28 border-[#000]">
        <div className="">
          <Link href="/elevate-membership">
            <img
              src="../Solution/men.jpg"
              alt="woman"
              className="object-cover h-[25rem] lg:max-w-lg lg:h-[34rem]"
            />
          </Link>
          <h3 className="text-3xl pb-1 pt-1">Elevate</h3>
          <p className="text-[#9a9a9a] pb-5">
            Enhanced services, control and rewards
          </p>
        </div>
        <div className="">
          <img
            src="../Solution/black_card.jpg"
            alt="group"
            className="object-cover h-[25rem] lg:max-w-lg lg:h-[34rem]"
          />
          <h3 className="text-3xl pb-1 pt-1">Hyer® Altitude</h3>
          <p className="text-[#9a9a9a] pb-10">Coming soon</p>
        </div>
      </div>
    </>
  );
}
