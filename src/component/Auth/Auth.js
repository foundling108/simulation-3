import React, {Component} from 'react';
import axios from 'axios';
import './Auth.css'


class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
    }

    login() {
        axios.post('/api/auth/login', this.state)
        .then(res => {
            this.props.updateUser(res.data);
            this.props.history.push('/dashboard');

        })
    }

    register() {
        axios.post('/api/auth/register', this.state)
        .then(res => {
            this.props.updateUser(res.data);
            this.props.history.push('/dashboard');
        })
    }

    render() {
        return(
            <div className='Auth-body'>
                <h1>Helo</h1>
                <div className='button-box'>
                    <button onClick={this.login}>Login</button>
                    <button onClick={this.register}>Register</button>
                </div>
            </div>
        )
    } 
}

export default Auth;