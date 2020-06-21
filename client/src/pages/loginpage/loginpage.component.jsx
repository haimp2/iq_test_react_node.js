import React from 'react'
import './loginpage.styles.scss'
import Login from '../../components/login/login.component'

const LoginPage = () => (
    <div className='login-page-container'>
        <div className='login-page-content'>
            <h1>Login</h1>
            <Login />
        </div>
    </div>
);

export default LoginPage;