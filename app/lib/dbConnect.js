import { MongoClient } from "mongodb";

export const collectionName = {
  products: "products",
};

// export default function dbConnect(collectionName) {
// const client = new MongoClient(process.env.MONGO_URI, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });
//   return client.db("watchDB").collection(collectionName);
// }

export const dbConnect = (collectionName) => {
  const client = new MongoClient(process.env.MONGO_URI);
  return client.db("watchDB").collection(collectionName);
};
