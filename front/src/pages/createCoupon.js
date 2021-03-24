/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import Ground from '../components/Ground';
import Form from '../components/Form';
import Input from '../components/Input';

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
        alert('쿠폰이 발급되었습니다! 쿠폰함에서 발급된 쿠폰을 확인하세요!');
      })
      .catch((error) => {
        console.log(error);
        alert('쿠폰 발행에 실패했습니다.');
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
    setInputs({
      email: '',
      qnt: '',
      price: '',
    });
  };

  return (
    <>
      <Ground type="main">
        <NavBar>
          <Button type="main">
            쿠폰 만들기
          </Button>
          <Button>
            <Link to="/list">
              쿠폰함
            </Link>
          </Button>
        </NavBar>
        <Form onSubmit={onSubmit}>
          E-mail
          <Input name="email" onChange={onChange} value={email} />
          수량
          <Input name="qnt" type="number" min="1" onChange={onChange} value={qnt} required />
          가격
          <Input name="price" type="number" min="1" onChange={onChange} value={price} required />
          <Button type="main">발급받기</Button>
        </Form>
      </Ground>
    </>
  );
};

const NavBar = styled.div`
display: flex;
width: 100%;
`;

export default CreateCoupon;
