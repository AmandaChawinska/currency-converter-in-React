import { createGlobalStyle } from "styled-components";
import background from "./background.jpg"


export const GlobalStyle = createGlobalStyle `
    html {
    box-sizing: border-box;
    }

    *, *::before, *::after {
    box-sizing: inherit;
    }
    
    body {
    font-family: "Lato", sans-serif;
    background-image: url("${background}");
    background-size: cover;
    }
`;