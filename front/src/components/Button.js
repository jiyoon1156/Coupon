import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = ({
  children, type, id, onClick, name,
}) => (
  <StyledBtn type={type} id={id} onClick={onClick} name={name}>{children}</StyledBtn>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.node.isRequired,
  id: PropTypes.node.isRequired,
  onClick: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
};

const StyledBtn = styled.button`
width: 100%;
color: #fff;
border: none;
border-radius: 10px;
background: ${({ type }) => (type === 'main' ? '#5257F6' : '#c4c4c4')};
line-height: 40px;
`;

export default Button;
