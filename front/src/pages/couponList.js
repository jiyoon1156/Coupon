/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import Ground from '../components/Ground';

const CouponList = ({ match }) => {
  const userId = match.params.id;

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
    })
      .then((response) => {
        console.log(response.data);
        setInfo(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let pk = 0;
  let couponCode = '';
  let couponUsage = '';
  let i = 0;
  if (info) {
    // eslint-disable-next-line no-plusplus
    for (i = 0; i < info.length; i++) {
      if (userId === info[i].username) {
        pk = info[i].id;
        couponCode = info[i].code;
        couponUsage = info[i].used;
        break;
      }
    }
    if (i === info.length) {
      return (
        <h2>해당 ID로 조회된 쿠폰이 없습니다</h2>
      );
    }
  }
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
            내 쿠폰함
          </Button>
        </NavBar>
        <Box>
          <Ground>
            ID:
            {' '}
            {userId}
            <br />
            <br />
            쿠폰번호:
            {' '}
            {couponCode}
            <br />
            <br />
            사용여부:
            {' '}
            {couponUsage === 0 ? '사용 가능' : '이미 사용한 쿠폰'}
            <br />
            <br />
            {couponUsage === 0 ? <Button type="main" id={pk} onClick={useCoupon}>사용하기</Button> : ''}
          </Ground>
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
