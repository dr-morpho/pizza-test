import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
${normalize}

:root{
   --background: #fbfbfb;
   --white: #fff;
   --cart: #c7eebf;
   --green:#38b380;
   --red: #cb3737;
   --text: #393939;
   --spirit: rgba(0,0,0,0.04);
   --border: 1px solid rgba(0, 0, 0, 0.1);
   --shadow: 0px 1px 7px rgba(0, 0, 0, 0.05);
   --shadow-box: 0px 1px 7px rgba(0, 0, 0, 0.5);
   --opacity: #0000003c;
}

*,*::before,*::after{
    margin:0;
    padding:0;
    list-style: none;
    text-decoration: none;
    box-sizing:border-box;
    font-family: sans-serif;
}

body {
    background-color: var(--background);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 0 2rem;
}
`;
