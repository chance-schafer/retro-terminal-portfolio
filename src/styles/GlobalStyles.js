import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #000;
    color: #0f0;
    font-family: 'Courier New', Courier, monospace;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: url('/path/to/your/background-image.jpg') no-repeat center center fixed;
    background-size: cover;
  }
`;

export default GlobalStyles;
