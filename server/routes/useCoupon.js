const express = require('express');

const router = express.Router();
const pool = require('../models/DbConnection');

router.put('', async (req, res) => {
  try {
    const targetId = req.body.id;

    await pool.query(`UPDATE coupon SET used=1 WHERE id=${targetId}`);

    const selectQ = 'SELECT * FROM coupon';
    const result = await pool.query(selectQ);
    res.status(200).json({ result: result[0] });
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
