import { Db, MongoClient } from "mongodb";
import { env } from "./env";

let client: MongoClient;
let db: Db;

export const connectDB = async () => {
  try {
    client = new MongoClient(env.DATABASE_URL);

    await client.connect();

    db = client.db(env.DATABASE_NAME);

    console.log(" MongoDB Connected");
  } catch (error) {
    console.error(" MongoDB Connection Failed", error);
    process.exit(1);
  }
};

export const getDB = () => db;

export const getClient = () => client;