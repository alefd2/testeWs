import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`

    * {
        list-style-type: none;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-align: center;

        font-family: 'Ubuntu', sans-serif;
        text-decoration: none;
        -webkit-font-smoothin: none;
        -moz-osx-font-smoothing:grayscale;
        

    }

#root {
    height: 100vh;
}

body {
    
    background: rgb(218, 216, 216);
    color: rgb(56, 55, 55);
}


`;
