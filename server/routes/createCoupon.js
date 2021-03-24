const express = require('express');

const router = express.Router();
const pool = require('../models/DbConnection');
const generator = require('./couponGenerator.js');

router.post('', async (req, res) => {
  try {
    const { email } = req.body;
    const p = req.body.price;
    const q = req.body.qnt;

    if (!email || !Number(p) || !Number(q)
    || Number(p) < 0 || Number(p) > 2147483647
    || Number(q) < 0 || Number(q) > 2147483647) {
      return res.status(406).json({ message: 'wrong type' });
    }

    const insertQ = 'INSERT INTO coupon(email, price, quantity) VALUES(?,?,?)';
    const params = [email, p, q];
    const insertInfo = await pool.query(insertQ, params);
    const id = insertInfo[0].insertId;

    let couponCode = generator.CouponGenerator(id);
    if (couponCode) {
      await pool.query(`UPDATE coupon SET code='${couponCode}' WHERE id=${id}`);
      couponCode = '';
    }

    const selectQ = 'SELECT * FROM coupon';
    const result = await pool.query(selectQ);
    res.status(200).json({ result: result[0] });
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
