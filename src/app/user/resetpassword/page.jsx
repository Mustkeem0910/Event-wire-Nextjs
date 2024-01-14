"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleResetPassword = () => {
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setIsEmailValid(false);
      alert("Please enter a valid email address.");
      return;
    }

    // Continue with password reset logic if email is valid
    // ...

    // For this example, I'm just navigating to another page as a placeholder
    router.push("/user/password-reset-instructions");
  };

  return (
    <>
      <nav className="bg-mygrey p-2 mx-4 sm:mx-20 font-[Poppins] ">
        <div className="container mx-auto flex justify-center items-center">
          <div className="text-white">
            <h1 className="text-black text-3xl mt-5 font-semibold cursor-pointer leading-10">
              COMPANY NAME
            </h1>
          </div>
        </div>
      </nav>

      <div className=" font-[Poppins]">
        <div className="container mx-auto flex border border-1 border-gray-300 max-w-xl">
          <div className={`w-full flex flex-col mx-3 items-center`}>
            <h2 className="text-2xl mt-10 font-semibold">Reset Password</h2>
            <div className="flex justify-center text-md my-6">
              <p className=" text-black mr-2 font-[Poppins]">
                Enter your email address for instructions to reset your
                password.
              </p>
            </div>

            <div className="mt-5 w-full container px-10 ">
        <div className="mb-10">
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setIsEmailValid(true); // Reset validation status on input change
            }}
            className={`input-primary border-b p-2 w-full focus:border-b focus:outline-none ${
              !isEmailValid ? "border-red-500" : ""
            }`}
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            onClick={handleResetPassword}
            className="bg-white text-black px-10 mb-10 font-semibold border border-black p-2 rounded-md  hover:bg-primary  hover:border-primary hover:text-white"
          >
            Reset Password
          </button>
        </div>
      </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
