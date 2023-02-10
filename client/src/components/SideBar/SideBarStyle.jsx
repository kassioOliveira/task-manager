import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
    position: absolute;
    bottom:0;
    width: 100%;
    height: 92%;
    border: 1px solid red;
    display: flex;
    flex-direction:column;
    justify-content:space-around;
    align-items: center;
    
`;

export const UlStyled = styled.ul`
width: 100%;
height: 90%;

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

export const LiStyled = styled.li`
    width: 80%;
    height: 35px;
    border: 1px solid black;
    list-style: none;
  
`;