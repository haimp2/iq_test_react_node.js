import React from 'react'
import './loginpage.styles.scss'
import Login from '../../components/login/login.component'
import { useHistory } from "react-router-dom";

const LoginPage = () => {

    const {userName,uuid} = localStorage.getItem('iqTest');
    if(userName && uuid){
        const body = {userName: userName,uuid:uuid}
        fetch('http://localhost/sign-up',body).then(resp=>{
            resp = resp.json();
            const history = useHistory();
            history.push("/main");  
        }).catch(err=> {
            
        })
    }
    return (<div className='login-page-container'>
    <div className='login-page-content'>
        <h1>Login</h1>
        <Login />
    </div>
</div>)
}

export default LoginPage;