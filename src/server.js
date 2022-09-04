const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const productsRouter = require("./Routes/products");
const categoriesRouter = require("./Routes/categories");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(productsRouter);
app.use(categoriesRouter);

app.listen(port);
