import styled, { createGlobalStyle } from "styled-components";


const GlobalStyled = createGlobalStyle`
*{
    box-sizing:border-box;
    margin:0;
    padding: 0;
    font-family:'Montserrat',sans-serif;
    
}
`;

export const ContainerLayout = styled.div`
 width: 100%;
 height: 100vh;
 display: flex;
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