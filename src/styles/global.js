import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0; 
    box-sizing:border-box;
}
html{
    font-size: 65.5%;
    font-family: Arial, Helvetica, sans-serif;
    .container{
    max-width: 110rem;
    margin: 0 auto;
    }
    .products-list{
        display: flex;
        width: 60%;
        flex-wrap: wrap;
        justify-content: space-between;
    }
}

`;
