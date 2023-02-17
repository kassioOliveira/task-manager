import React,{useState} from 'react'
import { InputAddCompenent } from './InputAddStyle'
import ButtonAdd from '../Buttons/ButtonAdd/ButtonAdd'
import { ContainerInputAdd } from './InputAddStyle'

export default function InputAdd({inputAdd,handleInputAdd,handleCreateTask}) {

  return (
    <ContainerInputAdd>
        <InputAddCompenent type='text' onChange={handleInputAdd} value={inputAdd}/>
        <ButtonAdd handleCreateTask={handleCreateTask} >
          Criar
        </ButtonAdd>
    </ContainerInputAdd>
  )
}
