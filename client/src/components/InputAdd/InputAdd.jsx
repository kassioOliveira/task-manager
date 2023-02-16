import React from 'react'
import { InputAddCompenent } from './InputAddStyle'
import ButtonAdd from '../Buttons/ButtonAdd/ButtonAdd'
import { ContainerInputAdd } from './InputAddStyle'

export default function InputAdd() {
  return (
    <ContainerInputAdd>
        <InputAddCompenent/>
        <ButtonAdd >
          Criar
        </ButtonAdd>
    </ContainerInputAdd>
  )
}
