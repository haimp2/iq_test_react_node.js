import React from 'react';
import './login.styles.scss';
import FormInput from '../input/input.component'

class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            username: ''
        }
    }

    handleSubmit = event =>{
        event.preventDeafult();
        this.setState({
            username: ''
        })
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({[name]: value})
    }

    render(){
        return (
            <div className='login-container'>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                    type="text" 
                    name="username"
                    lable='User Name'
                    handelChange = {this.handleChange} 
                    value={this.state.username} 
                    required />
                    <input type="submit" value='Submit'/>
                </form>
            </div>
        );
    }
    
}

export default Login;