import React from 'react'

import { ButtonAddStyle} from '../ButtonAdd/ButtonAddStyle'

export default function ButtonAdd({style,color,children}) {
  return (
    <ButtonAddStyle style={style} color={`${color}`}>
        {children}
    </ButtonAddStyle>
  )
}
