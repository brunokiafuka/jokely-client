import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        outline: none;
        box-sizing: border-box;
        font-family: 'Quicksand', sans-serif;
    }
    body {
        background: #FFF 0% 0% no-repeat padding-box;
    }
    a{
        color: #FFF;
        text-decoration: none;
    }
    hr{
        color: #ddd;
        border: 0.5px solid;
        margin: 20px 0;
    }
    
    ul{
        list-style: none;
        padding: 0;
    }
`;

export default GlobalStyle;
