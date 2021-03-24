# Coupon

## 1) API

### 1. 쿠폰 리스트

|URL|Method|
|------|-------|
|/list|GET|

### 2. 쿠폰 생성

|URL|Method|
|------|-------|
|/coupon|POST|

### 3. 쿠폰 사용

|URL|Method|
|------|-------|
|/use|PUT|

## 2) 쿠폰코드 생성

### 1. 난수로 구성된 문자열 생성

```
1. Math.random 사용해 0부터 n-1 사이의 난수 반환하는 함수를 만듦. (getRandomInt 함수)
2. 반환된 10진수 난수를 decimal 배열에 저장한다.
3. getBase62 함수를 통해 getRandomInt(0, 62)에서 반환된 숫자를 62진수로 변환한다. ([0-9][a-z][A-Z])
4. 1, 2번을 8번 반복해 연결하여 8자리의 임의의 문자열 생성한다.

EX)
McfH91xT
```

### 2. 해쉬코드 생성

```
1. 1-2 에서 decimal 배열에 있는 10진수 값을 모두 더한다.
2. 모두 더한 값을 62진수 코드로 변환하여 2자리의 HashCode생성

EX) 
1. abcdefg => 10,11,12,13,14,15,16,17
2. 10+11+12+13+14+15+16+17 => 108
3. 108 => 1K
  * 최대로 나올 수 있는 최대 HashCode는 61 * 8 = 488 => 7S
```

### 3. ID 생성

```
1. Database의 Auto Increament 기능을 이용
2. DB Insert시 순서대로 생성되는 ID를 6자리의 62진수로 변환
3. 6자리 이하라면 5-자릿수만큼 0으로 채움

EX) 10(a) => 00000a
```

### **4. ID Rotate**

```
3 에서 생생된 6자리의 ID는 순서이기 때문에 유추를 어렵게 하기 위해 HashCode만큼 Rotate시킨다.
EX) ID : 00000a , HashCode : 3 => 00a000
```

### 5. 생성된 쿠폰코드 값

```
1, 2, 4에서 생성된 값들을 모두 연결해준다.
EX)
- frontNum : sTHq3AVg
- hashNum: 4g
- lastNum: 000004

couponCode = sTHq-3AVg-4g00-0004
```


Resource: [reference](https://github.com/kanistyles/coupon#1-coupon-%EC%83%9D%EC%84%B1-%EC%A1%B0%EA%B1%B4-%EB%B0%8F-%EA%B7%9C%EC%B9%99)
