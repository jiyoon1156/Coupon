/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import Ground from '../components/Ground';
// import Form from '../components/Form';
// import Input from '../components/Input';

const CouponList = () => {
  const [info, setInfo] = useState();

  useEffect(() => {
    const apiCall = async () => {
      const { data } = await axios.get('http://localhost:3000/list');
      setInfo(data);
    };
    apiCall();
  }, []);

  const useCoupon = async (e) => {
    const { data } = await axios.delete(`http://localhost:3000/use/${e.target.id}`);
    console.log(data);
    setInfo(data);
  };

  return (
    <>
      <Ground>
        <NavBar>
          <Button>
            <Link to="/">
              <Button>쿠폰 만들기</Button>
            </Link>
          </Button>
          <Button type="main">
            쿠폰함
          </Button>
        </NavBar>
        <Box>
          {info && info.map((i) => (
            <div>
              {i.email}
              {' '}
              {i.price}
              <Button type="main" id={i.uuid} onClick={useCoupon}>사용하기</Button>
            </div>
          ))}
        </Box>
      </Ground>
    </>
  );
};

const NavBar = styled.div`
display: flex;
width: 100%;
`;

const Box = styled.div`
display: flex;
flex-direction: column;
box-sizing: border-box;
width: 100%;
padding: 10px;
`;

export default CouponList;
