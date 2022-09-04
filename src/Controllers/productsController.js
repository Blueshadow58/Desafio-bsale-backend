const pool = require("../databaseConfig");

exports.index = (req, res) => {
  const getProducts = "SELECT * FROM product";

  pool.query(getProducts, (err, products) => {
    if (!err) {
      res.send(products);
    }
  });
};

exports.product = (req, res) => {
  const productId = req.params.id;
  const getProductById = `SELECT * FROM product WHERE id = ${productId}`;

  pool.query(getProductById, (err, products) => {
    if (!err) {
      res.send(products);
    }
  });
};

exports.search = (req, res) => {
  const { name } = req.body;
  const productName = name.toUpperCase();
  const searchProducts = `SELECT * FROM product WHERE name LIKE "${productName}%"`;

  pool.query(searchProducts, (err, products) => {
    if (!err) {
      res.send(products);
    }
  });
};
