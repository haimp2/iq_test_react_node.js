import React from 'react'
import './loginpage.styles.scss'
import Login from '../../components/login/login.component'
import { withRouter } from "react-router-dom";

const BASE_URL = 'http://localhost:5000'


const LoginPage = (props) => {

    const userName = localStorage.getItem('userName');
    const uuid = localStorage.getItem('uuid');

    console.log(userName, uuid);

    if (userName && uuid) {
        const body = {
            method: 'post',
            body: JSON.stringify({ 'userName': userName, 'uuid': uuid }),
            headers: {
                "Content-Type": "application/json"
            }
        }
        fetch(`${BASE_URL}/sign-up/validation`, body).then(res => {
            if (res.status === 200) {
                props.history.push('/main')
            }

        }).catch(err => {
            console.log(err);
        })
    }

    const moveToMainPage = () => {
        props.history.push('/main')
    }

    return (<div className='login-page-container'>
        <div className='login-page-content'>
            <h1>Login</h1>
            <Login moveToMain={moveToMainPage} />
        </div>
    </div>)
}

export default LoginPage;