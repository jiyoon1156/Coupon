const express = require('express');
const router = express.Router();
const pool = require('../models/DbConnection');
const generator = require('./couponGenerator.js');

router.post('', async (req, res) => {
	try {
		const email = req.body.email;
		const p = req.body.price;
		const q = req.body.qnt;

		if (!email || !Number(p) || !Number(q)) {
			return res.status(406).json({ message: 'wrong type'});
		}

		let insertQ = 'INSERT INTO coupon(email, price, quantity) VALUES(?,?,?)';
		let params = [email, p, q];
		let insertInfo = await pool.query(insertQ, params);
		let id = insertInfo[0].insertId;

		// coupon code generate
		let couponCode = generator.CouponGenerator(id);
		if (couponCode)
		{
			await pool.query(`UPDATE coupon SET code='${couponCode}' WHERE id=${id}`);
			couponCode = "";
		}

		let selectQ = 'SELECT * FROM coupon';
		const result = await pool.query(selectQ);
    res.status(200).json({ result: result[0] });

	} catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
