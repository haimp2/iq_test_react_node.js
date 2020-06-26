import React from 'react';
import './login.styles.scss';
import FormInput from '../input/input.component'
import { useHistory } from "react-router-dom";

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
            username: '',
        })
        //const uuid= uuid.anaharef();
        const payload={userName:this.state.username,uuid:uuid};
        fetch('sign-up',payload).then(resp=>{
            const history = useHistory();
            history.push("/main");  
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