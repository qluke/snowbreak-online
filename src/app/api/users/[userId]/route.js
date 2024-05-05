import { NextResponse } from "next/server";
import { getUser } from "@/lib/data";
import { console } from "next/dist/compiled/@edge-runtime/primitives";

export const GET = async (request, { params }) => {
  const { userId } = params;
  try {
    // FETCH DATA WITHOUT AN API
    const user = await getUser(userId);
    return NextResponse.json(user);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};
