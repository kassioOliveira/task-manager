import React,{useContext} from 'react';
import { IconBar, MainComponentStyle } from './mainStyle'
import InputAdd from '../InputAdd/InputAdd'

import { Context } from '../../Hooks/ContextSideBar'
import { TitleStyle } from '../../globalStyle'

export default function Main() {

  const {setMenuVisible} = useContext(Context);

  return (
    <MainComponentStyle color='white'>
<IconBar onClick={ ()=> setMenuVisible((res)=> res === true? (false):(true))} />
     <article>
      <TitleStyle>
        Tasks
      </TitleStyle>
     </article>
    <InputAdd/>
    </MainComponentStyle>
  )
}
