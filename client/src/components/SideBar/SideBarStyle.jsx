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
    background: rgb(0,16,36);
    background: linear-gradient(300deg, rgba(0,16,36,0.9808298319327731) 39%, rgba(31,42,89,1) 54%);
     display: none;
    ${({isVisible}) => isVisible && (css`
        display: initial;
        `)}

    @media screen and (min-width: 650px) {   
       display: none;
      
    }
   
`

export const Nav = styled.nav`
   
    width: 55%;
    height: 100%;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    gap: 15px;
    background-color: #8a81d26a;
 box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
   @media screen and (max-width:400px) {
    width: 100%;
   }
    
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
    border-radius:5px;
  text-decoration:none;
  color: #ffff;
  margin: 10px 5px;
  font-weight:bold;
  display: flex;
  gap: 10px;
  align-items: center;
  font-size:1.3rem;
  @media screen and (max-width:400px) {
    font-size:1.6rem;
    justify-content: center;
  }
`

export const IconCLose = styled(CgClose)`
    font-size: 40px;
    position: absolute;
    top: 10px;
    left: 10px;
    cursor: pointer;
    z-index: 10;
    color: #ffff;
`