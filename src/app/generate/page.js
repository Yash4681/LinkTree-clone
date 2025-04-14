import React from "react";

const Generate = () => {
  return (
    <div className="grid grid-cols-2 bg-[#225ac0]">
      <div className="col1 flex justify-center items-center">
        <div className="flex flex-col ml-16">
          <h1 className="font-bold my-3 text-3xl">Create your Linktree</h1>
          <h2 className="font-semibold">Step 1: Claim your Handle</h2>
          <div className="mx-2">
            <input
              className="bg-white my-2 rounded-3xl py-1 px-4 focus:outline-violet-800"
              type="text"
              placeholder="Enter Handle"
            />
          </div>
          <h2 className="font-semibold">Step 2: Add Links</h2>
          <div className="mx-2 gap-3">
            <input
              className="bg-white my-2 rounded-3xl py-1 px-4 focus:outline-violet-800"
              type="text"
              placeholder="Enter Link text"
            />
            <input
              className="bg-white mx-2 my-2 rounded-3xl py-1 px-4 focus:outline-violet-800"
              type="text"
              placeholder="Enter Link"
            />
            <button className="px-5 py-1 rounded-full bg-slate-900 text-white font-semibold">
              Add Link
            </button>
          </div>
          <h2 className="font-semibold">Step 3: Add Picture and Finalize</h2>
          <div className="mx-2 flex flex-col">
            <input
              className="bg-white my-2 rounded-3xl py-1 px-4 focus:outline-violet-800"
              type="text"
              placeholder="Enter Link to your Picture"
            />
            <button className="px-5 w-fit py-1 rounded-full bg-slate-900 text-white font-semibold">
              Create your Linktree
            </button>
          </div>
        </div>
      </div>
      <div className="col2 w-full">
        <img
          className="h-screen w-full my-10 object-contain"
          src="/generate.png"
          alt="generate page image"
        />
      </div>
    </div>
  );
};

export default Generate;
