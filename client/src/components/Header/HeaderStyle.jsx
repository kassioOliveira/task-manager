import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderCompenentStyle = styled.header`

 width: 30%;
 height:100%;
 background-color: #e1e1e1;
 background-color: #8a81d26a;
 box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
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
    font-size:1.2rem;
    border-radius:5px;
    text-decoration:none;
    font-weight:bold;
    display: flex;
    gap:10px;
    align-items: center;
    color: #ffff; 
  
`


