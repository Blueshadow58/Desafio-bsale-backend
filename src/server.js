const express = require("express");
const app = express();
// Use the port that is in the .evn file or 8000
const port = process.env.PORT || 8000;
const productsRouter = require("./Routes/productsRouter");
const categoriesRouter = require("./Routes/categoriesRouter");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Def routes that the app will use
app.use("/api/products/", productsRouter);
app.use("/api/categories/", categoriesRouter);

app.listen(port);
