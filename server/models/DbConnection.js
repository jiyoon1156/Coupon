require('dotenv').config();

const mysql = require('mysql2/promise');

console.log(process.env.DB_HOST);
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'CouponSys',
});

module.exports = pool;
