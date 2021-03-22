const express = require('express');
const app = express();
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

let list = [
	{
		uuid: '1',
		email: 'aa@email.com',
		price: 5000,
		usage: false,
	},
	{
		uuid: '2',
		email: 'bb@email.com',
		price: 10000,
		usage: false,
	},
	{
		uuid: '3',
		email: 'cc@email.com',
		price: 1000,
		usage: false,
	}
]

// get

app.get('/list', (req, res) => {
	return res.json(list);
});

app.listen(3000, () => {
	console.log('listening~~');
});

// post

app.post('/coupon', (req, res) => {

	const email = req.body.email;
	let q = req.body.qnt;
	const p = req.body.price;
	// if(!p){
	// 	return res.status(400).json({err: 'No Input'});
	// }

	for(let i = 0; i < q; i++)
	{
		// const id = list.reduce((maxId, list) => {
		// 	return list.id > maxId ? list.id : maxId;
		// }, 0) + 1;

		const newCoupon = {
			uuid: uuidv4(),
			email: email,
			price: p,
			usage: false,
		};

		list.push(newCoupon);
	}
	console.log(list);
	return res.status(201).json(list);
});

// delete
app.delete('/use/:id', (req, res) => {
	console.log(req.params.id);
	const usedCoupon = list.find(c => c.uuid === req.params.id);
	if (!usedCoupon) return res.status(404).send('There is no such coupon');

	const idx = list.indexOf(usedCoupon);
	list.splice(idx, 1);
	return res.status(200).json(list);
});
