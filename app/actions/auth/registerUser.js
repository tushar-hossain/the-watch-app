"use server";
import bcrypt from "bcryptjs";

import { collectionName, dbConnect } from "@/app/lib/dbConnect";

export const registerUser = async (payload) => {
  //   console.log(payload);
  const userscollections = dbConnect(collectionName.usersCollection);

  const { email, password } = payload;

  if (!email || !password) return { success: false };

  const user = await userscollections.findOne({ email: payload.email });

  if (!user) {
    const hashedPassword = await bcrypt.hash(password, 10);
    payload.password = hashedPassword;
    payload.role = "user";
    const result = await userscollections.insertOne(payload);
    return result;
  }

  return { success: false };
};
