import React from 'react'
import { Input } from '../../globalStyle'
import ButtonAdd from '../Buttons/ButtonAdd/ButtonAdd'
import { ContainerInputAdd } from './InputAddStyle'

export default function InputAdd() {
  return (
    <ContainerInputAdd>
        <Input type='text'/>
        <ButtonAdd color={'blue'}>
          Criar
        </ButtonAdd>
    </ContainerInputAdd>
  )
}
