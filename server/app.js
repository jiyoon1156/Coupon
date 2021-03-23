const express = require('express');
const app = express();
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');

const getRouter = require('./routes/getCoupon');
const postRouter = require('./routes/createCoupon');
const putRouter = require('./routes/useCoupon');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

// get, post, put
app.use('/list', getRouter);
app.use('/coupon', postRouter);
app.use('/use/:id', putRouter);

app.listen(3000, () => {
	console.log('listening~~');
});

// delete or put
app.delete('/use/:id', (req, res) => {
	console.log(req.params.id);
	const usedCoupon = list.find(c => c.uuid === req.params.id);
	if (!usedCoupon) return res.status(404).send('There is no such coupon');

	const idx = list.indexOf(usedCoupon);
	list.splice(idx, 1);
	return res.status(200).json(list);
});
