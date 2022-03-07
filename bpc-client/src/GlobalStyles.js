import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --lightGray: #e5e7eb;
        --gray: #d1d5db;
        --darkGray: #6b7280;
        --blue: #3b82f6;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    body {
        color: #000000;
        background-color: var(--lightGray);
        font-size: 1rem;
        font-family: 'Poppins', sans-serif;
    }
`;

export default GlobalStyles;
