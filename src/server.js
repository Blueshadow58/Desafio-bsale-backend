const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const productsRouter = require("./Routes/products");

app.use(productsRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
