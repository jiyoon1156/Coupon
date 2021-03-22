const CRC32 = require('buffer-crc32');
const microTime = require('microtime');

function getUnixTime(){
	let init = microTime.now();
	return init;
}

function makeCouponInit(time, email){
	return [time, email];
}

function couponGenerator(cnt, price){
	let couponInit = '';

	for(let i = 0; i < cnt; i++){
		let str = new makeCouponInit(getUnixTime(), 'forhjycode@gmail.com');
		let couponCode = couponInit.concat(i, str[0], str[1]);
		// console.log(couponCode);

		let buf = Buffer.from(couponCode.toString(16));
		let num = CRC32.unsigned(buf);
		let finalCode = num.toString(16);
		console.log(price, finalCode);

		let map = new Map();
		if (map.has(finalCode) === false){
			map.set(finalCode, price);
		}
		else {
			console.log('duplication problem inside');
		}

		// map 출력
		for (let [key, val] of map){
			console.log(key + ' = ' + val);
		}
	}
}

couponGenerator(10, 1000);

// function couponGeneratorStr(i, time, ment){
// 	return [i, time, ment];
// }

// function couponGeneratorNum(cnt, price){
// 	let coupons = [];

// 	for (let i = 0; i < cnt; i++){
// 		let str = new couponGeneratorStr(i, getUnixTime(), 'success');
// 		coupons.push(str);
// 	}
	// console.log(coupons);
	// let x = coupons.join('-');
	// let y = x.split('-');

	// for (let i = 0; i < y.length; i++){
	// 	let buf = Buffer.from(y[i].toString(16));
	// 	let num = CRC32.unsigned(buf);
	// 	console.log(price, num.toString(16));
	// }
// }

// couponGeneratorNum(10, 1000);
