import { createGlobalStyle } from "styled-components";

export const DefaultStyle = createGlobalStyle`

    :root {

        --green: #285353;

    }

    * {

        font-family: 'Atkinson Hyperlegible';
        
    }

    body {
        color: white;
        background: var(--green);
        margin: 0;
        padding: 0;
    }

`;