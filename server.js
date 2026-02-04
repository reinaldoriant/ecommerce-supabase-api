import express from "express";
import env from "dotenv";

import { createClient } from "@supabase/supabase-js";

env.config();

// Supabase
const supabase = createClient(process.env.DATABASE_URL, process.env.DATABASE_KEY);

// Services 
const app = express();

app.get("/", (_, response) =>
  response.json({ info: "Express app with Supabase" })
);

app.listen(process.env.PORT, () =>
  console.log(
    new Date().toLocaleTimeString() +
      `: Server is running on port ${process.env.PORT}...`
  )
);

// Get Product
app.get("/product", async (_, response) => {
  try {
    const { data, error } = await supabase.from("product").select();
    console.log(data);
    return response.send(data);
  } catch (error) {
    return response.send({ error });
  }
});