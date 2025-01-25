import { NextResponse } from "next/server";

const streamUrl = process.env.STREAMING_SERVER_URL || "http://localhost:8000/live";

export async function GET() {
  try {
    const response = await fetch(streamUrl);

    const headers = new Headers({
      "Content-Type": "audio/mpeg",
      "Transfer-Encoding": "chunked",
    });

    return new NextResponse(response.body, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error("Streaming error:", error);
    return new NextResponse("Streaming error", { status: 500 });
  }
}

export const dynamic = "force-dynamic";
