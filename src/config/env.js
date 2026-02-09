import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  database: {
    url: process.env.DATABASE_URL,
    key: process.env.DATABASE_KEY,
  },
};
