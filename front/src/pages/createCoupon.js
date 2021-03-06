/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Posting = (e, q, p) => {
  const apiCall = async () => {
    await axios
      .post('http://localhost:3000/coupon', {
        email: e,
        qnt: q,
        price: p,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  apiCall();
};

const CreateCoupon = () => {
  const [inputs, setInputs] = useState({
    email: '',
    qnt: '',
    price: '',
  });

  const { email, qnt, price } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    Posting(email, qnt, price);

    // eslint-disable-next-line no-alert
    alert('쿠폰이 발급되었습니다! 쿠폰함에서 발급된 쿠폰을 확인하세요!');
    setInputs({
      email: '',
      qnt: '',
      price: '',
    });
  };

  return (
    <div>
      <h2>쿠폰 만들기</h2>
      <form onSubmit={onSubmit}>
        <input name="email" placeholder="email" onChange={onChange} value={email} required />
        <input name="qnt" placeholder="수량" type="number" min="1" onChange={onChange} value={qnt} required />
        <input name="price" placeholder="가격" type="number" min="1" onChange={onChange} value={price} required />
        <button type="submit">생성하기</button>
      </form>
      <Link to="/list">
        <button type="button">쿠폰함 바로가기</button>
      </Link>
    </div>
  );
};

export default CreateCoupon;
