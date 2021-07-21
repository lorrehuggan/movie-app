import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
    --primary-color: #61c0dd;
    --primary-color-alt: hsl(194, 75%, 42%);
    --primary-dark: #0f0f0f;
    --logo-font: 'Oswald', sans-serif;
}

* {
    margin: 0;
    box-sizing: 0;
    padding: 0;
}


body {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  font-family: 'Lato', sans-serif;
  position: relative;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  

}

 

`;
