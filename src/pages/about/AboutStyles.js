// src/pages/about/AboutStyles.js
import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40%;
  gap: 40px;
  h2 {
    font-size: 24px;
    color: #676767;
    text-align: center;
    font-weight: 500;
  }
`;

export const AboutContent = styled.div`
  img {
    width: 200px;
    height: auto;
  }

  h1 {
    margin-top: 40px;
    font-size: 57px;
    color: black;
  }
`;

export const ButtobContent = styled.div`
  margin-top: 100px;
`;
