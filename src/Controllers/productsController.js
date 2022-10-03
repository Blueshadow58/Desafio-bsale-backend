const pool = require("../databaseConfig");

exports.index = (req, res) => {
  // let productsLength = 0;
  const page = parseInt(req.query.page) === 1 ? 0 : parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  // def pagination controlls
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  // def query get all from products
  const getProducts = `SELECT * FROM product ORDER BY id ASC LIMIT ${limit} OFFSET ${page}`;
  const getCount = `SELECT COUNT(*) as count FROM product USE INDEX(PRIMARY)`;
  let results = {};

  // get lenght of products table
  const lengthProducts = new Promise((resolve, reject) => {
    pool.query(getCount, (err, data) => {
      if (err) {
        throw new Error(err);
      }
      length = data[0].count;
      resolve(length);
    });
  });

  const paginate = async () => {
    // next page
    if (endIndex < (await lengthProducts)) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }
    // previous page
    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }
    //get paginated products
    await pool.query(getProducts, (err, products) => {
      if (err) {
        throw new Error(err);
      }
      results.results = products;
      res.send(results);
    });
  };
  paginate();
};

exports.product = (req, res) => {
  // get id from url
  const productId = req.params.id;
  // get * from products where id ->  id from url === id from the product
  const getProductById = `SELECT * FROM product WHERE id = ${productId}`;

  pool.query(getProductById, (err, products) => {
    if (!err) {
      res.send(products);
    }
  });
};

exports.search = (req, res) => {
  // get product name from input
  const productName = JSON.parse(JSON.stringify(req.body.name));
  // get products by name if they are similar with the name from the input
  const searchProducts = `SELECT * FROM product WHERE name LIKE '${productName}%' OR category LIKE '${productName}'`;
  pool.query(searchProducts, (err, products) => {
    if (!err) {
      res.send(products);
    }
  });
};
