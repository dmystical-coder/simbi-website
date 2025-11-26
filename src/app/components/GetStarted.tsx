import React from "react";

export default function GetStarted() {
  return (
    <section className="bg-white flex justify-center items-center h-[43.3rem]">
      <div className="max-w-[758px] p-2 space-y-4 text-center">
        <h2 className="text-5xl text-black font-medium">
          Study Smarter. Stay on track. Get Roasted (Lovingly)
        </h2>
        <p className="text-[#6B7280] text-2xl">
          Sign up and get acquainted with Simbi!
        </p>
        <div className="flex justify-center space-x-4 mt-14">
          <button
            type="button"
            className="w-[219px] bg-[#7A5FFF] text-white py-3 rounded-lg"
          >
            Get Started
          </button>
          <button
            type="button"
            className="w-[219px] border border-[#7A5FFF] text-[#7A5FFF] py-3 rounded-lg"
          >
            Have an Account{" "}
          </button>{" "}
        </div>
      </div>
    </section>
  );
}
