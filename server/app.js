const express = require('express');

const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const getRouter = require('./routes/getCoupon');
const postRouter = require('./routes/createCoupon');
const putRouter = require('./routes/useCoupon');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// get, post, put
app.use('/list', getRouter);
app.use('/coupon', postRouter);
app.use('/use', putRouter);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server starts');
});
