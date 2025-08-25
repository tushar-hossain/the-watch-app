"use server";
import bcrypt from "bcryptjs";

import { collectionName, dbConnect } from "@/app/lib/dbConnect";

export const loginUser = async (payload) => {
  const { email, password } = payload;
  const useCollection = dbConnect(collectionName.usersCollection);
  const user = await useCollection.findOne({ email });
  if (!user) return null;

  const isPasswordOk = bcrypt.compare(user.password, password);
  if (!isPasswordOk) return null;

  return user;
};
