import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TextInput,
    ListView,
} from 'react-native'
import {
    Button,
    Icon,
    Avatar,
} from 'react-native-elements'

import snaptechapi from 'snaptechapi';

const { width, height } = Dimensions.get('window')

// CREATES THE LIST VIEW
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

// WILL RENDER THE CHAT
const RenderChat = (props) => (
    <View style={props.isUser ? styles.userChat : styles.techChat}>
        <Text style={props.isUser ? styles.messageBubbleUser : styles.messageBubbleTech}>{props.message}</Text>
        <Avatar
            small
            rounded
            source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg" }}
            containerStyle={props.isUser ? { alignSelf: 'flex-end' } : { alignSelf: 'flex-start' }}
        />
    </View>
)

class Chat extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            session: {
                messages: ds.cloneWithRows([
                    {
                        sessionId: "123456",
                        username: "Reni",
                        companyName: "Yahoo",
                        inittime: Date(),
                        activity: 'pending',
                        isUser: true,
                        message: "I NEED HELP!",
                    }
                ])
            }
        }

        this.renderChatOptions = this.renderChatOptions.bind(this)
        this.sendMessage = this.sendMessage.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    async componentDidMount() {
        const { navigation } = this.props
        const sessionId = navigation.getParam('sessionId')
        const session = await snaptechapi.getSession(sessionId)
        session.message = ds.cloneWithRows([
            {
                sessionId: "123456",
                username: "Reni",
                companyName: "Yahoo",
                inittime: Date(),
                activity: 'pending',
                isUser: true,
                message: "I NEED HELP!",
            }
        ])
        this.setState({
            session: { ...this.state.session, ...session }
        })
        await this.onMessages(sessionId)
    }

    onMessages(sessionId) {
        const { navigation } = this.props
        snaptechapi.on(sessionId, messages => {
            if (messages !== []) {
                this.setState({
                    session: {
                        messages: ds.cloneWithRows(messages)
                    }
                })
            }
        })
    }

    onChange(e) {
        this.setState({ message: e.nativeEvent.text })
    }

    async sendMessage() {
        await snaptechapi.send(this.state.session.sessionId, {
            message: this.state.message,
            username: 'ricky',
            type: 'text',
            isUser: true
        })
        this.setState({
            message: ''
        })
    }

    render() {
        return (
            <ListView
                style={{ flex: 1, marginTop: 25 }}
                dataSource={this.state.session.messages}
                renderRow={(data) => <RenderChat {...data} />}
                renderFooter={() => this.renderChatOptions()}
            />
        )
    }

    // ALL CHAT OPTIONS TOOLS
    renderChatOptions() {
        return (
            <View style={ styles.toolBox }>
                <View style={ styles.chatBox }>
                    {
                        <Icon
                            onPress={() => 
                                this.props.navigation.navigate('Camera', {
                                    sessionId: this.state.session.sessionId
                                })
                            }
                            type="ionicon"
                            name="md-camera"
                            size={25}
                        />
                    }
                    <TextInput
                        onChange={this.onChange}
                        editable = {true}
                        maxLength = {72}
                        multiline={true}
                        numberOfLines={2}
                        value={this.state.message}
                        style={{ width: width*.80, padding: 10 }}
                    />
                    {
                        <Icon
                            onPress={this.sendMessage}
                            type="ionicon"
                            name="md-send"
                            size={25}
                        />}
                </View>
            </View>
        )
    }
}

// WILL RENDER THE STYLES
const styles = StyleSheet.create({
    toolBox: {
    // FLEX PROPS
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',

    // DIMENSION PROPS
    height: height * .37,
    },

    chatBox: {
    // FLEX PROPS
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',

    // COLOR PROPS
    borderTopWidth: 1,
    borderTopColor: '#eee',
    },

    userChat: {
    alignSelf: 'flex-end',
    padding: 5,
    },

    techChat: {
    alignSelf: 'flex-start',
    padding: 5,
    },

    messageBubbleTech: {
    width: width * .40,
    borderRadius: 9,
    padding: 5,
    backgroundColor: '#428bca',
    color: '#222',
    fontWeight: 'bold'
    },

    messageBubbleUser: {
    width: width * .40,
    borderRadius: 9,
    padding: 5,
    backgroundColor: '#5bc0de',
    color: '#222',
    fontWeight: 'bold'
    },
})


export default Chat


// const messages = [
//             {
//                 sessionId: "123456",
//                 username: "Reni",
//                 companyName: "Yahoo",
//                 inittime: Date(),
//                 activity: 'pending',
//                 isUser: true,
//                 message: "I NEED HELP!",
//             }, 
//             {
//                 sessionId: "123456",
//                 username: "Reni",
//                 companyName: "Yahoo",
//                 inittime: Date(),
//                 activity: 'pending',
//                 isUser: true,
//                 message: "I NEED HELP!",
//             }, 
//             {
//                 sessionId: "123456",
//                 username: "Reni",
//                 companyName: "Yahoo",
//                 inittime: Date(),
//                 activity: 'pending',
//                 isUser: true,
//                 message: "I NEED HELP!",
//             }, 

//             {
//                 sessionId: "123456",
//                 username: "TECH GUY",
//                 companyName: "Yahoo",
//                 inittime: Date(),
//                 activity: 'pending',
//                 isUser: false,
//                 message: "What can I help you with?"
//             },
// {
//                 sessionId: "123456",
//                 username: "TECH GUY",
//                 companyName: "Yahoo",
//                 inittime: Date(),
//                 activity: 'pending',
//                 isUser: false,
//                 message: "What can I help you with?"
//             },
//             {
//                 sessionId: "123456",
//                 username: "Reni",
//                 companyName: "Yahoo",
//                 inittime: Date(),
//                 activity: 'pending',
//                 isUser: true,
//                 message: "I NEED HELP!",
//             }, 


//         ]
