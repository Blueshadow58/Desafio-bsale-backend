const pool = require("../databaseConfig");

exports.index = (req, res) => {
  const getProducts = "SELECT * FROM product";

  pool.getConnection((err, connection) => {
    if (err) {
      res.send(err);
    } else {
      connection.query(getProducts, (err, products) => {
        if (!err) {
          res.send(products);
        }
        connection.release();
      });
    }
  });
};

exports.product = (req, res) => {
  const productId = req.params.id;
  const getProductById = `SELECT * FROM product WHERE id = ${productId}`;

  pool.getConnection((err, connection) => {
    if (err) {
      res.send(err);
    } else {
      connection.query(getProductById, (err, products) => {
        if (!err) {
          res.send(products);
        }
        connection.release();
      });
    }
  });
};