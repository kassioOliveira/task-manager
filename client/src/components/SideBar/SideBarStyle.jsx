import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import {CgClose} from "react-icons/cg"


export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    background-color: rgba(238, 238, 238,55);
     display: none;
    ${({isVisible}) => isVisible && (css`
        display: initial;
        `)}

    @media screen and (min-width: 650px) {   
       display: none;
      
    }
   
`

export const Nav = styled.nav`
   
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    gap: 15px;
  
    
`;

export const NavContainerStyled = styled.div`
width: 100%;
height: 75%;
display: flex;
flex-direction: column;
align-items: center;
`;

export const NavLink = styled(Link)`
    text-decoration:none;
    width: 80%;
    height: 35px;
    border: 1px solid black;
    border-radius:5px;
  text-decoration:none;
  color: black;
  margin: 10px 5px;
  font-weight:bold;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const IconCLose = styled(CgClose)`
    font-size: 40px;
    position: absolute;
    top: 10px;
    left: 10px;
    cursor: pointer;
    z-index: 10;
`