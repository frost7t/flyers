import Link from "next/link";
import React from "react";

export default function FooterLogin() {
  return (
    <div className="pl-5 lg:pl-10 max-w-[90%] lg:fixed lg:bottom-3">
      <div className="lg:flex lg:space-x-3">
        <div>
          <Link href="/password-forgot">
            <p className="text-gray-600 font-semibold text-base hover:border-b-[#000] hover:border-b cursor-pointer">
              Lost your password?<span className="text-red-700"> Reset</span>
            </p>
          </Link>
        </div>
        <div>
          <Link href="/register">
            <p className="text-gray-600 font-semibold text-base hover:border-b-[#000] hover:border-b cursor-pointer">
              Don't have an account yet?
              <span className="text-red-700"> Register</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
