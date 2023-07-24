import Link from "next/link";
import React from "react";

export default function FooterRegister() {
  return (
    <div className="pl-5 lg:pl-10 max-w-[90%] lg:fixed lg:bottom-3">
      <div>
        <Link href="/login">
          <p className="text-gray-600 font-semibold text-xl hover:border-b-[#000] hover:border-b cursor-pointer">
            Already have an account?
            <span className="text-red-700"> Sign in</span>
          </p>
        </Link>
      </div>
    </div>
  );
}
