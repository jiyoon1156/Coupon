require('dotenv').config();

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME,
});

// pool.connect();

// pool.query('SELECT * from coupon', function (error, results, fields) {
// 	if (error) {
// 			console.log(error);
// 	}
// 	console.log(results);
// });

// pool.end();

module.exports = pool;
