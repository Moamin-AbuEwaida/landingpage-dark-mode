import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }

    :root{
        --color-1: #f2f6ff;
        --color-2: #fafaff;
        --color-3: #222;
        --color-primary: #c0e550;
        --color-primary-dark: #222;
        --color-white: #fff;
        --bg: #000;
    }

    body{
        
        font-family: 'Lato', sans-serif;
        color: var(--color-white);
        font-size: 1.2rem;
        font-weight: 700;
    }
`;

export default GlobalStyle;