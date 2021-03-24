/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import Ground from '../components/Ground';

const CouponList = () => {
  const [info, setInfo] = useState();

  useEffect(() => {
    const apiCall = async () => {
      const { data } = await axios.get('http://localhost:3000/list');
      setInfo(data.result);
      console.log(data.result);
    };
    apiCall();
  }, []);

  const useCoupon = async (e) => {
    await axios.put('http://localhost:3000/use', {
      id: e.target.id,
      qnt: e.target.name,
    })
      .then((response) => {
        console.log(response.data);
        setInfo(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Ground type="main">
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
            <Ground>
              E-mail:
              {' '}
              {i.email}
              <br />
              가격:
              {' '}
              {i.price}
              <br />
              수량:
              {' '}
              {i.quantity}
              <br />
              쿠폰번호:
              {' '}
              {i.code}
              <Button type="main" id={i.id} onClick={useCoupon} name={i.quantity}>사용하기</Button>
            </Ground>
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
// display: flex;
// flex-direction: column;
// box-sizing: border-box;
// width: 100%;
padding: 10px;
`;

export default CouponList;
