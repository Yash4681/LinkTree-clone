import * as db from "@/app/components/db";

export async function POST(request) {
  const body = await request.json();

  const handle = await db.query("SELECT * FROM links WHERE handle=$1", [
    body.handle,
  ]);
  if (handle.rowCount != 0) {
    return Response.json({
      success: false,
      error: true,
      message: "This handle already exists",
      result: null,
    });
  }

  const res = await db.query(
    'INSERT INTO links (links, handle, pic, "desc") VALUES ($1, $2, $3, $4) RETURNING *',
    [JSON.stringify(body.links), body.handle, body.pic, body.desc]
  );
  const data = await res.rows;

  return Response.json({
    success: true,
    error: false,
    message: "Your linktree is successfully generated",
    result: data[0],
  });
}
