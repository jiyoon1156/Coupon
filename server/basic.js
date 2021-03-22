let couponCode = "";
let decimal = [];
/** 임의의 문자열 생성 **/
// 앞 8자리 base62 ex) n5mVqiJ1

const getRandomInt = (min, max) => {
	min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
};

let baseList = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let baseSize = baseList.length;

const getBase62 = (n) => {
	let num = n;
	let res = [];
	do {
		let mod = num % baseSize;
		num = parseInt(num / baseSize);
		res.push(baseList[mod]);
	} while (num > 0);
	// return res
	return res.reverse().join("");
};

const frontCode = () => {
	let front = "";
	for(let i = 0; i < 8; i++)
	{
		let n = getRandomInt(0, 62);
		decimal.push(n);
		front += getBase62(n);
	}
	return front;
};

console.log(frontCode());
console.log(decimal);

/** Hash Code 생성 **/
// 2자리.최대로 나올 수 있는 최대 HashCode는 61 * 8 = 488 => 7S
const HashCode = () => {
	if (decimal)
	{
		let res = "";
		let ttl = 0;
		for (let i = 0; i < 8; i++)
		{
			ttl += decimal[i];
		}
		// console.log(ttl);
		res = getBase62(ttl);
		return res;
	}
};

console.log(HashCode())

/** ID, 마지막 6자리 생성 **/
