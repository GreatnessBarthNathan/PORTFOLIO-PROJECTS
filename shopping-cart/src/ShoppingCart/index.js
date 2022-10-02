import React from 'react';
import AppProvider from './Store/context';
import CartContainer from './Components/CartContainer';
import './styles/cart.css';
import './styles/auth.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import YourCart from './Pages/YourCart';
import SignUp from './Auth/Pages/SignUp';
import SignIn from './Auth/Pages/SignIn';
import ForgotPassword from './Auth/Pages/ForgotPassword';
import PrivateRoute from './Auth/Components/PrivateRoute';

function ShoppingCart() {
  return (
    <AppProvider>
      <Router>
          <Routes>
              <Route element={<PrivateRoute/>}>
                 <Route path='/your-cart' element={<YourCart/>}/>
              </Route>
              <Route exact path='/' element={<CartContainer/>}/>
              <Route path='/sign-up' element={<SignUp/>}/>
              <Route path='/sign-in' element={<SignIn/>}/>
              <Route path='/forgot-password' element={<ForgotPassword/>}/>
          </Routes>
      </Router>
    </AppProvider>
  );
}

export default ShoppingCart