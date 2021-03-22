/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Button = ({ children, type }) => (
  <StyledBtn type={type}>{children}</StyledBtn>
);

const StyledBtn = styled.button`
width: 100%;
color: #fff;
border: none;
border-radius: 10px;
background: ${({ type }) => (type === 'main' ? '#5257F6' : '#c4c4c4')};
line-height: 40px;
`;

export default Button;
