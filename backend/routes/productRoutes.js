import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Product from "../models/productModel.js";

//@descripcion   Trae todos los productos
//@route         GET /api/products
//@access        Public

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

//@descripcion   Trae un solo producto
//@route         GET /api/product
//@access        Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      throw new Error("Producto no encontrado");
    }
  })
);

export default router;
