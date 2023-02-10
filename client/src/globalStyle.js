import styled, { createGlobalStyle } from "styled-components";


const GlobalStyled = createGlobalStyle`
*{
    box-sizing:border-box;
    margin:0;
    padding: 0;
    font-family:'Montserrat',sans-serif;
    
}
`;

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


export default GlobalStyled;