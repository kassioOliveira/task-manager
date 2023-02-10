import React from "react";
import { Nav, NavLink, UlStyled } from "./SideBarStyle";
import InputSearch from "../InputSearch/InputSearch";

export default function SideBar() {
  return (
    <Nav>
      <InputSearch/>
        <UlStyled>
        <NavLink to={'/dia'}>Meu Dia</NavLink>
<NavLink to={'/ola'}>Importante</NavLink>
<NavLink to={'/todas'}>Todas</NavLink>
<NavLink to={'/completas'}>Completas</NavLink>
<NavLink to={'/tarefas'}>Tarefas</NavLink>
<NavLink to={'/listas'}>Listas</NavLink>
        </UlStyled>
    </Nav>
  )
}
