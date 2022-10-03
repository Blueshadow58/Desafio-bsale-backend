const pool = require("../databaseConfig");

exports.index = (req, res) => {
  // def query -> get all from categories
  const getCategories = "SELECT * FROM category";

  pool.query(getCategories, (err, categories) => {
    if (!err) {
      res.send(categories);
    }
  });
};
