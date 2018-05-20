import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'

import snaptechapi from 'snaptechapi';

class Chat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: props.username,
            password: props.password,
            sesssion: {},
            sessions: []
        }

        // this.renderChat = this.renderChat.bind(this)
        this.renderOptions = this.renderOptions.bind(this)
    }

    async componentDidMount() {
        const sessions = await snaptechapi.sessions('assign')
        this.setState({
            sessions,
        })

        snaptechapi.on(this.props.sessionId, messages => {
            this.setState({
                session: {
                    messages,
                }
            })
        })
    }
    
    render() {
        return (
            <div className="chatSection">
                {this.renderOptions()}
            </div>
        )
    }

    // renderChat() {
    //     this.setState({
    //         conversation: [...this.state.session]
    //     })

    //     return this.state.conversation.map(text => {
    //         <div>

    //         </div>
    //     })
    // }

    renderOptions() {
        return (
            <div className="optionBox">
                <i className="material-icons">photo_camera</i>
                <TextField 
                    id='email'
                    label='Email'
                    className='textField'
                    value={this.state.email}
                    margin='normal'
                />
                <i className="material-icons">send</i>
            </div>
        )
    }
}



export default Chat