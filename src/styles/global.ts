import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: sans-serif;
        
        --primary-color: #00D96E;
        --gray-one: #0C0E25;
        --gray-two: #90939A;
        --gray-three: #BFC0C2;
        --red-alert: #E3324C;
        --yellow-alert: #FB9F36;
    }

    body {
        background: #f0f0f5;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
    }

    a, button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`;
