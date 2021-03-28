/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Form = ({ children, onSubmit }) => (
  <StyledForm onSubmit={onSubmit}>{children}</StyledForm>
);

const StyledForm = styled.form`
display:flex;
width: 100%;
align-items: center;
flex-direction: column;
margin: 20px;
`;

export default Form;
