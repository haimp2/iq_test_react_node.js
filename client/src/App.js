import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import LoginPage from  './pages/loginpage/loginpage.component';
import MainPage from './pages/mainapge/mainpage.component';

function App() {
  return (
  <Switch>
    <Route path='/login' component={LoginPage}/>
    <Route path='/main' component={MainPage}/>
  </Switch>
  // <LoginPage/>
  );
}

export default App;
