// src/ui/Button.js
import styled from 'styled-components';

const Button = styled.button`
  width: 310px;
  height: 60px;
  background-color: var(--violet-normal);
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 10px;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: var(--violet-normal-hover);
  }

  &:active {
    background-color: var(--violet-normal-active);
    transform: scale(0.95);
  }
`;

export default Button;
