import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}

body{
    font-family: "Lexend Deca", sans-serif;
}

h1,h2,h3{
    font-family: "Big Shoulders", sans-serif;
}

img{
    max-width: 100%;
    display: block;
}

ul{
    list-style: none;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
}

a{
    text-decoration: none;
    color: inherit;
}

.contenedorCards{
    width: 100vw;
    max-width: 900px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    overflow: hidden;
}`

