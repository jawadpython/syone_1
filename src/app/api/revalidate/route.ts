import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/**
 * Called by Sanity webhook after publish so the site updates immediately.
 * Vercel env: SANITY_REVALIDATE_SECRET
 */
export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  const expected = process.env.SANITY_REVALIDATE_SECRET;

  if (!expected || secret !== expected) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  revalidateTag("sanity");
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
