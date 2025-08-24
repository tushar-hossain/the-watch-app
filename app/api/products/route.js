import { collectionName, dbConnect } from "@/app/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (res) => {
  const products = await dbConnect(collectionName.products).find().toArray();
  return NextResponse.json(products);
};
