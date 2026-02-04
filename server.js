import express from "express";
import env from "dotenv";

import { createClient } from "@supabase/supabase-js";

env.config();

// Supabase
const supabase = createClient(process.env.DATABASE_URL, process.env.DATABASE_KEY);

// Services 
const app = express();
app.use(express.json());

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

// Get Product with specify id
app.get("/product/:id", async (request, response) => {
  try {
    const { data, error } = await supabase
      .from("product")
      .select()
      .eq("id", request.params.id)
    console.log(data);
    return response.send(data);
  } catch (error) {
    return response.send({ error });
  }
});

// Post Product
app.post("/product", async (request, response) => {
  try {
    console.log(request.body);
    const { data, error } = await supabase.from("product").insert(request.body);
    if (error) {
      return response.status(400).json(error);
    }
    response.status(200).json(request.body);
  } catch (error) {
    response.send({ error });
  }
});