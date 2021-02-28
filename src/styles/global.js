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
    max-width: 100rem;
    margin: 0 auto;
    }
   
    header{
        background-color: #ccc;
        display: flex;
        justify-content: space-between;
        padding: 1.5rem 3rem;
        font-size: 1.4rem;
        font-weight: bold;
        .header__brand{
            font-size: 3rem;
        }
        a{
            color: #333;
            text-decoration: none;
        }
        .header__user-box{
            display: flex;
            align-items: center;
            .header__user-box__img{
                background-color: #555;
                height: 3rem;
                width: 3rem;
                border-radius: 100%;
                margin-right: 1rem;
            }
        }
    }
    main{
        margin-top: 6rem;
        display: flex;
        justify-content: space-between;
        .products-list{
        display: flex;
        width: 60%;
        flex-wrap: wrap;
        justify-content: space-between;
        }   
       
    }
}

`;
