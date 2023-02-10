import React,{useContext} from 'react'
import {FaBars} from 'react-icons/fa'
import { IconContainer, MainCompentStyle } from './mainStyle'
import InputAdd from '../InputAdd/InputAdd'

import { Context } from '../../Hooks/ContextSideBar'

export default function Main() {

  const {openSide} = useContext(Context);

  const openSidebarFunction = () =>{

 if(openSide.current.style.display === 'initial'){
  openSide.current.style.display = 'none'
 }else{
  openSide.current.style.display = 'initial'
 }

  }

  return (
    <MainCompentStyle color='white'>
<IconContainer onClick={ openSidebarFunction} >
<FaBars  style={{width:'100%',height:'100%'}}/>
</IconContainer>
    <InputAdd/>
    </MainCompentStyle>
  )
}
