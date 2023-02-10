import React, { useContext } from 'react'
import SideBar from '../SideBar/SideBar'
 
import { Context } from '../../Hooks/ContextSideBar'

import { HeaderCompenentStyle } from './HeaderStyle'

export default function Header() {

  const {openSide} = useContext(Context)

  return (
    <HeaderCompenentStyle ref={openSide} >
       <SideBar/>
    </HeaderCompenentStyle>
  )
}
