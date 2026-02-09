import express from "express";
import routes from "./routes/index.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { config } from "./config/env.js";

// Init Server
const app = express();
const PORT = config.port;

// Parsing Json
app.use(express.json());

// Routes
app.use("/", routes);

// Global Error
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  console.log(
    new Date().toLocaleTimeString() +
      `: Server is running on port ${PORT}...`
  );
});