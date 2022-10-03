const express = require("express");
const productsRouter = express.Router();
const productsController = require("../Controllers/productsController");

// return a list with all products
productsRouter.get("/", productsController.index);
// return the product by the id of the product
productsRouter.get("/:id", productsController.product);
// return a list or a product that are similar by the name sended
productsRouter.post("/", productsController.search);

module.exports = productsRouter;
