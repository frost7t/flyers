import React from 'react'

export default function ButtonRegister() {
  return (
    <div className="py-5">
      <button className="bg-[#000] hover:bg-[#000000cc] text-[#FFF] text-xl lg:text-base font-semibold px-8 py-2 lg:px-5 lg:py-3 rounded-full">
        Register
      </button>
      <div className="flex items-center mt-3">
        <input type="checkbox" className="mr-2" />
        <span className="text-sm">
          I have read and accepted the
          <span className="text-red-800"> Privacy Policy </span>
        </span>
      </div>
    </div>
  );
}
