import React, { Component } from 'react'

// UI STUFF FROM MATERIAL UI
import './styles.css'
import TextField from '@material-ui/core/TextField'

import snaptechapi from 'snaptechapi';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            allSessions: [],
            ready: false,
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    render() {
        if(!this.state.ready) {
            return (
                <form className='form' onSubmit={this.handleSubmit} >
                    <TextField 
                        id='email'
                        label='Email'
                        className='textField'
                        value={this.state.email}
                        onChange={(text) => this.handleChange('email', text)}
                        margin='normal'
                    />
                    <TextField 
                        id='password'
                        label='Password'
                        type='password'
                        className='textField'
                        value={this.state.password}
                        onChange={(text) => this.handleChange('password', text)}
                        margin='normal'
                    />
                    <button className="btn waves-effect waves-light" type="submit">Submit
                    <i className="material-icons right">send</i>
                    </button>
                </form>
            )
        }
        else {
            // GIVE ME YOUR LIST COMPONENT HERE
            return ( )
        }
    }
    
    handleChange(current, text) {
        this.setState({
            [current]: text.target.value
        })
    }

    async handleSubmit(e) {
        e.preventDefault();
        const { email, password } = this.state

        const username = email.split("@")[0]
        const company = email.split("@")[1].split(".")[0]

        const allSessions = await snaptechapi.sessions("assign")

        this.setState({
            allSessions,
            ready: true,
        })
    }
}

export default Login