import React, {useContext} from 'react';
import { Navigate } from 'react-router-dom';
import { Context} from '../Hooks/Contexts';

export default function PriveteRouteAuth({children}) {

  const {signed} = useContext(Context);


  return (
  signed ? children: <Navigate to='/login'/>
  )
}
