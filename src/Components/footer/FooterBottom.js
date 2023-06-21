import Link from "next/link";
import React from "react";

export default function FooterBottom({
  title,
  subtitle,
  link1,
  link2,
  link3,
  description,
}) {
  return (
    <>
      <div className="lg:flex gap-20">
        <div className=" w-full lg:w-1/4">
          <h1 className="text-[#fff] text-2xl">{title}</h1>
          <p className="text-[#dedede97] text-xl pt-10 lg:w-1/2 pb-10">
            {subtitle}
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <nav className="text-[#dedede97] text-xl lg:text-2xl lg:flex lg:space-x-20">
            <Link href="cookie">
              <ol className="hover:text-[#dededed5]">{link1}</ol>
            </Link>
            <Link href="conditions">
              <ol className="hover:text-[#dededed5]">{link2}</ol>
            </Link>
            <Link href="privacy">
              <ol className="hover:text-[#dededed5]">{link3}</ol>
            </Link>
          </nav>
          <p className="text-[#dedede97] text-lg lg:text-xl pt-10 w-4/3">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}
