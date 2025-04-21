import * as db from "@/app/components/db";

export async function POST(request) {
  const body = await request.json();

  const handle = await db.query("SELECT * FROM links WHERE handle=$1", [
    body.handle,
  ]);
  if (handle.rowCount == 0) {
    return Response.json({
      success: false,
      error: true,
      message: "This handle does not exist",
      result: null,
    });
  }
  const data = await handle.rows;
  return Response.json({
    success: true,
    error: false,
    message: "Your linktree is successfully fetched",
    result: data[0],
  });
}
