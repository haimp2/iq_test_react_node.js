import React from 'react';
import './login.styles.scss';
import FormInput from '../input/input.component'
import { v4 as uuidv4 } from 'uuid'


const BASE_URL = 'http://localhost:5000'

class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            username: ''
        }
    }



    handleSubmit = event => {
        event.preventDefault()

        const uuid = uuidv4();
        const payload = { 
            method: 'post',
            body: JSON.stringify({'userName': this.state.username, 'uuid': uuid }),
            headers : {
                "Content-Type": "application/json"
            }
        };
        fetch(`${BASE_URL}/sign-up`, payload).then(resp => {
            if (resp.status === 201) {
                localStorage.setItem('userName', this.state.username);
                localStorage.setItem('uuid', uuid);
                this.props.moveToMain();
            }
        }).catch(err => {
            alert(err)
            console.log(err);
            this.setState({
                username: '',
            })
        })
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='login-container'>
                <form onSubmit={(this.handleSubmit)}>
                    <FormInput
                        type="text"
                        name="username"
                        lable='User Name'
                        handelChange={this.handleChange}
                        value={this.state.username}
                        required />
                    <input type="submit" value='Submit' />
                </form>
            </div>
        );
    }

}

export default Login;