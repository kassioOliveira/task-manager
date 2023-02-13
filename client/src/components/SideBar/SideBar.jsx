import React, { useContext,} from "react";
import { Container, Nav, NavLink, NavContainerStyled,IconCLose } from "./SideBarStyle";
import InputSearch from "../InputSearch/InputSearch";

import { Context } from "../../Hooks/ContextSideBar";

export default function SideBar() {

  const {menuVisible,setMenuVisible} = useContext(Context);
  return (
   <Container isVisible={menuVisible} >
<IconCLose onClick={()=> setMenuVisible((res)=> res === true? (false):(true))}/>
     <Nav>
      <InputSearch/>
        <NavContainerStyled>
        <NavLink to={'/dia'}>Meu Dia</NavLink>
<NavLink to={'/ola'}>Importante</NavLink>
<NavLink to={'/todas'}>Todas</NavLink>
<NavLink to={'/completas'}>Completas</NavLink>
<NavLink to={'/tarefas'}>Tarefas</NavLink>
<NavLink to={'/listas'}>Listas</NavLink>
        </NavContainerStyled>
    </Nav>
   </Container>
  )
}
