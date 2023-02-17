import React, {  } from 'react'
import InputSearch from '../InputSearch/InputSearch'
import {CgNotes,} from 'react-icons/cg'
import {BsStar,BsSun,BsList} from 'react-icons/bs'
import {GiConfirmed} from 'react-icons/gi'


import { HeaderCompenentStyle, NavContainerStyled , NavLink, Nav } from './HeaderStyle'

export default function Header() {
  
  return (
    <HeaderCompenentStyle>
       <Nav>
        <InputSearch/>
       < NavContainerStyled >
        <NavLink to={'/dia'}><BsSun/>Meu Dia</NavLink>
<NavLink to={'/ola'}><BsStar/>Importante</NavLink>
<NavLink to={'/completas'}><GiConfirmed/>Completas</NavLink>
<NavLink to={'/'}><CgNotes/>Tarefas</NavLink>
<NavLink to={'/listas'}><BsList/>Listas</NavLink>
        </ NavContainerStyled >
       </Nav>
    </HeaderCompenentStyle>
  )
}
