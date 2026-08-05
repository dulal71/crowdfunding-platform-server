import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || "development",
DATABASE_URL: process.env.MONGODB_URI || "",
CLIENT_URL: process.env.CLIENT_URL || "",
  DATABASE_NAME: process.env.DATABASE_NAME || "crowdfunding-platform",
};