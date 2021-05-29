import { createGlobalStyle } from "styled-components";
import QuicksandFont from "./fonts";


export default createGlobalStyle`
    ${QuicksandFont}

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        height: 100%;
    }

    body {
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        font: 1rem QuicksandFont, sans-serif;
    }
`;