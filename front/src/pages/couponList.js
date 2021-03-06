/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
    <div>
      <h2>쿠폰 리스트</h2>
      <Link to="/">
        <button type="button">쿠폰 만들러 가기</button>
      </Link>
      <div>
        {info && info.map((i) => (
          <div>
            {i.email}
            {' '}
            {i.price}
            <button type="button" id={i.uuid} onClick={useCoupon}>사용하기</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CouponList;
