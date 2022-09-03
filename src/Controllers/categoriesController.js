const pool = require("../databaseConfig");

exports.index = (req, res) => {
  const getCategories = "SELECT * FROM category";

  pool.getConnection((err, connection) => {
    if (err) {
      res.send(err);
    } else {
      connection.query(getCategories, (err, categories) => {
        if (!err) {
          res.send(categories);
        }
        connection.release();
      });
    }
  });
};
