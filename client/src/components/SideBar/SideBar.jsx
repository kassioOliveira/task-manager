import React, { useContext,} from "react";
import { Container, Nav, NavLink, NavContainerStyled,IconCLose } from "./SideBarStyle";
import InputSearch from "../InputSearch/InputSearch";
import {CgNotes,} from 'react-icons/cg'
import {BsStar,BsSun,BsList} from 'react-icons/bs'
import {GiConfirmed} from 'react-icons/gi'

import { Context } from "../../Hooks/Contexts";

export default function SideBar() {

  const {menuVisible,setMenuVisible} = useContext(Context);
  return (
   <Container isVisible={menuVisible} >
<IconCLose onClick={()=> setMenuVisible((res)=> res === true? (false):(true))}/>
     <Nav>
      <InputSearch/>
        <NavContainerStyled>
        <NavLink to={'/dia'}><BsSun/>Meu Dia</NavLink>
<NavLink to={'/ola'}><BsStar/>Importante</NavLink>
<NavLink to={'/completas'}><GiConfirmed/>Completas</NavLink>
<NavLink to={'/'}><CgNotes/>Tarefas</NavLink>
<NavLink to={'/listas'}><BsList/>Listas</NavLink>
        </NavContainerStyled>
    </Nav>
   </Container>
  )
}
