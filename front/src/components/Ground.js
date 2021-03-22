/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Ground = ({ children }) => (
  <StyledG>{children}</StyledG>
);

const StyledG = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
border-radius: 20px;
background-color: #fff;
margin-top: 20px;
padding: 10px;
`;

export default Ground;
