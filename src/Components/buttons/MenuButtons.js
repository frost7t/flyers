import Link from "next/link";
import React from "react";

export default function MenuButtons() {
  return (
    <div>
      <Link href="/login">
        <button className="bg-black hover:bg-[#252424] text-white px-4 py-2 rounded-full mr-2">
          Login
        </button>
      </Link>
      <Link href="/register">
        <button className="bg-black hover:bg-[#252424] text-white px-4 py-2 rounded-full">
          Register
        </button>
      </Link>
    </div>
  );
}
