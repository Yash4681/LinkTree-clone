import Link from "next/link";
import * as db from "@/app/components/db";
import { notFound } from "next/navigation";

const Handle = async ({ params }) => {
  const { handle } = await params;

  const res = await db.query("SELECT * FROM links WHERE handle=$1", [handle]);

  if (res.rowCount == 0) {
    return notFound();
  }

  const data = await res.rows;
  let tree = data[0];

  return (
    <div className="flex flex-col items-center gap-4 py-10 bg-purple-500 min-h-screen">
      <div className="photo rounded-full size-20 ring-3 ring-pink-600">
        <img
          className="rounded-full size-20"
          src={tree.pic ? tree.pic : ""}
          alt=""
        />
      </div>
      <span className="font-bold">@{handle}</span>
      <span className="w-80 text-center">{tree.desc}</span>
      {tree.links &&
        tree.links.map((item, index) => {
          return (
            <Link key={index} target="_blank" href={item.link}>
              <div className="flex hover:animate-bounce hover:cursor-pointer w-96 rounded-md justify-center shadow-lg shadow-purple-300 px-4 py-2 bg-purple-200">
                {item.linktext}
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default Handle;
