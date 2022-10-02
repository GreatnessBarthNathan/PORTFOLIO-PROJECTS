import React from 'react'
import {Outlet, Navigate} from 'react-router-dom';
import {useCartContext} from '../../Store/context';

function PrivateRoute () {
  const {currentUser} = useCartContext();
  
  return (
     currentUser ? <Outlet/> : <Navigate to='/sign-in'/>
  );
}

export default PrivateRoute