import styled, { createGlobalStyle } from "styled-components";


const GlobalStyled = createGlobalStyle`
*{
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=Fredoka:wght@300&family=Kumbh+Sans:wght@400;700&family=League+Spartan:wght@500;700&family=Manrope:wght@800&family=Montserrat:wght@400;700&family=Nunito+Sans:wght@300;600;800&family=Nunito:wght@200;300;400;700&family=Open+Sans:wght@300&family=Poppins:wght@200&family=Righteous&family=Roboto:wght@400;700&family=Ubuntu&display=swap');
    box-sizing:border-box;
    margin:0;
    padding: 0;
    font-family: 'Ubuntu', sans-serif;

    
}
`;

export const ContainerLayout = styled.div`
 width: 100%;
 height: 100vh;
 display: flex;
 /* background-color: #8b81d2; */
 background-color: #1f2a59;
`

 export const Input = styled.input`
 border: 1px solid gray;
 width: 79%;
 height: ${({h})=>(h ? h: '100%')};
 border-radius:5px;
 :focus {
        box-shadow: 0 0 0 0;
         outline:0;
         
    }
 `;

export const TitleStyle = styled.h1`
font-size:1.5rem;
`

export default GlobalStyled;