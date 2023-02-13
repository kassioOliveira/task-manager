import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderCompenentStyle = styled.header`
 border:1px solid gray;
 width: 30%;
 height:100%;

 background-color: #eeeeee;

 @media screen and (max-width: 650px) {
        display: none;
    }
  
`
export const Nav = styled.nav`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction:column;
    justify-content:space-around;
    align-items: center;
    
`;

export const NavContainerStyled = styled.div`
width: 100%;
height: 85%;
display: flex;
flex-direction: column;
gap: 30px;
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
  font-weight:bold;
  display: flex;
  justify-content: center;
  align-items: center;
`


