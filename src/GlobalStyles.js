// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --violet-light: #fef9ff;
    --violet-light-hover: #fdf6ff;
    --violet-light-active: #fbecff;
    --violet-normal: #f1c3fe;
    --violet-normal-hover: #d9b0e5;
    --violet-normal-active: #c19ccb;
    --violet-dark: #b592bf;
    --violet-dark-hover: #917598;
    --violet-dark-active: #6c5872;
    --violet-darker: #544459;
    --text-color: #333; /* 기본 텍스트 색상 */
    --background-color: var(--violet-light); /* 배경색을 Light 컬러로 */
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--background-color);
  }

  #root {
    width: 390px; //앱크기로 기본 설정
    height: 100vh;
    background: white;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border-radius: 20px; 
  }

  body {
    font-family: "Pretendard", sans-serif;
    color: var(--text-color);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyle;
