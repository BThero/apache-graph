import { createGlobalStyle } from 'styled-components';
import { device } from 'misc/device';

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
    --red: #EB144C;
    --pink: #F78DA7;
    --purple: #9900EF;

    --gray-1: hsl(212, 33%, 89%);
    --gray-2: hsl(210, 31%, 80%);
    --gray-3: hsl(211, 27%, 70%);
    --gray-4: hsl(209, 23%, 60%);
    --gray-5: hsl(210, 22%, 49%);
    --gray-6: hsl(209, 28%, 39%);
    --gray-7: hsl(209, 34%, 30%);
    --gray-8: hsl(211, 39%, 23%);
    --gray-9: hsl(209, 61%, 16%);
  }

  body {
    background-color: var(--white);
    min-height: 100vh;
    font-size: 14px;
    /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'InterRegular';
  }

  *, *:before, *:after {
    margin: 0;
    padding: 0;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  @media ${device.tablet} {
    body {
      font-size: 16px;
    }
  }

  @media ${device.desktop} {
    body {
      font-size: 18px;
    }
  }
`;

export default GlobalStyles;
