import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #222;
    --white: #fff;

    --orange: #FF6900;
    --yellow: #FCB900;
    --lime: #7BDCB5;
    --green: #00D084;
    --lightblue: #8ED1FC;
    --blue: #0693E3;
    --gray: #ABB8C3;
    --red: #EB144C;
    --pink: #F78DA7;
    --purple: #9900EF;
  }

  body {
    background-color: var(--white);
    min-height: 100vh;
    font-size: 18px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, *:before, *:after {
    margin: 0;
    padding: 0;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export default GlobalStyles;
