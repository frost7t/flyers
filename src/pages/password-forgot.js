import InputPassword from '@/Components/InputPassword';
import FooterPassword from '@/Components/footer/FooterPassword';
import Link from 'next/link';
import React from 'react'

export default function PasswordForgot() {
  return (
    <>
      <div className="bg-black h-full rounded-br-[80px] lg:rounded-br-[90px]">
        <div className="w-[9rem] md:w-full">
          <Link href="/">
            <h3 className="text-white pl-3 py-5 text-xl  lg:text-2xl lg:p-10">
              &larr;Back to the Hyer® website
            </h3>
          </Link>
        </div>
        <div className="pl-3 lg:pl-10 pb-5">
          <h2 className="text-white text-4xl lg:text-5xl font-bold">
            Hyer® Client Dashboard
          </h2>
        </div>
      </div>
      <div>
        <InputPassword />
      </div>
      <div>
        <FooterPassword />
      </div>
    </>
  );
}
