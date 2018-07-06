import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { updateUser } from './../../dux/reducer';
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

    handleInput(property, value) {
        this.setState({
            [property]: value
        })
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
                <div>
                    <p>Username:</p>
                    <input value={this.state.username} onChange={e => this.handleInput('username', e.target.value)}/>
                    <p>Password:</p>
                    <input type="password" value={this.state.password} onChange={e => this.handleInput('password', e.target.value)}/>
                </div>
                <div className='button-box'>
                    <button onClick={this.login}>Login</button>
                    <button onClick={this.register}>Register</button>
                </div>
            </div>
        )
    } 
}

export default connect( null, { updateUser }) (Auth);