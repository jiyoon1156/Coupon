import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Parsing = (e, q, p) => {
  const [info, setInfo] = useState();
  useEffect(() => {
    const apiCall = async () => {
      await axios
        .post('http://localhost:3000/coupon', {
          email: e,
          qnt: q,
          price: p,
        })
        .then((response) => {
          setInfo(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    apiCall();
  }, [e, q, p]);

  if (!info) return null;

  return info;
};

const CreateCoupon = () => {
  // const [inputs, setInputs] = useState({
  //   email: '',
  //   qnt: '',
  //   price: '',
  // });

  // const { email, qnt, price } = inputs;

  // const onChange = (e) => {
  //   console.log(e.target);
  //   const { name, value } = e.target;
  //   setInputs({
  //     ...inputs,
  //     [name]: value,
  //   });
  // };

  // const onReset = () => {
  //   setInputs({
  //     email: '',
  //     qnt: '',
  //     price: '',
  //   });
  // };

  const list = Parsing('admin@admin.com', 3, 7000);
  console.log(list);
  // if (!list) return console.log('waiting');
  return (
    <div>
      <h2>쿠폰 만들기</h2>
      {/* <input name="email" placeholder="email" onChange={onChange} value={email} />
      <input name="qnt" placeholder="수량" onChange={onChange} value={qnt} />
      <input name="price" placeholder="가격" onChange={onChange} value={price} />
      <button type="button" onClick={onReset}>초기화</button> */}
      <div>
        <b>
          값:
          {/* {list && list[0]} */}
        </b>
      </div>
    </div>
  );
};
// 나중에 버튼 누르면 쿠폰이 발급되었습니다 쿠폰함가서 확인하세요
export default CreateCoupon;
