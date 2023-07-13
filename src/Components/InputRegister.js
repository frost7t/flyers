import React from "react";
import ButtonRegister from "./buttons/ButtonRegister";

export default function InputRegister() {
  return (
    <>
      <div className="pl-3 lg:pl-10 lg:py-5 max-w-[90%]">
        <div>
          <h1 className="text-4xl lg:text-5xl py-3 font-semibold">Register</h1>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="py-5 flex flex-col max-w-[90%] lg:max-w-lg">
            <label
              htmlFor="firstName"
              className="text-xl lg:text-base font-semibold"
            >
              First Name*
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              className="py-2 border-b text-2xl border-gray-400 focus:outline-none focus:border-gray-400"
            />

            <label
              htmlFor="email"
              className="text-xl lg:text-base font-semibold mt-5"
            >
              Email*
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email address"
              className="py-2 border-b text-2xl border-gray-400 focus:outline-none focus:border-gray-400"
            />

            <label
              htmlFor="phoneNumber"
              className="text-xl lg:text-base font-semibold mt-5"
            >
              Phone Number
            </label>
            <div className="lg:flex items-center mt-2">
              <select
                id="countryCode"
                className="py-2 border-b text-2xl border-gray-400 focus:outline-none focus:border-gray-400"
              >
                <option value="+33">France (+33)</option>
              </select>
              <input
                type="tel"
                id="phoneNumber"
                placeholder="Phone Number"
                className="py-2 lg:ml-2 border-b text-2xl border-gray-400 focus:outline-none focus:border-gray-400"
              />
            </div>
            <label
              htmlFor="password"
              className="text-xl lg:text-base font-semibold mt-5"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="py-2 border-b text-2xl border-gray-400 focus:outline-none focus:border-gray-400"
            />
          </div>

          <div className="lg:py-5 flex flex-col max-w-[90%] lg:max-w-lg ml-0 lg:ml-5 mt-5 lg:mt-0">
            <label
              htmlFor="lastName"
              className="text-xl lg:text-base font-semibold"
            >
              Last name*
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Last name"
              className="py-2 border-b text-2xl border-gray-400 focus:outline-none focus:border-gray-400"
            />

            <label
              htmlFor="country"
              className="text-xl lg:text-base font-semibold mt-5"
            >
              Country*
            </label>
            <input
              type="text"
              id="country"
              placeholder="Country"
              className="py-2 border-b text-2xl border-gray-400 focus:outline-none focus:border-gray-400"
            />
            <label
              htmlFor="confirmPassword"
              className="text-xl lg:text-base font-semibold mt-5"
            >
              Confirm password*
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm password"
              className="py-2 border-b text-2xl border-gray-400 focus:outline-none focus:border-gray-400"
            />
            <ButtonRegister />
          </div>
        </div>
      </div>
    </>
  );
}
