import { NextResponse } from "next/server";
import { getPosts } from "@/lib/data";

export async function GET(req) {
  try {
    // FETCH DATA WITHOUT AN API
    const posts = await getPosts();
    return NextResponse.json(posts);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
}
