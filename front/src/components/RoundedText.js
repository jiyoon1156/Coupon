import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RoundedText = ({ children }) => <StyledText>{children}</StyledText>;

RoundedText.propTypes = {
  children: PropTypes.node.isRequired,
};

const StyledText = styled.button`
  display: inline-block;
  width: 60%;
  padding: 10px 20px;
  margin: 0 10px;
  border: 2px solid #5257F6;
  border-radius: 15px;
  color: #5257F6;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  text-align: center;
  outline: none;
`;

export default RoundedText;
