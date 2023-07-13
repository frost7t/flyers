import React from "react";
import ButtonRegister from "./buttons/ButtonPassword";

export default function InputPassword() {
  return (
    <div className="pl-3 lg:pl-10 py-5 max-w-[90%]">
      <h1 className="text-4xl lg:text-5xl py-3 font-semibold">Reset password</h1>
      <div className="py-5 flex flex-col max-w-[90%] lg:max-w-lg">
        <label htmlFor="email" className="text-xl lg:text-base font-semibold">
          Email*
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email address"
          className=" py-2 border-b text-2xl border-gray-400 focus:outline-none focus:border-gray-400"
        />
      </div>
      <div>
        <ButtonRegister />
      </div>
    </div>
  );
}
