import React from "react";
import Button from "../navigation/Button";

export default function Header() {
  return (
    <div className="pt-10 flex bg-[url('/img/avi.png')] bg-cover bg-no-repeat bg-center lg:bg-center md:bg-right h-[50vh] lg:h-[100vh] w-full">
      <div className="left lg:block absolute lg:right-[10rem] lg:top-1/4">
        <h3 className="hidden lg:block text-4xl lg:text-6xl font-semibold max-w-[32rem]">
          Personalised Aviation
        </h3>
      </div>
      <div className="grid grid-cols-2 items-center border-b-1">
        <div className="hidden lg:block absolute bottom-0 pb-[2.9vw] left-20">
          <p className="hidden lg:block text-2xl font-semibold">
            More flexibility, freedom and choice!
          </p>
        </div>
        <div className="hidden lg:block absolute lg:bottom-[2.9vw] lg:right-[20rem]">
          <Button />
        </div>
      </div>
    </div>
  );
}
