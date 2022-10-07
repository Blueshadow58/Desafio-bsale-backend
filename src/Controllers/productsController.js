const pool = require("../databaseConfig");

exports.index = (req, res) => {
  let getProducts;
  let results = {};

  if (req.query.page || req.query.page) {
    // Get query params limit and page
    const limit = parseInt(req.query.limit);
    const page = parseInt(req.query.page);

    // def start index
    const startIndex = page === 1 ? 0 : (page - 1) * limit;
    // def end index
    const endIndex = (page + 1) * limit;

    // def query get all from products
    getProducts = `SELECT * FROM product ORDER BY id ASC LIMIT ${limit} OFFSET ${startIndex}`;
    const getCount = `SELECT COUNT(*) as count FROM product USE INDEX(PRIMARY)`;

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
    };

    // execuste fucntion paginate then send the data
    paginate().then(() => sendData());
  } else {
    // if limit and page its not provided then show all products
    getProducts = `SELECT * FROM product`;
    sendData();
  }

  async function sendData() {
    //get paginated products
    await pool.query(getProducts, (err, products) => {
      if (!err) {
        results.results = products;
        res.send(results);
      } else {
        console.error(err);
      }
    });
  }
};

exports.product = (req, res) => {
  // get id from url
  const productId = req.params.id;
  // get * from products where id ->  id from url === id from the product
  const getProductById = `SELECT * FROM product WHERE id = ${productId}`;

  pool.query(getProductById, (err, products) => {
    if (!err) {
      res.send(products);
    } else {
      console.error(err);
    }
  });
};

exports.searchByName = (req, res) => {
  let searchProducts;
  // get product name from input
  const productName = req.body.name;
  // get products by name if they are similar with the name from the input
  searchProducts = `SELECT * FROM product WHERE name LIKE '%${productName}%' `;
  pool.query(searchProducts, (err, products) => {
    if (!err) {
      res.send(products);
    } else {
      console.error(err);
    }
  });
};

exports.searchByCategory = (req, res) => {
  // get products by category id
  const categoryId = JSON.parse(JSON.stringify(req.body.id));
  // get products by category if the request id is equal to the category id
  const searchProducts = `SELECT * FROM product WHERE category = '${categoryId}'`;
  pool.query(searchProducts, (err, products) => {
    if (!err) {
      res.send(products);
    } else {
      console.error(err);
    }
  });
};
