const express = require('express');

const router = express.Router();
const pool = require('../models/DbConnection');
const generator = require('./couponGenerator.js');

router.post('', async (req, res) => {
  try {
    const { userName } = req.body;

    if (!userName) {
      return res.status(406).json({ message: 'Not Acceptable' });
    }
    const selectQ = 'SELECT * FROM coupon';

    // id 중복검사
    const couponInfo = await pool.query(selectQ);
    const couponSize = couponInfo[0].length;
    for (let i = 0; i < couponSize; i++) {
      if (userName === couponInfo[0][i].username) {
        return res.status(409).json({ message: 'ID already exists' });
      }
    }
    const nextId = couponInfo[0][couponSize - 1].id + 1;

    const couponCode = generator.CouponGenerator(nextId);

    const insertQ = 'INSERT INTO coupon(username, code) VALUES(?,?)';
    const params = [userName, couponCode];
    const result = await pool.query(insertQ, params);

    res.status(200).json({ result: result[0] });
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
