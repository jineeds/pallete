// src/pages/about/AboutStyles.js
import styled from 'styled-components';

export const AboutContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #fef9ff; /* Violet Light */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  img {
    width: 200px;
    height: auto;
  }

  h1 {
    font-size: 2rem;
    color: #b592bf; /* Violet Dark */
  }
`;
