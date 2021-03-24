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
app.use('/use', putRouter);

app.listen(3000, () => {
	console.log('listening~~');
});
