import React from 'react'

import { ButtonAddStyle} from '../ButtonAdd/ButtonAddStyle'

export default function ButtonAdd({children,handleCreateTask}) {
  return (
    <ButtonAddStyle onClick={handleCreateTask}>
        {children}
    </ButtonAddStyle>
  )
}
