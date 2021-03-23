/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Ground = ({ children, type }) => (
  <StyledG type={type}>{children}</StyledG>
);

const StyledG = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
border-radius: 20px;
background: ${({ type }) => (type === 'main' ? '#fff' : '#d9d9d9')};
margin-top: 20px;
padding: 10px;
`;

export default Ground;
