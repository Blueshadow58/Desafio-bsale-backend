const express = require("express");
const categoriesRouter = express.Router();
const categoriesController = require("../Controllers/categoriesController");

categoriesRouter.get("/categories", categoriesController.index);

module.exports = categoriesRouter;
