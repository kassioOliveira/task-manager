import styled from "styled-components";


export const MainCompentStyle = styled.main`

   
    border: 1px solid green;
    width: calc(100vw - 30vw);
    height: 100vh;
    position: absolute;
    right: 0;
    top: 0;
    background-color: ${({color})=> (color ? color: 'blue')};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    @media screen and (max-width: 650px) {
        width: 100vw;
        height: 100vh;
    }
    
`;

export const IconContainer = styled.div`
    width: 40px;
    height: 40px;
    cursor: pointer;
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 200;
    @media screen and (min-width: 650px) {
        display: none;
    }
`