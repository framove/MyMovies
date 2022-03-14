import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        font-family: "Arial";
    }
    body {
        margin: 0;
    }
    a {
        text-decoration: none;
        color: #f8f9fa;
    }
`;


export default GlobalStyle;