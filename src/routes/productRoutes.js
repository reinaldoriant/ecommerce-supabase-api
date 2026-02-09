import express from "express";
import { ProductController } from "../controllers/ProductController.js";

const router = express.Router();

// Get all products
router.get("/", ProductController.getAllProducts);

// Create new product
router.post("/", ProductController.createProduct);

// Get product by ID
router.get("/:id", ProductController.getProductById);

// Update product
router.patch("/:id", ProductController.updateProduct);

// Delete product
router.delete("/:id", ProductController.deleteProduct);

export default router;
