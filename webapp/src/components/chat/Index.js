import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Avatar from 'react-avatar';

import './styles.css'
import snaptechapi from 'snaptechapi';

class Chat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: props.username,
            // password: props.password,
            sesssion: {},
            sessions: []
        }

        this.renderChat = this.renderChat.bind(this)
        this.renderOptions = this.renderOptions.bind(this)
    }

    async componentDidMount() {
        const sessionId = this.props.sessionId
        const session = await snaptechapi.getSession(sessionId)

        this.setState({
            session,
        })

        snaptechapi.on(sessionId, messages => {
            this.setState({
                session: {
                    // messages: Object.keys(messages),
                    messages: ["Hi", "What can I help you with?"]
                }
            })
        })
    }
    
    render() {
        return (
            <div className="chatSection">
                {this.renderChat()}
                {this.renderOptions()}
            </div>
        )
    }

    renderChat() {
        if(this.state.session && this.state.session.messages) {
            // console.log(this.state.session.messages)
            return this.state.session.messages.map((messages, key) => {
                return (
                    <div key={key} className={this.state.session.isUser ? "userChat" : "techChat" }>
                        <h4>{messages}</h4>
                        <Avatar name={this.props.username} />
                    </div>
                )
            })
        } else {
            return (
                <div>
                    <h4>Welcome Back! {this.props.username}</h4>
                </div>
            )
        }
    }

    renderOptions() {
        return (
            <div className="optionBox">
                <i className="material-icons">photo_camera</i>
                <TextField 
                    id='message'
                    className='textField'
                    value={this.state.email}
                    margin='normal'
                    multiline={true}
                />
                <i className="material-icons">send</i>
            </div>
        )
    }
}

export default Chat