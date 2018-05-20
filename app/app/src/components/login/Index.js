import React, { Component } from 'react'

// UI STUFF FROM MATERIAL UI
import './styles.css'
import TextField from '@material-ui/core/TextField'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    }

    render() {
        return (
            <form className='form'>
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
            </form>
        )
    }
    
    handleChange(current, text) {
        this.setState({
            [current]: text.target.value
        })
    }
}

export default Login