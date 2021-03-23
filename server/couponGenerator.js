let couponCode = "";
let decimal = [];
let baseList = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let baseSize = baseList.length;
let hashRaw = 0;

/** 임의의 문자열 생성 **/
// 앞 8자리 base62 ex) n5mVqiJ1

const getRandomInt = (min, max) => {
	min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
};

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
		hashRaw = ttl;
		res = getBase62(ttl);
		return res;
	}
};

/** ID, 마지막 6자리 생성 **/
// 이렇게 되면 사용하기 할때 decode 해서 해당 id 삭제하거나 PUT 해야됨

const getId = (id) => {
	let id62 = getBase62(id);
	let strLen = id62.length;
	let res = [];
	if (strLen < 6)
	{
		for (let i = 0; i < (6 - strLen); i++)
		{
			res.push('0');
		}
	}
	arr = id62.split('');
	res = res.concat(arr);

	return res;
};

const IdRotate = (id) => {
	let arrId = getId(id);
	let rotateNum = hashRaw % 6;
	for (let i = 0; i < rotateNum; i++)
	{
		arrId.push(arrId[0]);
		arrId.shift();
	}
	let res = "";
	for (let i = 0; i < arrId.length; i++)
	{
		res += arrId[i];
	}
	return res;
};

/** Main 함수 **/

const CouponGenerator = (id) => {
	let frontNum = frontCode();
	let hashNum = HashCode();
	let lastNum = IdRotate(id);

	let code = frontNum + hashNum + lastNum;
	let arrCode = code.split('');
	for (let i = 0; i < arrCode.length; i++)
	{
		couponCode += arrCode[i];
		if (i === 3 || i === 7 || i === 11)
		{
			couponCode += '-';
		}
	}
	return couponCode;
};

console.log(CouponGenerator(10));
