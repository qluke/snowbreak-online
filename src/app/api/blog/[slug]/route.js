import { NextResponse } from "next/server";
import { getPost } from "@/lib/data";
import { console } from "next/dist/compiled/@edge-runtime/primitives";

export const GET = async (request, { params }) => {
  const { slug } = params;
  try {
    // FETCH DATA WITHOUT AN API
    const posts = await getPost(slug);
    return NextResponse.json(posts);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};
