/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Input = ({
  name, onChange, value,
}) => (
  <StyledInput name={name} onChange={onChange} value={value} required />
);

const StyledInput = styled.input`
border: none;
border-radius: 5px;
background: #c4c4c4;
margin: 5px 0 20px;
padding: 5px;
`;

export default Input;
