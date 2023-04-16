import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,100&family=Rock+Salt&display=swap');
html{
    box-sizing: border-box;
}
*, *::after,*::before{
    box-sizing: inherit;
}
body{
    background-color: #fff;
    font-size:16px;
    margin:0;
    padding:0;
    font-family:'Poppins', sans-serif;
}
p{
    opacity: 0.6;
    line-height: 1.5;
}

img{
    width:100%;
    height:100%;
}
`;

export default GlobalStyle;
