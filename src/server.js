const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const productsRouter = require("./Routes/products");
const categoriesRouter = require("./Routes/categories");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(productsRouter);
app.use(categoriesRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
