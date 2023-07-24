import Link from "next/link";
import React from "react";

export default function MenuButtons() {
  return (
    <div>
      <Link href="/login">
        <button className="bg-[#000] hover:bg-[#252424] text-[#fff] px-4 py-2 rounded-full mr-2">
          Login
        </button>
      </Link>
      <Link href="/register">
        <button className="bg-[#000] hover:bg-[#252424] text-[#fff] px-4 py-2 rounded-full">
          Register
        </button>
      </Link>
    </div>
  );
}
