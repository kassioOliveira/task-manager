import styled from "styled-components";


export const ButtonAddStyle = styled.button`
    background-color: ${({color})=> (color? color: 'trasparent')};
    border: none;
    padding: 20px;
    border-radius:5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: white;
    width: 20%;
    height: 100%;
    
`