"use client";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";

const Generate = () => {
  const [links, setLinks] = useState([{ link: "", linktext: "" }]);
  const [pic, setPic] = useState("");
  const [desc, setDesc] = useState("");
  const searchParams = useSearchParams();
  const [handle, setHandle] = useState(searchParams.get("handle") || "");

  const handleChange = (id, link, linktext) => {
    setLinks((prevLinks) => {
      return prevLinks.map((item, index) => {
        if (id == index) {
          return { link, linktext };
        } else {
          return item;
        }
      });
    });
  };

  const addlinks = () => {
    setLinks(links.concat([{ link: "", linktext: "" }]));
  };

  const handleSubmit = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      links: links,
      handle: handle,
      pic: pic,
      desc: desc,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const res = await fetch("http://localhost:3000/api/add", requestOptions);
    const data = await res.json();
    if (data.success) {
      toast.success(data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.error(data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
    setHandle("");
    setPic("");
    setDesc("");
    setLinks([{ link: "", linktext: "" }]);
  };

  return (
    <div className="grid grid-cols-2 bg-[#225ac0]">
      <div className="col1 flex justify-center items-center">
        <div className="flex flex-col ml-16">
          <h1 className="font-bold my-5 text-3xl">Create your Linktree</h1>
          <h2 className="font-semibold">Step 1: Claim your Handle</h2>
          <div className="mx-2">
            <input
              className="bg-white my-2 rounded-3xl py-1 px-4 focus:outline-violet-800"
              type="text"
              onChange={(e) => setHandle(e.target.value)}
              value={handle}
              placeholder="Enter Handle"
            />
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              transition={Bounce}
            />
          </div>
          <h2 className="font-semibold">Step 2: Add Links</h2>
          {links &&
            links.map((item, index) => {
              return (
                <div key={index} className="mx-2 gap-3">
                  <input
                    className="bg-white my-2 rounded-3xl py-1 px-4 focus:outline-violet-800"
                    type="text"
                    onChange={(e) =>
                      handleChange(index, item.link, e.target.value)
                    }
                    value={item.linktext || ""}
                    placeholder="Enter Link text"
                  />
                  <input
                    className="bg-white mx-2 my-2 rounded-3xl py-1 px-4 focus:outline-violet-800"
                    type="text"
                    onChange={(e) =>
                      handleChange(index, e.target.value, item.linktext)
                    }
                    value={item.link || ""}
                    placeholder="Enter Link"
                  />
                </div>
              );
            })}
          <button
            onClick={() => addlinks()}
            className="px-5 hover:cursor-pointer py-1 w-fit rounded-full bg-slate-900 text-white font-semibold"
          >
            + Add Link
          </button>
          <h2 className="font-semibold">Step 3: Add Picture and Description</h2>
          <div className="mx-2 flex flex-col">
            <input
              className="bg-white my-2 rounded-3xl py-1 px-4 focus:outline-violet-800"
              type="text"
              onChange={(e) => setPic(e.target.value)}
              value={pic || ""}
              placeholder="Enter Link to your Picture"
            />
            <input
              className="bg-white my-2 rounded-3xl py-1 px-4 focus:outline-violet-800"
              type="text"
              onChange={(e) => setDesc(e.target.value)}
              value={desc || ""}
              placeholder="Enter your description"
            />
            <button
              onClick={() => handleSubmit()}
              disabled={
                handle == "" ||
                pic == "" ||
                links[0].link == "" ||
                links[0].linktext == "" ||
                desc == ""
              }
              className="px-5 w-fit py-1 disabled:bg-slate-700 hover:cursor-pointer rounded-full bg-slate-900 text-white font-semibold"
            >
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
