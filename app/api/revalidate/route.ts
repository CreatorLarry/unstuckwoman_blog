import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const secret = request.headers.get("authorization");

  if (secret !== `Bearer ${process.env.REVALIDATE_SECRET}`) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  try {
    const body = await request.json();
    console.log("Revalidating due to Sanity webhook:", body);

    // Revalidate all blog pages
    await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/blog`, { method: "PURGE" });

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
  }
}
