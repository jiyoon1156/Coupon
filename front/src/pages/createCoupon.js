/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import RoundedText from '../components/RoundedText';
import Ground from '../components/Ground';
import Form from '../components/Form';
import Input from '../components/Input';

const Posting = (e) => {
  const apiCall = async () => {
    await axios
      .post('http://localhost:3000/coupon', {
        userName: e,
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
    userName: '',
  });

  const { userName } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    Posting(userName);
    setInputs({
      userName: '',
    });
  };

  return (
    <>
      <Ground type="main">
        <NavBar>
          <Button type="main">
            쿠폰 만들기
          </Button>
        </NavBar>
        <Form onSubmit={onSubmit}>
          ID 를 입력하세요
          <Input name="userName" onChange={onChange} value={userName} />
          <br />
          <RoundedText>발급받기</RoundedText>
        </Form>
        <RoundedText>
          <Link to={{ pathname: inputs.userName === '' ? '/' : `/list/${inputs.userName}` }}>
            조회하기
          </Link>
        </RoundedText>
      </Ground>
    </>
  );
};

const NavBar = styled.div`
display: flex;
width: 100%;
`;

export default CreateCoupon;
