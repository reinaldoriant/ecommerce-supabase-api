import express from "express";
import productRoutes from "./productRoutes.js";

const router = express.Router();

// Root endpoint
router.get("/", (req, res) => {
  res.json({ info: "Express app with Supabase" });
});

// Product routes
router.use("/product", productRoutes);

export default router;
