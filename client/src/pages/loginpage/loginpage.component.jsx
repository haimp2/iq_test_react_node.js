import React from 'react'
import './loginpage.styles.scss'
import Login from '../../components/login/login.component'
import { withRouter } from "react-router-dom";

const BASE_URL = 'http://localhost:5000'


const LoginPage = (props) => {

    const userName = localStorage.getItem('userName');
    const uuid = localStorage.getItem('uuid');
    if (userName && uuid) {
        const body = { userName: userName, uuid: uuid }
        fetch(`${BASE_URL}/sign-up`, body).then(resp => {
            resp = resp.json();
            if (resp.status === 201) {
                alert(resp.body.mgs)
                withRouter(({ history }) => {
                    history.goForward('/main')
                })
            }

        }).catch(err => {

        })
    }

    const moveToMainPage = () =>{
        props.history.push('/main')
    }
    return (<div className='login-page-container'>
        <div className='login-page-content'>
            <h1>Login</h1>
            <Login moveToMain = {moveToMainPage}/>
        </div>
    </div>)
}

export default LoginPage;