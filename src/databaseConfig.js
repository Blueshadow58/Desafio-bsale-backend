const mysql = require("mysql");

// defining the db configuration
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
  user: "bsale_test",
  password: "bsale_test",
  database: "bsale_test",
});

pool.on("error", function (err) {
  console.log("[mysql error]", err);
});

module.exports = pool;
