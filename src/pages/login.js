import InputLogin from "@/Components/InputLogin";
import FooterLogin from "@/Components/footer/FooterLogin";
import IconGitHub from "@/Components/icons/IconGitHub";
import IconGoogle from "@/Components/icons/IconGoogle";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function Login() {
  const { data: session } = useSession();
  // console.log(session);

  if (!session) {
    return (
      <>
        <div className="bg-[#000] h-full rounded-br-[80px] lg:rounded-br-[90px]">
          <div className="w-[9rem] md:w-full">
            <Link href="/">
              <h3 className="text-[#fff] pl-3 py-5 text-xl lg:text-2xl lg:p-10">
                &larr; Back to the Hyer® website
              </h3>
            </Link>
          </div>
          <div className="pl-3 lg:pl-10 pb-5">
            <h2 className="text-[#fff] text-4xl lg:text-5xl font-bold">
              Hyer® Client Dashboard
            </h2>
          </div>
        </div>
        <div>
          <InputLogin />
        </div>
        <div className="lg:space-x-10 pl-3 py-2 ">
          <button
            className="text-[#000]  hover:bg-[#c1c1c1]/90  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2 gap-2"
            onClick={() => signIn()}
          >
            Google connection
            <IconGoogle />
          </button>
          <button
            className="text-[#fff] hover:bg-gray-900  bg-[#000]  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 gap-2"
            onClick={() => signIn()}
          >
            Github connection
            <IconGitHub />
          </button>
        </div>
        <div>
          <FooterLogin />
        </div>
      </>
    );
  }

  // Render something when the user is authenticated.
  return (
    <section>
      <div className="bg-[#000] h-full rounded-br-[80px] lg:rounded-br-[90px]">
        <div className="w-[9rem] md:w-full">
          <h3 className="text-[#fff] pl-3 py-5 text-xl lg:text-2xl lg:p-10">
            Client dashboard {session.user.name}
          </h3>
        </div>
        <div className="pl-3 lg:pl-10 pb-5">
          <h2 className="text-[#fff] text-4xl lg:text-5xl font-bold">
            Hyer® Client Dashboard
          </h2>
        </div>
      </div>
      <div className="max-w-lg mx-auto pt-4 ">
        <p>Welcome, {session.user.name}!</p>
        <h3 className="font-bold uppercase py-3"> Information </h3>
        <div className="w-24 h-2">
          <hr />
        </div>
        <div className="flex">
          <p>Email: {session.user.email}</p>
        </div>
        <div className="flex space-x-5 pb-20">
          <p>Image:</p>
          <img
            width={50}
            height={50}
            src={session.user.image}
            alt={session.user.image}
          />
        </div>
        {/* Add a logout button here */}
        <div className="flex space-x-10">
          <button className="BtnSignOut" onClick={() => signOut()}>
            SignOut
          </button>
          <Link href="/">
            <button className="BtnSignOut">Back to Home</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
