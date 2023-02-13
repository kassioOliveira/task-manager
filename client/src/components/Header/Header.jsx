import React, {  } from 'react'
import InputSearch from '../InputSearch/InputSearch'


import { HeaderCompenentStyle, NavContainerStyled , NavLink, Nav } from './HeaderStyle'

export default function Header() {
  
  return (
    <HeaderCompenentStyle>
       <Nav>
        <InputSearch/>
       < NavContainerStyled >
        <NavLink to={'/dia'}>Meu Dia</NavLink>
<NavLink to={'/ola'}>Importante</NavLink>
<NavLink to={'/todas'}>Todas</NavLink>
<NavLink to={'/completas'}>Completas</NavLink>
<NavLink to={'/tarefas'}>Tarefas</NavLink>
<NavLink to={'/listas'}>Listas</NavLink>
        </ NavContainerStyled >
       </Nav>
    </HeaderCompenentStyle>
  )
}
