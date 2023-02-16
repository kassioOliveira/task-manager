import React, {  } from 'react'
import InputSearch from '../InputSearch/InputSearch'
import {CgNotes,} from 'react-icons/cg'
import {BsStar,BsSun,BsList} from 'react-icons/bs'
import {TfiInfinite,} from 'react-icons/tfi'
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
<NavLink to={'/todas'}><TfiInfinite/>Todas</NavLink>
<NavLink to={'/completas'}><GiConfirmed/>Completas</NavLink>
<NavLink to={'/tarefas'}><CgNotes/>Tarefas</NavLink>
<NavLink to={'/listas'}><BsList/>Listas</NavLink>
        </ NavContainerStyled >
       </Nav>
    </HeaderCompenentStyle>
  )
}
