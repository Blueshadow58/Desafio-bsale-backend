const express = require("express");
const productsRouter = express.Router();
const productsController = require("../Controllers/productsController");

productsRouter.get("/", productsController.index);
productsRouter.get("/product/:id", productsController.product);

module.exports = productsRouter;
