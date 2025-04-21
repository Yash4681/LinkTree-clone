"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [handle, setHandle] = useState("");
  const router = useRouter();

  const submit = () => {
    router.push("/generate?handle=" + handle);
  };

  return (
    <main>
      <section className="bg-[#254f1a] h-[120vh] grid grid-cols-2">
        <div className="flex justify-center ml-[3vw] flex-col gap-6">
          <p className="text-yellow-200 text-5xl font-bold">
            Everything you are. In one, simple link in bio.
          </p>
          <p className="text-yellow-200 text-xl ">
            Join 50M+ people using Linktree for their link in bio. One link to
            help you share everything you create, curate and sell from your
            Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
          <div className="flex gap-2 my-4">
            <input
              className="bg-white p-4 rounded-md"
              type="text"
              onChange={(e) => setHandle(e.target.value)}
              value={handle}
              placeholder="linktr.ee/yourname"
            />
            <button
              onClick={submit}
              className="bg-pink-200 hover:bg-pink-300 hover:cursor-pointer p-4 rounded-full"
            >
              Claim your Linktree
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src="/home.png" alt="home page image" />
        </div>
      </section>
      <section className="h-[100vh] grid grid-cols-2 bg-[#e9c0e9]">
        <div className="photo flex justify-center items-center">
          <img src="/home2.png" alt="2nd home page image" />
        </div>
        <div className="flex flex-col gap-4 justify-center font-bold px-10 text-[#502474]">
          <span className="text-5xl">
            Create and customize your Linktree in minutes
          </span>
          <p className="text-lg">
            Connect your TikTok, Instagram, Twitter, website, store, videos,
            music, podcast, events and more. It all comes together in a link in
            bio landing page designed to convert.
          </p>
          <button
            onClick={() => submit()}
            className="bg-[#502474] w-fit text-white rounded-full p-5 px-7 hover:cursor-pointer hover:bg-[#5d3e78]"
          >
            Get started for free
          </button>
        </div>
      </section>
    </main>
  );
}
