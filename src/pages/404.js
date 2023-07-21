import WhiteNav from "@/Components/navigation/WhiteNav";
import React from "react";

export default function NotFound() {
  return (
    <div
      className="h-[100vh] bg-left bg-cover "
      style={{ backgroundImage: `url('/img/hyer-404.jpg')` }}
    >
      <div className="ml-[5.1vw]">
        <WhiteNav/>
      </div>
      <div className="text-center pt-20 pb-10 text-[#fff] font-semibold">
        <h1 className="text-4xl">Nothing to see here</h1>
        <h1 className="text-[280px]">Error 404</h1>
      </div>
    </div>
  );
}