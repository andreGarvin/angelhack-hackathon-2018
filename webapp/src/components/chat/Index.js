import React, { Component } from 'react'
import FontIcon from 'material-ui/FontIcon'

import snaptechapi from 'snaptechapi';

class Chat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: props.username,
            password: props.password,
            sesssion: {},
            conversation: []
        }

        this.renderChat = this.renderChat.bind(this)
    }

    componentDidMount() {
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
                {this.renderChat}
            </div>
        )
    }

    renderChat() {
        this.setState({
            conversation: [...this.state.session]
        })

        return this.state.conversation.map(text => {
            <div>

            </div>
        })
    }

    renderOptions() {
        <div className="optionBox">
             <FontIcon className="material-icons">home</FontIcon>
        </div>
    }
}



export default Chat