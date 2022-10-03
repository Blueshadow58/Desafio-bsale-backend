const express = require("express");
const categoriesRouter = express.Router();
const categoriesController = require("../Controllers/categoriesController");

// return a json list with all the categories
categoriesRouter.get("/", categoriesController.index);

module.exports = categoriesRouter;
